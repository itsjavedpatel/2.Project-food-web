# Parcel

- Dev build
- Local server
- HMR = hot module replacement
- File Watching algorithm - written in c++
- Caching = for faster builds
- Image optimization
- Minification
- Bundling
- Compress
- consistent hashing
- Code splitting
- Differential bundeling - support older browser version
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking = remove unused code
- Different dev and prod bundles

# We are building a food order app

- In this we have App component

* - inside App component we are doing component composition
* - so,inside App component we have header component ,body component and footer component

- Header Component

* - logo
* - Nav items

- Body

* - Search
* - RestaurentContainer
* - - RestaurentCard
* - - - img
* - - - Name ,Star rating,cusine, delivery time

- Footer

* - Copyright
* - Links
* - Address
* - Contact
* - Copyright

# What are props

- props are the properties or args which are passed to the component from the parent component.
- If I say "I'm passing props to the component" it is same as I say "I'm passing arguments to the function".
- The props we pass into the component will be passed as js object. we have to destructure it to use the different key-value pair

# key in React

- keys are special attributes that should be included when rendering lists of elements. They serve as a unique identifier for each element, helping React to manage updates efficiently by identifying which items in the list have changed, been added, or need to be removed
- This allows React to track which items have been modified, avoiding unnecessary re-renders and improving performance
- Suppose we are using map, so react says never use index as the key.

# Import / Export

- Default import / export
- - export default Component/variable;
- - import Component/ variable from "path";
- Named Export / component
- - export const Component1/variable;
- - export const Component2
- - import {Component1/variable,Component2} from "path";

# REACT HOOKS

- React hook is a normal javascript utility function, Which is given to us by react
- Written by FB developer
- Example:- useState(), useContext(),useEffect() etc.

# useState():-

- used to create local state variables inside our functional component in react

- - 1. import {useState} from react.
- - 2. const [state,setState]=useState(initialState);
- - 3. setState is a function which updates our 'state' Variable. setState(state+1);
- - 4. Never creates useState outside your component, inside any conditional statement, for loop and also inside function as it causes inconsistencies.
- - 5. So, create useState inside the functional component on the higher level.

# Note:-

- Whenever state variable changes, React re-renders the component

# useEffect(()=>{},[]):- useEffect is a React Hook that lets you synchronize a component with an external system.

- - 1. It takes two arguments, first is callback function and second is dependency array(optional).
- - 2. useEffect callback func is called as soon as our component render cycle completed.
- - 3. It is used to make API call after the component is render 1st time.
- - 4. If no dependency array => useEffect is called whenever component renders.
- - 5. If empty dependency array => useEffect is called on only initial render.
- - 6. If dependency array is not empty => useEffect is called when the dependencies in the array updated.

# Types of Routing in Web Apps

- 1. Client side Routing
- 2. Server side Routing

# react-router-dom

- We don't use anchor tag to navigate becuase it reloads full page therefore we use Link component provided by react-router-dom. Link component only render the changes in the page not whole page. This makes react single page application (SPA).

# Virtual DOM:-

- it is a represenntation of actual DOM.
- it is basically js Object.

# Diff Algorithm:-

- It finds out the difference between two Virtual DOM (updated virtual DOM and previous Virtual DOM) ans then actually update the DOM in each render cycle.

# Reconciliation

- Reconciliation is the process React uses to efficiently update the UI when the state or props of a component change. It determines the minimal number of updates required to apply changes, instead of re-rendering everything from scratch.

# How Reconciliation Works

- Virtual DOM Comparison:
- - React maintains a Virtual DOM, which is a lightweight copy of the actual DOM.
- - When state or props change, React creates a new Virtual DOM tree.

- Diffing Algorithm:
- - React compares the new Virtual DOM with the previous one to identify changes.
- - It detects which elements need to be updated, added, or removed.

- Efficient Updates (Re-rendering & Commit Phase):
- - Instead of replacing everything, React only updates the parts that changed.
- - Updates are batched and applied efficiently to the actual DOM.

# React Fibre

- React Fiber is a reconciliation algorithm introduced in React 16 that enhances how React updates the UI. It makes React faster and more efficient by breaking rendering work into small, manageable units and prioritizing updates.

- React Fiber is a new implementation of reconciliation that improves its efficiency using:
- - Asynchronous rendering (pauses & resumes work).
- - Prioritization (urgent updates first, background tasks later).
- - Incremental rendering (small updates instead of blocking everything).

# Monolith architecture

- Monolithic architecture is a single, unified codebase where all components of an application (frontend, backend, business logic, database access, etc.) are tightly coupled and deployed together as one unit.

- Example Scenario
- Let's say you're building an E-commerce Website:
- - Frontend → Product page, cart, checkout page
- - Backend → Authentication, order management, payment processing
- - Database Layer → MySQL for products, users, orders

- - In a monolithic app, all of this code is in one project and deployed as one .war, .jar, .exe, or container.

- How It Works
- - All code → Single project
- - Single database connection
- - When you deploy → one big app goes live

# Microservices Architecture

- Microservices architecture breaks an application into multiple small services.Each microservice is independent, has its own database, and communicates with others via APIs.
- It follows single responsibility principle.

- Example Scenario
- For the same E-commerce Website:
- - User Service → Handles registration, login, authentication
- - Product Service → Manages products and inventory
- - Order Service → Handles order placement
- - Payment Service → Manages payments
- - Notification Service → Sends email/SMS updates

- - Each service runs independently and can be deployed separately.

- How It Works
- - Each service → own codebase, own database
- - Communicates via REST APIs / gRPC
- - Deployed independently

# Class Based Component

- It extends react's Component class to make user defined component using class
- To return jsx we use render(){} and return the jsx like we did in fucntional component
- To use props there are two ways-
- - First is when we use constructor(props) so, we use super(props) and pass props as argument and use as this.props.prop_name.
- - Second is without constructor we simply use this.props.prop_name

- To create state variable we use this.state which is an object and used inside constructor
- To update state variabe we use this.setState({}) and pass update the state variable whichever we want

- If you define a constructor in a class component, you must call super(props) before using this.
- super(props) calls the parent class (React.Component) constructor and initializes this.
- Without calling super(props), this will be undefined inside the constructor.

- We use componentDidMount() to make API call as it is called after our class component fully mounted it behaves like useEffect() in functional component

- It also have componentDidUpdate() it will triggered whenever there is update in the component, it is used to do some work after updates like making API call after update

- It also have componentWillUnmount() it will triggered or called when we move to next component from the viewport, it is used for cleanup.

# React lifecycle

- MOUNT -> UPDATE-> UNMOUNT

- There are two phases of react lifecyle
- - render phase - it works with virtual DOM here, Pure and has no side effects. may be paused, aborted, or restarted by react
- - commit phase - it works with actual DOM here, run side effects, schedule updates

# NOTE

- When there are more than one child then react batched render phases and commit phases it means first render phase of all the children took place then the commit phase.

# NOTE

- When we want cleanup in functional component after unmounting that component we use return inside useEffect to do this

- - - useEffect(()=>{
      clg("useEffect is called");
      return ()=>{
      console.log("This is will be called after unmounting");
      }
      },[])

# We don’t use async directly in the useEffect callback because:

- useEffect expects synchronous cleanup or nothing, but async returns a Promise, which breaks React’s expectations.
- Cleanup functions must run synchronously during unmounting or re-rendering.
- Instead, we define an inner async function and call it inside useEffect.

# Custom Hooks

- As We know that hooks is nothing but js utility function provided by react.
- We can create our own hooks.
- to create hook we write a function which starts with use in the begining like useRestrauntData and after creating it and implementing logic we can export it same as other thing we exports.
- and we can import this hook anywhere in our project.

# Bundling

- Bundling (or bundle) is a process used in modern web development where multiple files (like JavaScript, CSS, images, etc.) are combined and optimized into fewer files — often even a single file — to improve website performance and loading speed.

# Chunking

- Chunking is the process of splitting your JavaScript (or CSS) code into smaller pieces, called chunks, so that the browser doesn't need to load the entire codebase at once.It improves performance, page load speed, and user experience.

- Why Chunking is Needed

- - Without chunking:
- - - Your app bundles all the JavaScript into a single huge file.
- - - On page load, the browser downloads everything, even the parts of the app the user doesn’t need right now.
- - - This causes slow initial load times.

- - With chunking:
- - - You split the code into logical chunks.
- - - The browser loads only what's needed for the current page.
- - - Other chunks load on demand when required.

- This is also known as code splitting, Dynamic bundling, lazy loading, on demand loading, dynamic import
- To achieve this we use lazy(()=> import("path of that component")) provided by react and wrap that component inside Suspense component provided by react.

# Higher order component

- higher order component is a function that takes a component and returns a component
