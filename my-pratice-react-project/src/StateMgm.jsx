

// import React from 'react'

// function StateMGM() {
//   return (
//     <div>StateMGM</div>
//   )
// }

// export default StateMGM


// import React from 'react'

// const StateMGM = () => {
//   return (
//     <div>StateMGM</div>
//   )
// }

// export default StateMGM





// import React from 'react'

// import { useState } from 'react'

// const StateMGM = () => {
//     const [city, setCity] = useState("Porumamilla")
//     console.log(city)
//     setCity("Hyderabad")
//     console.log(setCity)

//   return (
//     <div>StateMGM</div>
//   )
// }

// export default StateMGM

import React, { useState,useEffect } from 'react'

const StateMgm=()=>{
    const[city,setCity]=useState("Hyderabad"); 


    useEffect(()=>{
        if(city ==="Hyderabad"){
            setCity("Bangalore")
        }
        else{
            setCity("Delhi")
        }
    },[])



    
    return(
        <div>
          <h1>Iam Living in {city}</h1>    
         </div>
    )
}
export default StateMgm