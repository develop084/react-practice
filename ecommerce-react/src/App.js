import React,{createContext} from 'react'
import Home from './components/Home'

export const MyContext = createContext();

function App() {
  return (

    <MyContext.Provider value={{name:'John'}}>
    <Home />
    </MyContext.Provider>
    
  )
}

export default App;