import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("Namaste React");
    // }, 1000);

    //Best place to API Call
    const data = await fetch("https://api.github.com/users/hsarfaraz");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    console.log("ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("Component Did Component");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Component will unmount");
  }

  render() {
    console.log("render");
    const { avatar_url, name, location } = this.state.userInfo;
    return (
      <div>
        <h3>This is Profile class based component</h3>
        <img src={avatar_url} className="avatar w-20 rounded" />
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}

export default ProfileClass;
