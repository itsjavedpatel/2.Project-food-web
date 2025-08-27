import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.contact = "4567890";
    // console.log(this.props.name + " child constructor is called");

    // how to create state variable inside class component
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  componentDidMount() {
    //  it is used to make API call
    this.timer = setInterval(() => {
      console.log("Timer start");
    }, 1000);
    // console.log(this.props.name + " child componentDidMount is called");
  }
  componentDidUpdate() {
    console.log(this.props.name + " child is updated");
  }
  componentWillUnmount() {
    // We use this for cleanup
    clearInterval(this.timer);
  }
  render() {
    const { name, address } = this.props;
    console.log(name + " child render is called");
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>COUNT:{count}</h1>
        <button
          onClick={() => {
            // this.state.count = this.state.count + 1; // wrong way to update state variable
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {address}</h3>
        <h4>Contact: {this.contact}</h4>
      </div>
    );
  }
}
export default UserClass;
