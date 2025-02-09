
import React, {useState} from 'react';




export default function ColorPicker({ colors }){
const [bgColor, setBgColor] = useState('#242424'); //settting default. using useState to store current values and update.
  
return(
    <div style={{backgroundColor:bgColor, width:'100vw', height:'100vh'}}>
    {colors.map((color)=>(
    
        <button key={color}  onClick={()=>setBgColor(color)}>{color}</button>
  
    
    ))}
    <button onClick={()=> setBgColor('#242424')}>reset</button>
    </div>
)




}



// <div style={{backgroundColor:bgColor, width:'100vw', height:'100vh'}}>
// <button onClick={()=>setBgColor('blue') }>Blue</button>
// <button onClick={()=> setBgColor('red')}>Red</button>
// <button onClick={()=> setBgColor('yellow')}>Yellow</button>
// <button onClick={()=>setBgColor('green')}>Green</button>
// <button onClick={()=> setBgColor('pink')}>Pink</button>
// <button onClick={()=> setBgColor('#242424')}>reset</button>
// </div>