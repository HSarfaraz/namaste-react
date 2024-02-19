import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunction from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the namaste Reactjs course - finding the path</p>
      {/* <Outlet /> */}
      <ProfileFunction name={"Sarfaraz"} />
      <ProfileClass name={"Hussain"} xyz={"abc"} />
    </div>
  );
};

export default About;
