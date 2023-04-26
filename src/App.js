import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counting></Counting>
     
    </div>
  );
}


function Counting(){

  const [count, setCount] = useState(50);
  // console.log(abc);
  // const increaseCount = () =>{
  //   const newCount = count+1;
  //   setCount(newCount);
  // }
  const increaseCount = () =>setCount(count+1);
  const decreaseCount = () =>setCount(count-1);



  return(
    <div>
          
          <h1>Count Number:{count} </h1>
          <button style={ {background:"red" , padding:"10px" , borderRadius:"10px "} } onClick={increaseCount}>Increase</button>
          <button style={ {background:"red" , padding:"10px" , borderRadius:"10px ", margin:"20px"} } onClick={decreaseCount}>Decrease</button>

    </div>
  );
}



export default App;
