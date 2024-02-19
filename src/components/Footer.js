import { useContext } from "react";
import UserContext from "../utils/CustomContext/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-2 m-2">
      <h4>
        This site is developed by - {user.name} - {user.email}
      </h4>
    </div>
  );
};

export default Footer;
