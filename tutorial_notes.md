## React Tutorial

### Lecture 2 - App and JSX

- In the 'src' directory of your react application, you will start off with two js files:
    - index.js
    - App.js (Pascal case)
- App.js is the parent (root) component.
- Other component files can be written. Each of these will needed to be imported into the index.js file.
- Modern react industry standard is based on functional components.
- ***Class-based*** components are ***no longer*** widely used.

##### Functional component structure

- Declared as a JS function. Verbose or as an arrow function.
- The function ALWAYS returns JSX.
- JSX provides a template for the component layout. Like Jinja in Python.
- JSX can be thought of as writing html in javascript.
- Some reserved words need to be avoided though. Example:
```javascript
    <div className="App"></div>
```
- In standard html, an element's class list is declared using the 'class' attribute.
- In jsx, its 'className'.
- Using JSX's templating engine, variables and arrays can be rendered on the DOM.
- Objects ***cannot*** be passed to JSX inside curly braces. React will throw an error.
- Objects must be mapped to serialisable data types before rendering the component.
- See this [link](https://kinsta.com/knowledgebase/objects-are-not-valid-as-a-react-child/) for more info.
- JSX comments need to be placed inside curly braces as well, and using C's multiline syntax.

```javascript
    {/* This is a comment in JSX */}
```

### Lecture 3 - Functional Components

- Each child functional component you create needs to be imported into the main App.js
- Use the E7 react snippets extension to create boilerplate code for each component.
- This is done by:
    1. Creating a new component JS file with name in Pascal case. Open the empty file.
    2. opening the VS code command palette and searching for snippet.
    3. Choose the option to insert an E7 snippet and type ***rafce***.
    4. Press enter. Boiler plate code should be added to the new JS file.

- By default boiler plate code will recommend creating a div element.
- This is not necessary. You can create other elements like main, header, footer, etc.
- BUT, each react component can only have one parent header, ie, either main or header or footer, etc.
- This issue is avoided by using div tags, or react fragments, ie, empty html tags.

### Lecture 4 - Applying CSS Styles

- CSS files can be linked to jsx files, like linking html files. The components need to have a className declared.
- CSS styling can also be added directly into the component tags using the style attribute.
- Unlike HTML, where you simple write the style key:value pairs inside quotes, you declare the styling as an object
    placed inside the curly braces in jsx.

```javascript
    return (
        <header style={{
            backgroundColor: 'mediumblue',
            color: '#fff'
        }}></header>
    )

```

- You can also write the styling into an object variable and pass the variable name into elements style attribute.

```javascript
    const headerStyle = {
        backgroundColor: 'mediumblue',
        color: '#fff'
    }
    return (
        <header style={ headerStyle }></header>
    )

```

- If you have multiple style sheets for multiple component files, then the css file needs to be imported to its 
    corresponding *.js file.

### Lecture 5 - Click Events

- As shown by the two examples in Main.js, event triggers can be used to execute functions in the component.
- These functions declared as arrow functions and assigned to a variable, so they can be called upon event trigger.
- Functions can be passed to JSX in two ways: by reference and by declaring an arrow function to execute the onClick
    function.


### Lecture 6 - useState() hook

- useState() is a react hook that is instantiated with a getter and a setter for a variable.
- The setter is used to changed the value of the variable.
- To use this hook, you need to write the following import statement and instantiate a tuple as follows:

```javascript
import { useState } from 'react';

const [name, setName] = useState('Dave');

```
- A key concept to understand with state in react is that the state can ***only*** be updated once per event.
- Trying to call the setter function in useState() multiple times in the same event trigger will not multiple setter
    calls to be made.
- Example:

```javascript
const [count, setCount] = useState(0);
```

### Lecture 7 - Rendering Lists in JSX

- Need to use the map() function on lists to iterate through each item in the list and map the item to desired html
    elements, typically an ordered or unordered list.
- See List.js for an example of this.
- To manage the state of the list elements, use map() to create a copy of the original list, using conditional to make the desired changes.
- Then use the setter function of useState() to set the state of the component to the new list.
- To delete an item from a list, its the same process, but using the filter() function to eliminate the item(s) with specific key(s).


### Lecture 8 - Props and prop drilling

- Props (properties) to a react component is like attributes to an HTML element.
- These props can be passed into the component function. This is called prop drilling.
- See Header.js for an example. 
    Inside the App.js file: 
```javascript
    function App() {

        return (
            <div className="App">
            <Header title="Groceries"/>
            <Main />
            <List />
            <Footer />
            </div>
        );
    }

```
    Inside Header.js:
```javascript
    const Header = ({ title }) => {
        return (
            <header>
                <h2>{ title }</h2>
            </header>
        )
    }

    Header.defaultProps = {
        title: "Default Title"
    }
```
- Props can be passed down from from the parent component to its child components.
- ***But*** props cannot be transferred between children nodes.
- So you need to think about the heirarchy of your components when designing the web page.
- Any data that needs to be passed from one component to another should be declared in the parent component.
- The aim of react is to build reuseable components.For maximum reusability, you should create a separate component for each HTML tag you intend to use in a DOM tree, and pass various properties down to child component.
- In this example, we breakdown the List.js file further into a child component for creating an unordered list.
- This &lt;ul&gt; component will have a further child component for each &lt;li&gt; component.

### Lecture 9 - Controlled Component Inputs

- Use the preventDefault() method to prevent the default behaviour of events.
- Click [here](https://www.w3schools.com/jsref/event_preventdefault.asp) for more details.
- For example, the onSubmit event's default behaviour is to reload the webpage. This can be prevented with the preventDefault() attribute.
- Using the useRef hook to shift the focus back to the addListItem input element after the submit button is clicked. Refer to [AddListItem.js](./src/AddListItem.js) for implementation.



### Lecture 10 - Example Project


### Lecture 11 - useEffect Hook

- The useEffect() take in an arrow function as an argument, for the action to perform on render.
- It takes in a second argument called 'dependency' which controls when the action should be performed. All desired dependencies need to be passed as an array.
- If no dependency is defined, then the action will be performed on each page render.
- useEffect used in conjunction with useState can be a great tool for writing DRY code.
- In our example in [App.js](./src/App.js), we were calling the setAndSaveItems() function to change the state of the items list, ***and*** to set the state of the localStorage object 'shoppingList'.
- useEffect can be used to alter the state of localStorage with 'items' as one of the dependencies.
- This means every time 'setItems' is called to change the state of 'items', then useEffect() changes the state of localStorage variable 'shoppingList'.


### Lecture 12 - Setting up JSON Server 

- Using the following library: [json-server](https://www.npmjs.com/package/json-server)
- Rather than installing this as a dependency in the project with the "npm i json-server" command, you can simply execute the library and use it with the following command:
```bash
npx json-server -p <port-number> -w <path-to-db-json>
```
- Now, you will be able to access your json-object db via API calls.

### Lecture 13 - Fetch API Data

- Setup a fetch() call to get the json from the server and populate the grocery list on the webpage.
- Making db calls is asynchronous so need to resolve promise to display the data properly.
- This can be done using then() statements, or async await.
- How to use async await with arrow functions? You can write an arrow function as shown below if you have to await the output of another asynchronous function's return value:

```javascript
    const exampleFunc = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    }

    (async () => await exampleFunc())();
    // This will ensure you await the fetch call.
```
- When writing code to fetch data from a db, write the request in try-catch blocks to account for common errors when making db calls.
- Create a useState hook to manage the state of the error from fetch requests. Display these error messages on the DOM, where appropriate, to maximise interactivity with the user.
- DB calls can occasionally take a lot of time. Beneficial to add some form of loading animation or message to let the user know.
- The loading state is handled using a separate useState hook.

### Lecture 14 - CRUD Operation on json-server
- json-server works by letting you access a key's values by passing the key as an argument in the URL.
- Unlike a relational database, you cannot delete all the contents of a key or update all the contents of a key in one db call.
- Need to loop through numerous db calls, passing the id or each item to delete as the argument.
- json-server has some broken features.

### Lecture 15 - JSON API challenge

- The task is to make calls to an [api](https://jsonplaceholder.typicode.com/) and present all the data on a single web page using react.
- Will come back to this challege later, as I want to use Routers to create multipage application.
- Lecturer covers Routers in the next lesson.

### Lectures 16 and 17 - React Router

#### The lecturer is using react router version 5. The latest version as of 2024 is version 6, where significant changes have been made to components, and hooks!
##### Read the latest documentation [here](https://reactrouter.com/en/main)

- React is known for being able to build <abbr title="Single Page Applications">SPAs</abbr>.
- You can also build multi-page applications with react, but not natively.
- Need to install a dependency called ***react-router-dom***.
- This will enable us to route between different 'html pages' within react.
- MAJOR ISSUE: Tutorial uses react-router-dom v5, but the latest version is V6.
- Components like ***Switch*** used in the tutorial are deprecated in V6.
- Writing V5 code like the tutorial will result in errors. Click [here](https://reactrouter.com/en/main/start/overview) for documentation on latest version of react-router-dom.
- When making an API to GET an item with a paticuar id, the path needs to be written slightly differently for a Route component:

```javascript
    <Route path="/post/:id"/>
    // The ':' indicates that its a variable being concatenated to the path url string
    // This is similar to the following using vanilla js:
    const url = `/post/${id}`;
```
- The colon is a 'param' placeholder. Any parameter that follows can be accessed using the useParams hook built into react-router-dom.
- useHistory() gives you access to the history instance object for a session.
- You can push endpoints to this history instance using the useHistory() hook.
- This is a great way to redirect the user to other 'pages' in your react DOM once an action is completed on another page.
- For the full documentation, click [here](https://v5.reactrouter.com/web/api/history).
- ***But*** this is deprecated.
- If on V6 of react-router-dom, the hook is now called useNavigate(). You no longer 'push' a change to the hook. You simply pass the redirect URL as an argument to the hook.