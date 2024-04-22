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