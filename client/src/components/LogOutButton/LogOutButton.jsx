import { logout } from "../../../utils/logout";
import './LogOutButton.css'

const LogOutButton = () => {

  return (
    <a href={"/"}>
      <div id="LogOut" >
        <span 
          title={"Log Out"} 
          onClick={logout} 
          className="material-symbols-outlined" 
        >
          close
        </span>
      </div>
    </a>
  )
};

export default LogOutButton;
