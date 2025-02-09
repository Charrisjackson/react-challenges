import { useState } from 'react'
import ColorPicker from './colorPicker'
import './App.css'




function App() {
  // const [bgColor, setBgColor] = useState('#242424'); 
  const colors = ['blue', 'green', 'red', 'yellow', 'pink'];

  return (
    <>
<ColorPicker colors={colors}/>

 </>
  )
}

export default App
