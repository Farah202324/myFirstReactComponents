import React, { useState } from 'react';

const TempForm = () => {
  const [scale, setScale] = useState("celsius")
  const [measure, setMeasure ] = useState()
  const celsiusToFahrenheit = (c) => Math.round((c * 9) / 5 + 32);
  const fahrenheitToCelsius = (f) => Math.round(((f - 32) * 5) / 9);

  const changeScale = (scaleName) => {
    setScale(scaleName)
  } 
  const changeNumber = (numberOfTemprature) => {
    setMeasure(numberOfTemprature)
  }
  console.log(scale,measure)
  return ( <div>
    <h1> Temperature converter</h1>
    <form className='TempForm'>
      <fieldset>
        <legend>Scale</legend>
        <label>
          Celsius 
          <input 
          type="radio"
          value="celsius"
          name="type"
          checked={scale=== "celsius"}
          onClick={(e) => changeScale(e.target.value)}
              />
        </label>
        <label>
          Fahrenheit 
          <input
          type="radio" 
          value="fahrenheit" 
          name="type" 
          checked={scale=== "fahrenheit"}
          onChange={(e)=> changeScale(e.target.value)}
          />
        </label>
      </fieldset>
      <label>
        Temperature 
        <input 
        type="number" 
        min={-80} 
        max={60}
        onChange={(e) => changeNumber(e.target.value)}
        />
      </label>
      {measure &&  <h1>
      {scale ==="celsius" ? ` ${celsiusToFahrenheit(measure)} F` : `${fahrenheitToCelsius(measure)} C` }
      </h1> } 
    </form>
  </div> );
}
 
export default TempForm;