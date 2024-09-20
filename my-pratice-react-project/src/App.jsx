// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'

import './App.css';

import FirstComp from './propConatainer/FirstComp';
import SecondComp from './propConatainer/SecondComp';
import ThirdComp from './propConatainer/ThirdComp';
import FourComp from './propConatainer/FourComp';
import StateMgm from './StateMgm.jsx'
 
import { useState } from 'react';

import ClickEvents from './ClickEvents.jsx';
import Resize from './Resize.jsx';
 

// const user={
//   name:"Mounika",
//   id:32104,
//   desgination:"Software Developer"

// }

// const myCar={
//   model:"Maruti",
//   year:2024,
//   dealer:"Nixon",
//   color:"Navy"
// }

function App() {

  const [SampleCondition,setSampleCondition]=useState(true)
  // const [SampleCondition,setSampleCondition]=useState(false)

  

  return (
    <div className='Conatiner'>

      {/* <h1>Hello welcome React JS</h1>
      <img src="Images/bg-img.jpg"  alt=''/>
      <FirstComp  name={user.name}/>
      <SecondComp name="Deva"/>
      <ThirdComp name="Chitti"/>
      <FourComp name="Hello" />
      <SecondComp myCar={myCar} />
       <StateMgm /> */}
       
      {/* <h1>Hello welcome React JS <br />
        {SampleCondition? "This is True Condition Statement":"This is flase Condition Statement"}
        {SampleCondition? <FirstComp />:"This is flase Condition Statement"}
      </h1> */}

      <h1>Hello welcome React JS <br />
        <ClickEvents />

      </h1>
        {/* <Resize /> */}

      </div>
    
  )
}

export default App







