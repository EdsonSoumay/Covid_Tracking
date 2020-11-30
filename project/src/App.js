
import React, { Component, useEffect, useState } from 'react';
import Card from './components/card';
import axios from "axios"
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api/confirmed")
     .then((response) => console.log(response));
  }, [])

  /*
  return (
    <>
      <p> App component</p>
    </>
  );

  */
  return (
    <>
      {users.map((item) =>{
        return (
          <Card
            name={item.name}
 
          />
        )
      })}
    </>
  );
  
};
export default App; 

/*
import React, {Component, useEffect, useState} from "react";
import Card from './components/card';
//import './App.css';
import axios from "axios";




const App =()=> {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  axios
  .get("https://jsonplaceholder.typicode.com/users");
  .then((response) => setUsers(response.data));
  }, [])

return( 
  <>
    {users.map((item) =>{
      return(
        <Card
          name={item.name}
          username={item.username}
          website = {item.website}
          phone = {item.phone}
        />
      );
    })}
    </> 
  );
};

export default App;
*/