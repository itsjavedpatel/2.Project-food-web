import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount Called");
  }
  componentDidUpdate() {
    console.log("Parent is updated");
  }
  render() {
    console.log("parent render is called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is a food partner delivery app</h2>
        <UserClass name={"first"} address={"Indore, India"} />
      </div>
    );
  }
}
export default About;
