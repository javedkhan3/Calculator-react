import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue ] = useState("")
  
   
  const clearDisply = () => setValue("")// fpr clear display
  const deleteValue = () => setValue(value.slice(0, -1)) // delete last value of the display
  const handleclick = (e) => setValue(value === "Error" ? e.target.value : value + e.target.value) // adding values to the display 
  

  const calculate = () => {    // calculation of values
    try{
      setValue(eval(value.toString()))
    }catch{
      setValue("Error")
    }
  }
 


  return (
     <div className="container">
    <div className="calculator">
      <form action="">
        <div className="display">
          <input type="text" value={value} readOnly/>
        </div>
        <div>
          <input  type="button" value="AC" className="ac" onClick={clearDisply} />
          <input  type="button" value="De" className="de" onClick={deleteValue}/>
          <input  type="button" value="." className="operator" onClick={handleclick}/>
          <input  type="button" value="/" className="operator" onClick={ handleclick }/>
        </div>
        <div>
          
          <input  type="button" value="7" onClick={ handleclick } />
          <input  type="button" value="8" onClick={ handleclick }/>
          <input  type="button" value="9" onClick={ handleclick }/>
          <input  type="button" value="*" className="operator" onClick={ handleclick }/>
        </div>
        <div>
          <input  type="button" value="4" onClick={ handleclick }/>
          <input  type="button" value="5" onClick={ handleclick }/>
          <input  type="button" value="6" onClick={ handleclick }/>
          <input  type="button" value="+" className="operator" onClick={ handleclick }/>
        </div>
        <div>
          <input  type="button" value="1" onClick={ handleclick }/>
          <input  type="button" value="2" onClick={ handleclick }/>
          <input  type="button" value="3" onClick={ handleclick }/>
          <input  type="button" value="-" className="operator" onClick={ handleclick }/>
        </div>
        <div>
          <input  type="button" value="00" onClick={ handleclick }/>
          <input  type="button" value="0" onClick={ handleclick }/>
          <input  type="button" value="=" className="equal operator" onClick={calculate}/>
        </div>
      </form>
    </div>
   </div>
  )
}

export default App
