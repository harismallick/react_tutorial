## Knowledge from the following video:
https://www.youtube.com/watch?v=wIyHSOugGGw

These are the key react concepts to know:

### React

React is a component based library. Rather than thinking of the HTML DOM as one static file, these components make the
DOM dynamic and each component is assigned a 'state'. This state changes based on the content that needs to be displayed
on the page. Data is stored in React as two things: state and props (see below for details). State is data owned by the 
component itself. Props are data which come from the parent.

Useful legacy documentation [here](https://legacy.reactjs.org/docs/introducing-jsx.html).
Latest react documentation [here](https://react.dev/learn)

#### 0. Declarative vs Imperative programming

- One of the key concepts to understand to use React correctly and efficiently is the difference between these two programming paradigms.
- Imperative programming is when you define the output you desire, along with the steps on how to achieve it.
- With declarative programming, you define the output desired, without declaring how to achieve it.
- Traditional example of declarative programming are the use of higher order functions like map(), filer() and reduce(). And the use of the ternary operator.
- Javascript code for react needs to be written using the declarative paradigm.
- You should not use loops and custom functions to change the state of component objects.
- You should use the built-in abstractions to achieve the end goal.
- This will ensure maximum optimisation with the JSX engine, and help avoid bugs.
- For more information, go to these links:
    1. [link-1](https://stackoverflow.com/questions/1784664/what-is-the-difference-between-declarative-and-imperative-paradigm-in-programmin)
    2. [link-2]()

#### 1. How do components work?

- The components are written using JS or TS
- React components are written using PascalCase.
- The functions can return HTML markup that is added, appended, or deleted from the DOM.
- But to add these elements to the DOM, the createElement() function needs to be called for every component.
- As this can result in repetitive code, React developer choose to return JSX instead from Reaction functions.
- As JSX is javascript, need to write its syntax using camelCase.

#### 2. JSX - Templating

- JSX supports templating to pass variables into components before they are rendered.
- This is done by placing the variable inside curly braces.
- This is similar to templating in Python-Flask using Jinja.

```javascript
    const planet = "world";
    <div>Hello {planet}</div>
```
- You can also style the components using JS objects using the style attribute.
- This is known as dynamic styling.

```javascript
    const background = "red";
    <div style={{ background }} />
```
- Using this example, all div tags will have the background colour red in the component.

#### 3. JSX - Fragments

- JSX is based on javascript, and like JS functions, it can only return 'one' thing.
- This 'thing' is typically an HTML parent element.
- One JSX function cannot return more than one parent element per component.
- This issue can be avoided by wrapping multiple parent elements inside of a div element.

```
    <div>
        <main>
           foo
       </main>
        <footer>
            bar
        </footer>
    </div>
```

- Rather than declaring divs every time, You can use emtpy HTML tags, called react fragments:

```
    <>
        <main>
           foo
       </main>
        <footer>
            bar
        </footer>
    </>
```
#### 4. Props

- Props is short for properties.
- They are like function arguments in JavaScript and attributes in HTML.
- You declare props like writing attibutes inside HTML tags.

```javascript
    const myElement = <Car brand="ford" />
    // Use the attribute in the following way:
    function Car(props) {
        return <h2>I am a { props.brand }.</h2>
}
```
- You can pass just about anything as prop to a component.
- Components can be props to other components.
- You pass child components to the parent component as props.

#### 5. Keys

- Keys are unique IDs assigned to each components or to a list of components inside a list.
- You declare a key using the following syntax:

```html
    <Component key={ '1' } />
```
- You can use the index, if there is no unique key.

#### 6. Rendering

- This is the process used by react to convert the JS code into actual HTML that is rendered on the DOM.
- React does this using a 'Virtual' DOM.
- The virtual DOM is much faster to update. So, react performs 3 steps to create/update changes to the browser page:
    1. Check if the state has changed - If this is the case, then the changes are updated to the V-DOM.
    2. Then reacts checks for the differences between the V-DOM and the real DOM. This process is called 'diff'ing.
    3. Once all the differences have been found between the V-DOM and the DOM, then 'reconciliation' occurs to make both
        doms identical.

#### 7. Event Handling

- Like vanilla HTML + JS, React can listen for events and update the DOM via event handling.
- The common events that you will use are: onClick (buttons), onChange (input), onSubmit (forms).


#### 8. State

- State can be defined as a snapshot of the DOM at a partcular point in time.
- The state of the DOM cannot be changed by simply using JS variables, as they dont cause rerendering of the component.
- It must be changed using specific methods like useState() and useReducer()

    ###### useState()

    - It takes in two arguments: one variable whose state is to be tracked; and one function that will update the state
        of the first variable.
    ```javascript
    
        function Likes() {
            const [likes, setLikes] = useState(0);

            const handleClick = () => {
                setLikes(likes + 1);
            }

            return (
                <button onClick={handleClick}>
                    Likes: {likes}
                </button>
            )
        }
    ```

#### 9. React Hooks

- useState() is a method that falls under a category of 'hooks' called state hooks.
- There are many different types of react hooks that are used by the developer to interact with the components.
- The 5 most popular react hooks are:
    1. State Hooks: Used to manage the state of the DOM.
    2. Context Hooks: Use data that is passed via context. useContext()
    3. Ref hooks: Used to hand URI. useRef()
    4. Effect hooks: Used to plug into external systems like APIs. useEffect()
    5. Performance hooks: To monitor the performance of the application. useMemo() and useCallback()

#### 10. Purity

- Purity is used to define how react components should work.
- In React, purity means that the same input should have the same output.
- A component should only ever return JSX.
- Don't change elements and components that existed before rendering.
- Knowing when your components are pure will help you write efficient and safe React code.
- Head to this [link](https://www.leighhalliday.com/react-purity) for more info on purity.
- A react component is considered to be pure if its output is only determined by the given inputs (props).
- An impure component is one whose output is determined by other factors as well, like the component's state.

###### Why write pure react components?

- Class-based components do not need to be re-rendered if the prop values have not changed.
- This makes it much more efficient because re-renders can be avoided just by investigating whether the props have 
    changed.
- Using the ***React.PureComponent*** parent class allows us to efficiently handle re-rendering of class-based 
    pure components.

    ```javascript
        import React from "react";

        export default class PureClass extends React.PureComponent {
            render() {
                const { seconds } = this.props;
                return <p>I am updating every {seconds} seconds.</p>;
            }
        }
    ```
- Pure functions in react: We now have the ***React.memo*** wrapper (a higher-order component) which enables a functional 
    component to avoid re-rendering if the props remain the same.

    ```javascript
        import React from "react";

        function PureFunction({ seconds }) {
        return <p>I am updating every {seconds} seconds.</p>;
        }

        function areEqual(prevProps, nextProps) {
        return prevProps.seconds === nextProps.seconds;
        }

        export default React.memo(PureFunction, areEqual);
    ```

#### 11. Strict Mode

- Strict mode is a component that wraps around the app and is used to prevent errors in react code.
- This allows you to quickly detect problems during development.

```javascript
    import { StrictMode } from "react"

    <StrictMode>
        <App />
    </StrictMode>
```

#### 12. Effects

- Use this hook to communicate with the browser API or to connect to a server.
- Effects are code that reaches outside of the react application.
- Using event handlers is the best solution for achieving this. Example: making HTTP requests.

```javascript
    function handleSubmit() {
        e.preventDefault();
        post('/api/register', { email, password })
    }

```
- If its not possible to use an event handler, then you can use the useEffect() hook.
- useEffect() fetches data the first time a component is loaded.

```javascript
    useEffect(() => {
        fetchData().then(
            data => {
                // use data here
            }
        )
    }, [])
```

#### 13. Refs

- Use this to interact with the HTML DOM directly from within react.
- Declaring a ref is akin to the href attribute of html. It can be used to get access to html elements.


#### 14. Context

- This is a way of passing data down the DOM tree, from parent components to children components.
- This is done in 4 steps:
    1. Create your context
        ```javascript
            const AppContext = createContext();
        ```
    2. Wrap Provider component:
        ```html
            <AppContext.Provider>
                <App />
            </AppContext.Provider>
        ```
    3. Put data on value prop:
        ```html
            <AppContext.Provider value="hello">
        ```
    4. Get the data in child components using  useContext()
        ```javascript
            function Title() {
                const text = useContext(AppContext);
                return <h1>{ text }</h1>
            }
        ```

#### 15 Portal

- Like context, but for react components.
- You can move components between elements in the DOM.
- This is perfect for components that cannot be displayed properly on the DOM because of their parent component's 
    styling. Eg: modals, dropdowns, tool tips
- use the createPortal() function; pass in the components and the destination element for that component. 

#### 16. Suspense

- These are component wrappers around other components that will take time to load because they're awaiting a response
    from the server.
- In such instances, displaying some form of 'loading' animation or text would help.
- This is achieved using suspense.

#### 17. Error boundaries

- This is like declaring try-except clauses for your components, so the app doesn't catastrophically break.
- Rather than using the throw() function, like your would in vanilla JS, you wrap your application around the
    ***\<ErrorBoundary\>*** componenet