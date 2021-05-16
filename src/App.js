import React, { useEffect,useState } from 'react';
import { fetchP } from './helpers/fetch';

export const App=() => {
  const [data,saveData]=useState([]);
  useEffect(() => {
    traerData()
    .then(res=>{
      console.log(data);
    })
  }, []);

  const traerData=async()=>{
    const resp= await fetchP();
    const body=await resp.json();
    saveData(body);
  }

  return (
    <div>
      {data.map((dat,key)=>{
        return(
          <h1>Hola</h1>
        )
      })}
    </div>
  );
}


