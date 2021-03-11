import React, {useState, } from 'react'
import {
    Background,
    Wrapper,
    Input,
    Button

} from './Bmistyle'

const colorRed = {
    color: "red",
    fontSize: "20px",
  };
  const colorGreen = {
    color: "green",
    fontSize: "20px",
  };
  const colorBGGood = {
    BackgrounColor: "green",
  };
  const colorBGBad = {
    BackgrounColor: "red",
  };

function Bmi() {
    const [height, setheight] = useState("")
    const [ weight, setWeight] = useState("")
    const [resetState, setresetState]= useState(0)
    const [input, setInput] = useState('')
    const [track, setTrack] = useState(0)

   
    const checkInput = (e)=>{
        e.preventDefault()
        console.log(weight, "\n", height)
    }

    const increase =(e)=>{
        e.preventDefault()
        setTrack(height * weight)
        setresetState( setWeight(""))
        setresetState( setheight(""))
        
    }
    const resetButton =(e)=>{
        e.preventDefault()
        setTrack(track* 0)
    }
    

   
    return (
        
           <Background>
               <Wrapper
               style={track >= 210 ? colorBGBad: colorBGGood}
               onSubmit={increase}
               >
              <div>Result: {track}</div>
            <Input
            placeholder="please enter your height"
            type="Number"
           
            name="name"
            value={height}
            onChange={(e)=> setheight(e.target.value)}
            ></Input>
            <Input
            placeholder="please enter your weight"
            type="Number"
            name="name"
          
            value={weight}
            onChange={(e)=> setWeight(e.target.value)}
            ></Input>
            <Button 
            // onClick={checkInput}
            
           
            onSubmit="Number">Calculate</Button>
             <Button onSubmit="Number" onClick={resetButton}>Reset</Button>
                   
               </Wrapper>
           </Background>
        
    )
}

export default Bmi
