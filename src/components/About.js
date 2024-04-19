import UserClass from "./userClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
   
  }

  render() {    return (
      <div className="about">
        <h1>About</h1>
        <h2>This is a Namaste React WebSeries !!!</h2>

        <UserClass
          name={"anshu"}
          location={"lucknow"}
          email={"someone@class.com"}
        />
        
      </div>
    );
  }
}

export default About;
