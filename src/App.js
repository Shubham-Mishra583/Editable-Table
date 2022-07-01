import React, { useState } from 'react'
import { CSVLink } from "react-csv";
import './App.css';

const App = () => {

  const [inputFields, setinputFields] = useState([{ 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      },

      { 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      },

      { 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      },

      { 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      },

      { 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      },

      { 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      },

      { 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      },

      { 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      },

      { 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      },
      
      { 
        Person_Location : '', 
        match_count : '', 
        time_taken : ' ',
        miles_travelled : ' ',
        fuel_used : ' ',
        number_vehicles : ' ',
        registration_id : ' '
      }
  ]);

  const handleChangeInput = (index,event)=>{
      const values = [...inputFields];
      values[index][event.target.name] = event.target.value;
      setinputFields(values);
      console.log(inputFields);
  }

  const Add =(event)=>{
    let newrow = {
      Person_Location : '', 
      match_count : '', 
      time_taken : ' ',
      miles_travelled : ' ',
      fuel_used : ' ',
      number_vehicles : ' ',
      registration_id : ' '
    }
    event.preventDefault();
    setinputFields([...inputFields,newrow]);
  }

  const Delete = (index)=>{
      const values = [...inputFields];
      values.splice(index,1);
      setinputFields(values);
  }

  const csvReport = {
    data: inputFields,
    filename: 'Report.csv'
  };

  return (
        <>
          <form autocomplete="off">
            <input type="text" value={`Person_Location`} readOnly  />
            <input type="text" value={`match_count`} readOnly/>
            <input type="text" value={`time_taken(s)`} readOnly/>
            <input type="text" value={`miles_travelled`} readOnly/>
            <input type="text" value={`fuel_used`} readOnly/>
            <input type="text" value={`number_vehicles`} readOnly/>
            <input type="text" value={`registration_id`} readOnly/>
            <a href="#" onClick={Add} ><i class="fa-solid fa-circle-plus"></i></a>
            {inputFields.map((inputFields,index) => {
              return(
                <div key = {index}>

                  <input type="text" 
                    name='Person_Location'
                    value={inputFields.Person_Location}
                    onChange = {(event) => {handleChangeInput(index,event)}}
                  />

                  <input type="text" 
                    name='match_count'
                    value={inputFields.match_count}
                    onChange = {(event) => {handleChangeInput(index,event)}}
                  />                  
                  
                  <input type="text" 
                    name='time_taken'
                    value={inputFields.time_taken}
                    onChange = {(event) => {handleChangeInput(index,event)}}
                  />

                  <input type="text" 
                    name='miles_travelled'
                    value={inputFields.miles_travelled}
                    onChange = {(event) => {handleChangeInput(index,event)}}
                  />

                  <input type="text" 
                    name='fuel_used'
                    value={inputFields.fuel_used}
                    onChange = {(event) => {handleChangeInput(index,event)}}
                  />

                  <input type="text" 
                    name='number_vehicles'
                    value={inputFields.number_vehicles}
                    onChange = {(event) => {handleChangeInput(index,event)}}
                  />

                  <input type="text" 
                    name='registration_id'
                    value={inputFields.registration_id}
                    onChange = {(event) => {handleChangeInput(index,event)}}
                  />    

                        <a href="#" onClick={Add} ><i class="fa-solid fa-circle-plus"></i></a> 
                        <a href="#" onClick={()=> Delete(index)}><i class="fa-solid fa-circle-minus"></i></a>
                </div>
              )
            })}
          </form>
          <div>

          </div>
          
          <CSVLink {...csvReport}><i class="fa-solid fa-gear"></i> Generate CSV File</CSVLink>
        </>
  )
}

export default App
