import './Logo.css'
import LogOutButton from '../LogOutButton/LogOutButton';

const Logo = () => {

  const accessToken = sessionStorage.getItem('access_token');

  return (
    <div id="Logo">
      <h1>SpotiFresh</h1>
      <h4>C L I C K ･ A N D ･ L I S T E N ･ O N ･ S P O T I F Y</h4>
      {accessToken && <LogOutButton></LogOutButton>}
    </div>
  )
};
export default Logo;