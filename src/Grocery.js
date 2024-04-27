import React from 'react';
import Main from './Main';
import AddListItem from './AddListItem';
import SearchItem from './SearchItem';
import List from './List';
import { useState, useEffect } from 'react';
import apiRequest from './apiRequest';


const Grocery = () => {
  // we've placed the list from List.js in the parent component, App.js
  // This will allow us to pass the items object down to child components as props.
  //   const [items, setItems] = useState([
      // {
      //     id: 0,
      //     checked: false,
      //     item: "Apples"
      // },
      // {
      //     id: 1,
      //     checked: false,
      //     item: "pears"
      // },
      // {
      //     id: 2,
      //     checked: false,
      //     item: "grapes"
      // }
  // ])

  // Pulling the items list from the most recent state stored in local storage:
  // Needed to add a shortciruit! Unexpected behaviour otherwise.

  // const [items, setItems] = useState(
  //   localStorage.getItem("shoppingList") ? JSON.parse(localStorage.getItem(
  //     "shoppingList"
  //   )) : []
  // );

  // API to fetch the grocery list data from a db:
  const API_URL = "http://localhost:3500/items";

  // Changing the useState implementation for grocery list from lecture 13:
  // Now we always initialise an empty array. Then make db call to populate state.
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // implementation until lecture 13:
    // localStorage.setItem('shoppingList', JSON.stringify(items));
    // Using fetch API:
    const fetchGrocList = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data.");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        console.log(err.stack);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    // setTimeout(() => fetchGrocList(), 2000);
    fetchGrocList();
  }, [items]);
  // Different state hook for adding components to the list:
  const [newItem, setNewItem] = useState('');

  // Another state hook to monitor state of the search bar:
  const [search, setSearch] = useState('');

  const addItem = async (item) => {

    const idList = items.map(item => Number(item.id));
    const largestId = Math.max(...idList);
    const newId = largestId + 1;
    const newItemObject = {id: newId.toString(), checked: false, item: item};
    // Had to convert id integers to string. Otherwise json-server giving 404
    // When attempting to send a fetch request with an item's id in the URL.
    const newList = [...items, newItemObject];
    setItems(newList);

    // add change to the db:
    const postOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItemObject)
    };
    const fetchResult = await apiRequest(API_URL, postOptions);
    if (fetchResult) setFetchError(fetchResult);
  }

  // Handling the state of the checkbox:
  const itemCheckedState = async (searchId) => {
     
      const newList = items.map((item) => item.id === searchId ? {...item, checked: !item.checked} : item);
      setItems(newList);

      // Update the state in the database:
      const changedItem = newList.filter(item => item.id === searchId);
      const updateOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({checked: changedItem[0].checked})
      };
      const url = `${API_URL}/${searchId}`;
      const fetchResult = await apiRequest(url, updateOptions);
      if (fetchResult) setFetchError(fetchResult);
  }

  const itemDelete = async (id) => {
      const newList = items.filter((item) => item.id !== id);

      // Reset the indices to account for deleted object from list:
      // Without this change, multiple items could have same id, causing unexpected behaviour.
      newList.map((item, index) => item.id = index.toString());
      setItems(newList);
      // console.log(newList);

      // update the db:
      // Not sure how the lecturer is handling updating incremental IDs when an item is deleted.
      // My solution is to map the updated list to ids based on the updated index position of 
      // each item.
      // First delete all items from the db.
      // Then, post the items with the new ids to the db.
      // JSON server doesn't allow for changing the complete array value for a key.
      // And many URL querying features broken for json-server. Eg: _order not working.
      // So, No longer going to use incrementing ids that are fixed to account for each delete.
      // Just going to fetch and identify the largest id integer. Next id will be it + 1.

      const response = await fetch(API_URL, {method: "GET"});
      const currentDb = await response.json();
      console.log(currentDb);
      const deleteOptions = {method: "DELETE"};
      const url = `${API_URL}/${id}`;
      const fetchResult = await apiRequest(url, deleteOptions);
      if (fetchResult) setFetchError(fetchResult);
  }

  const submitNewItem = (event) => {
    event.preventDefault();
    if (!newItem) return;
    console.log(`Submitted ${newItem}`);
    // add item to list
    addItem(newItem);
    // reset newItem variable state.
    setNewItem('');
  }
    return (
        <main>
        <Main />
        <AddListItem 
          newItem={newItem}
          setNewItem={setNewItem}
          submitNewItem={submitNewItem}
        />
        <br />
        <SearchItem 
          search={search}
          setSearch={setSearch}
        />
        {isLoading && <p>Loading your grocery list...</p>}
        {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <List 
          // items={items} {/* Changing this line to add search feature */}
          items={items.filter(existingItem => (existingItem.item.toLowerCase())
              .includes(search.toLowerCase())
            )}
          itemCheckedState={itemCheckedState}
          itemDelete={itemDelete}
        />}
      </main>
    )
}

export default Grocery