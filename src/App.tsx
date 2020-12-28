import {Button,  Form, Input } from 'antd';
import React, {  useState } from 'react';
import Axios from "axios"
import './App.css';
function App() {
  const [city,setCity]=useState<any>("")
  const [data,setData]=useState<any>("")
  const fetchData=()=>{
    if(city.trim()!==""){
    console.log(process.env.apiKey)
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.apiKey}`).then(response=>{
      setData(response.data)
      console.log(response.data)
    }).catch(err=>{
      alert("Error with country or some other fault")
    })
  }
  else{
    alert("cannot be empty")
  }
  }
  
  
  return (
    <div >
    <h1 style={{textAlign: "center"}}>Welcome to Dashboard</h1>
    <span style={{textAlign: "center"}}>
    <Form>
    <Input placeholder="Enter the City Name"  value={city} onChange={(e)=>{
      setCity(e.target.value)
    }}></Input>
    <Button onClick={fetchData}>Click me !!!</Button>
    
    </Form>
    </span>
    {data!=="" && <ul style={{textAlign: "center"}}>
      <li >{data.name}, {data.sys.country}</li>
      <li>Temperature - {data.main.temp}</li>
      <li>Weather     - {data.weather[0].main}</li>
      </ul>}
    </div>
  );
}

export default App;
