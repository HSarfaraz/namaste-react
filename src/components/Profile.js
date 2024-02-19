import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("useEffect render");
    };
    //Api call after render
    console.log("useEffect");
  }, []);

  console.log("render");

  return (
    <div>
      <h3>This is a Profile function component</h3>
      <p>Name: {props.name}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Profile;
