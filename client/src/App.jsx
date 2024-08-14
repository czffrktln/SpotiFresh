import { useEffect, useState } from 'react'
import './App.css'
import { authorization } from '../utils/authorization';
import { getToken } from '../utils/getToken';
import LoginButton from './components/LoginButton/LoginButton';
import HomePage from './components/HomePage/HomePage';
import Logo from './components/Logo/Logo';

function App() {
  
  const urlParams = new URLSearchParams(window.location.search);
  let codeFromUrl = urlParams.get('code');
    
  const [ code, setCode ] = useState(codeFromUrl);
  const [ accessToken, setAccessToken ] = useState(sessionStorage.getItem('access_token'));

  useEffect (() => {
    if (code && !accessToken) {
      getToken(code, setAccessToken)
    }
  }, [])
  
  return (
    <div id="App">
      <Logo></Logo>
        {accessToken ? 
          <HomePage></HomePage> :
          <LoginButton onClickFunction={authorization}></LoginButton>
        }
    </div>
  )
}

export default App


