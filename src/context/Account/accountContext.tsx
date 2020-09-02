import React , { createContext , useState } from 'react'

const AccountContext = createContext('');

const AccountProvider = ( props:any ) => {
  
  const [ autentication , setAuntentication ] = useState(false);

  const Login = () => setAuntentication(true);

  const values = {
    autentication,
    Login
  }
  

  return (
    <AccountContext.Provider value = {values} >
      {props.children}
    </AccountContext.Provider>
  )
}

export { AccountProvider , AccountContext };
