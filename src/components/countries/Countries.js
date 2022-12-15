import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
       axios.get("https://restcountries.com/v3.1/all")
      .then(data=>{
        const countriesLoaded=data.data;
        // console.log(countriesLoaded)
      const info= countriesLoaded.map(country=>{
        const countryInfo={
            name:country.name.common,
            population:country.population
        }
        return countryInfo;
       })
       console.log("==========>",info);
       setCountries(info)
      })

    },[])
    return (
        <div>
        <ResponsiveContainer width="100%" aspect={3}>

        <BarChart 
        width={500} 
        height={300}
        data={countries}
        margin={{ 
            top:5,
            right:30,
            left:50,
            bottom:5
         }}
         
         >
          <Bar dataKey="population" fill="#8884d8" />
          <CartesianGrid stroke="#ccc"  />
          <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </BarChart>
        </ResponsiveContainer>
      
          
      
            
        </div>
    );
};

export default Countries;