import "./LoginButton.css"

const LoginButton = ({onClickFunction}) => {

  return (
    <>
      <button id="LogIn" onClick={onClickFunction}>LOGIN</button>
    </>
  )
}
export default LoginButton;