import styled from 'styled-components'

export const Background = styled.div`
background-color: lightgray;
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;

`
export const Wrapper = styled.form`
    background:white;
    width:600px;
    height700px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center

`
export const Input = styled.input`
    width:400px;
    height80px;
    border-radius: 10px;
    border: 1px solid lightgray;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
    font-size: 25px;

`
export const Button = styled.button`
   width:150px;
   height:50px;
   background: black;
   color: white;
   border-radius: 5px;
   text-transform: uppercase;
   font-weight: bold;
`

export const Report = styled.h3`

    letter-spacing:6.8
`