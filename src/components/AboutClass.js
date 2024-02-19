import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunction from "./Profile";
import UserContext from "../utils/CustomContext/UserContext";
import React from "react";

class AboutClass extends React.Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the namaste Reactjs course - finding the path</p>
        {/* <Outlet /> */}
        {/* <ProfileFunction name={"Sarfaraz"} /> */}
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">{user.name}</h4>
          )}
        </UserContext.Consumer>
        <ProfileClass name={"Hussain"} xyz={"abc"} />
      </div>
    );
  }
}

export default AboutClass;
