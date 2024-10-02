# To Do List
Project based on: https://www.youtube.com/watch?v=82PXenL4MGg&t=249s 

### Part 1
- install React: npm create vite@latest 'project-name'
- follow the prompt -> select React and JavaScript
- install node dependencies -> npm install & npm run dev
- select and link google fonts
- select and link font-awesome cdn

### part 2
- create folder components
- create 3 jsx files (components); input, list, and card
- interact each other using props and import methods
- if a variable will be used to interact with users, use the state method.

### part 3
- use todoInput file to capture and action user's input.
- use todoList file to ...
- user todoCardfile to ...
- write logic for icon edit and remove (functions).
- Save data in local storage, use different hook: useEffect

### Summary
App component = Parent
3 components; todoInput & todoList are linked to parent, whereas todoCard linked to another component (todoList)
The App file then rendered in the main file, which then fetched HTML.
Use map method to mapping the array content. Rule: The parent element MUST have a unique key.
Render children content within another component -> pass props method inside the main function, as an argument, then declare a variable and assign it the props. Lastly, call the variable in the return section.
Communication structure in React -> if 2 components (same level)that need access to the same item, then need to define it in the parent element.
Pass variable as an attribute to the component tags (within the parent component). After that, within the child component, pass props in the argument, then destructure by declaring a new variable and assign it the props.
React stateful variable -> variable that users will interact with. It has a special syntax. Import is also required. example -> const [state, setstate] = useState();
