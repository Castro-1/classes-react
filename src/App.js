import React from "react";

// export default function App(props) {
//   return <h1>{props.type} Component</h1>;
// }

// export default class App extends React.Component {
//   render() {
//     return <h1>{this.props.type} Component</h1>;
//   }
// }

/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

// #1
// export default function App() {
//   return (
//     <div>
//       <Header username="Juan" />
//       <Greeting />
//     </div>
//   );
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header username="Juan" />
//         <Greeting />
//       </div>
//     );
//   }
// }

// #2
// function Header(props) {
//   return (
//     <header>
//       <p>Welcome, {props.username}!</p>
//     </header>
//   );
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}!</p>
//       </header>
//     );
//   }
// }

// #3
// Hint: any "display logic" can be placed inside the `render`
// method before the `return` statement
// function Greeting() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   if (hours < 12) {
//     timeOfDay = "morning";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "afternoon";
//   } else {
//     timeOfDay = "night";
//   }
//   return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
// }

// class Greeting extends React.Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }
//     return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
//   }
// }

// export default class App extends React.Component {
//   // const [goOut, setGoOut] = React.useState("Yes");
//    /**
//      * A class component with state will ALWAYS save state in a class
//      * instance variable called `state`, which will always be an object.
//      * The individual values you save in state will be properties on
//      * the `state` object.
//      *
//      * The simplest (and more modern) way to delcare new state in a
//      * class component is to just use a "class field" declaring state
//      * as an object, like you see below.
//      *
//      * Then, throughout the rest of the component (e.g. inside the render
//      * method) you can access that state with `this.state.<yourPropertyHere>`
//      */
//   state = {
//     goOut: "Yes",
//   };

//   /**
//      * Any class methods you create that need to call the `this.setState`
//      * method (which is available to our component because we're extending
//      * React.Component) should be declared as an arrow function, for
//      * reasons we will discuss soon. (Note: other class methods you
//      * want to make that DON'T use `this.setState` don't necessarily
//      * need to be declared as arrow function to work correctly)
//      */

//   toggleGoOut = () => {
//     this.setState((prevState) => {
//       return {
//         goOut: prevState.goOut === "Yes" ? "No" : "Yes",
//       };
//     });
//   };
//   render() {
//     return (
//       <div className="state">
//         <h1 className="state--title">Should I go out tonight?</h1>
//         <div className="state--value" onClick={this.toggleGoOut}>
//           <h1>{this.state.goOut}</h1>
//         </div>
//       </div>
//     );
//   }
// }

/**
 * Challenge: Convert this stateful function component
 * to a stateful class component. At the end, everything
 * should work exactly the way it does now.
 *
 * 1. Change the syntax to a class component
 * 2. Declare state in the class component that
 *    can hold the value of `count`
 * 3. Update the add and subtract methods so you won't
 *    get the error about calling `setState` on undefined
 * 4. Update the values in the render method to account
 *    for the changeover to a class component
 */

// export default function App() {
//   const [count, setCount] = React.useState(0);

//   function add() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function subtract() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={subtract}>
//         –
//       </button>
//       <div className="counter--count">
//         <h1>{count}</h1>
//       </div>
//       <button className="counter--plus" onClick={add}>
//         +
//       </button>
//     </div>
//   );
// }

// export default class App extends React.Component {
//   // const [count, setCount] = React.useState(0);
//   state = {
//     count: 0,
//   };

//   add = () => {
//     this.setState((prevCount) => ({ count: prevCount.count + 1 }));
//   };

//   subtract = () => {
//     this.setState((prevCount) => ({ count: prevCount.count - 1 }));
//   };

//   render() {
//     return (
//       <div className="counter">
//         <button className="counter--minus" onClick={this.subtract}>
//           –
//         </button>
//         <div className="counter--count">
//           <h1>{this.state.count}</h1>
//         </div>
//         <button className="counter--plus" onClick={this.add}>
//           +
//         </button>
//       </div>
//     );
//   }
// }

// Before ES6
// export default class App extends React.Component {
//   /**
//    * If you can't use class fields in your class components
//    * for some reason, then you'll need to make use of the
//    * class' `constructor` method to initialize your state object.
//    * The first line of the constructor method should be a call
//    * to `super()` like you see below, and then you can add your
//    * state variable as a property attached to `this`
//    */
//   constructor() {
//     super();
//     this.state = {
//       goOut: "Yes",
//     };
//     this.toggleGoOut = this.toggleGoOut.bind(this);
//   }
//   /**
//    * If you can't use arrow functions for your class methods,
//    * you'll need to make sure to `bind` them inside the
//    * constructor above.
//    */

//   toggleGoOut() {
//     this.setState((prevState) => {
//       return {
//         goOut: prevState.goOut === "Yes" ? "No" : "Yes",
//       };
//     });
//   }

//   render() {
//     return (
//       <div className="state">
//         <h1 className="state--title">Should I go out tonight?</h1>
//         <div className="state--value" onClick={this.toggleGoOut}>
//           <h1>{this.state.goOut}</h1>
//         </div>
//       </div>
//     );
//   }
// }

/**
 * Challenge: convert the class fields and arrow methods
 * to make use of the class `constructor` method.
 *
 * 1. Add a constructor() method
 * 2. Call super()
 * 3. Initialize your state inside the constructor
 * 4. Convert your arrow function class methods back to
 *    regular class methods
 * 5. Bind those class methods in the constructor method
 */

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };

//     this.add = this.add.bind(this);
//     this.subtract = this.subtract.bind(this);
//   }

//   add() {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   }

//   subtract() {
//     this.setState((prevState) => ({ count: prevState.count - 1 }));
//   }

//   render() {
//     return (
//       <div className="counter">
//         <button className="counter--minus" onClick={this.subtract}>
//           –
//         </button>
//         <div className="counter--count">
//           <h1>{this.state.count}</h1>
//         </div>
//         <button className="counter--plus" onClick={this.add}>
//           +
//         </button>
//       </div>
//     );
//   }
// }

/**
 * Challenge: update the function component to a class component.
 *
 * Bonus: you can use class fields and arrow function methods
 * to avoid needing to add a constructor method 😄
 *
 * Tip: Move the `let starIcon = ...` line into the `render` method
 * before the `return`, since that is display logic
 */
// export default function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   });

//   let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

//   function toggleFavorite() {
//     setContact((prevContact) => ({
//       ...prevContact,
//       isFavorite: !prevContact.isFavorite,
//     }));
//   }

//   return (
//     <main>
//       <article className="card">
//         <img src="./images/user.png" className="card--image" alt="user" />
//         <div className="card--info">
//           <img
//             src={`../images/${starIcon}`}
//             className="card--favorite"
//             onClick={toggleFavorite}
//             alt={contact.isFavorite ? "Favorite" : "Not Favorite"}
//           />
//           <h2 className="card--name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="card--contact">{contact.phone}</p>
//           <p className="card--contact">{contact.email}</p>
//         </div>
//       </article>
//     </main>
//   );
// }

// export default class App extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   };
//   // const [contact, setContact] = React.useState({
//   //   firstName: "John",
//   //   lastName: "Doe",
//   //   phone: "+1 (719) 555-1212",
//   //   email: "itsmyrealname@example.com",
//   //   isFavorite: false,
//   // });

//   toggleFavorite = () => {
//     this.setState((prevContact) => ({
//       //   ...prevContact,
//       isFavorite: !prevContact.isFavorite,
//     }));
//   };
//   render() {
//     let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png";
//     return (
//       <main>
//         <article className="card">
//           <img src="./images/user.png" className="card--image" alt="user" />
//           <div className="card--info">
//             <img
//               src={`../images/${starIcon}`}
//               className="card--favorite"
//               onClick={this.toggleFavorite}
//               alt={this.state.isFavorite ? "Favorite" : "Not Favorite"}
//             />
//             <h2 className="card--name">
//               {this.state.firstName} {this.state.lastName}
//             </h2>
//             <p className="card--state">{this.state.phone}</p>
//             <p className="card--state">{this.state.email}</p>
//           </div>
//         </article>
//       </main>
//     );
//   }
// }

// lifeCycle methods

// export default class App extends React.Component {
//   state = {
//     character: {},
//   };

//   /**
//    * Goal: get the first character from the Star Wars
//    * API and display the name on the screen
//    */

//   /**
//    * Challenge:
//    *
//    * Save the Star Wars character object in state! Then,
//    * display the `name` property of the character on the
//    * screen.
//    */

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://swapi.dev/api/people/1")
//       .then((res) => res.json())
//       .then((data) => this.setState({ character: data }));
//   }

//   // React.useEffect(() => {
//   //     // Your code here
//   // }, [])

//   render() {
//     console.log("render");
//     return <h1>{this.state.character.name}</h1>;
//   }
// }

class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };

  /**
   * Goal:
   * 1. Whenever the state changes, save it in localStorage
   * 2. When the form mounts, pre-populate the state if
   *    there's saved data in localStorage
   */

  componentDidMount() {
    if (localStorage.getItem("form")) {
      this.setState(JSON.parse(localStorage.form));
    } else {
      localStorage.setItem("form", JSON.stringify(this.state));
    }
  }

  componentDidUpdate() {
    localStorage.setItem("form", JSON.stringify(this.state));
  }

  render() {
    console.log("render");
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleChange}
          name="firstName"
          value={this.state.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={this.handleChange}
          name="lastName"
          value={this.state.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
        />
        <textarea
          value={this.state.comments}
          placeholder="Comments"
          onChange={this.handleChange}
          name="comments"
        />
        <input
          type="checkbox"
          id="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
        <br />

        <fieldset>
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={this.state.employment === "unemployed"}
            onChange={this.handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={this.state.employment === "part-time"}
            onChange={this.handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={this.state.employment === "full-time"}
            onChange={this.handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>
        <br />

        <label className="favColor" htmlFor="favColor">
          What is your favorite color?
        </label>
        <br />
        <select
          id="favColor"
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
      </form>
    );
  }
}

export default App;
