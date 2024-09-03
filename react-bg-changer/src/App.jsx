import './App.css'
import { useState } from 'react'
import Button from './components/Button';

function App() {

  let [bgColor, setBgColor] = useState('purple');

  // function changeBgColor (value){
  //   // alert('its clckking');
  //   // bgColor = 'red-600';
  //   bgColor = value;
  //   setBgColor(bgColor);
  // }

  return (
    <div className={`h-screen w-screen text-white flex items-end justify-center`} style={{backgroundColor: bgColor}} >
      <div className="bg-white p-4 rounded-3xl mb-10">
        {/* <Button btnColor="cyan" btnText="Cyan" onClick={setBgColor("cyan-600")} /> */}
        {/* <Button btnColor="cyan" btnText="Cyan"  onClick={setBgColor("cyan")} /> */}
        {/* <Button btnColor="red" btnText="Red" onClick={ () => changeBgColor("red")} />
        <Button btnColor="blue" btnText="Blue" onClick={ () => changeBgColor("blue")} />
        <Button btnColor="green" btnText="Green" onClick={ () => changeBgColor("green")} />
        <Button btnColor="yellow" btnText="Yellow" onClick={ () => changeBgColor("yellow")} /> */}
        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mx-2 rounded-3xl" onClick={() => setBgColor("red")}>
          Red
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2 rounded-3xl" onClick={() => setBgColor("blue")}>
          Blue
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 mx-2 rounded-3xl" onClick={() => setBgColor("green")}>
          Green
        </button>
        <button className="bg-black hover:bg-black text-white py-2 px-4 mx-2 rounded-3xl" onClick={() => setBgColor("black")}>
          Black
        </button>
      </div>
    </div>
  )
}

export default App
