import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    };
  }

  async componentDidMount() {
    //API Call ---
    const data = await fetch("https://api.github.com/users/anandhimanshu");
    const json = await data.json();

    this.setState({
      userInfo: json
    });

    console.log(json);
  }

  render() {
    
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <h4>Email: someone@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
