import TextField from '@mui/material/TextField';
import './App.css'
import { useState } from 'react';

function App() {

  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const validate = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (!!value.match(/^[0-9]*\.?[0-9]*$/)) {
      if (name === 'principle') {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name === 'rate') {
        setRate(value);
        setIsRate(true);
      } else {
        setYear(value);
        setIsYear(true);
      }
    } else {
      if (name === 'principle') {
        setIsPrinciple(false);
        setPrinciple(value);
      } else if (name === 'rate') {
        setIsRate(false);
        setRate(value);
      } else {
        setIsYear(false);
        setYear(value);
      }
    }
  }

  const handleChange = () => {
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setInterest(0);
    setIsPrinciple(true);
    setIsRate(true);
    setIsYear(true);
  }

  const handleCalculate = (e) => {
    e.preventDefault();
    if (principle === "" || rate === "" || year === "") {
      alert('Please fill the form completely');
    } else {
      setInterest((principle * rate * year) / 100);
    }
  }

  return (
    <>
      <div className="bg-light rounded d-flex justify-content-center align-items-center" style={{ height: '800px', width: '500px' }}>
        <div id='aaaaa' className="text-center text-Dark mt-2 justify-content-center align-items-center">
          <h1 className='text-dark'>Simple Interest App</h1>
          <p className='text-dark'>Calculate Your Simple Interest Easily</p>
          <div style={{ height: '150px', width: '350px', marginLeft: '75px' }} className='bg-warning text-center d-flex flex-column align-items-center justify-content-center rounded shadow '>
            <h2 className='text-dark'>${interest}</h2>
            <p className='text-dark'>Total Simple Interest</p>
          </div>
          <form className='mt-3 p-2' action="" onSubmit={handleCalculate}>
            <TextField onChange={(e) => validate(e)} className='w-75 p-2' id="outlined-basic" label="$ Principle Amount" variant="outlined" name='principle' value={principle || ""} />
            {!isPrinciple &&
              <p className='text-danger'>*Invalid Input</p>
            }
            <TextField onChange={(e) => validate(e)} className='w-75 p-2' id="outlined-basic" label="Rate Of Interest (p.a)%" variant="outlined" name='rate' value={rate || ""} />
            {!isRate &&
              <p className='text-danger'>*Invalid Input</p>
            }
            <TextField onChange={(e) => validate(e)} className='w-75 p-2' id="outlined-basic" label="Year(yr)" variant="outlined" name='year' value={year || ""} />
            {!isYear &&
              <p className='text-danger'>*Invalid Input</p>
            }
            <div className='mt-4'>
              <button style={{ height: '50px', width: '150px' }} type='submit' className='btn btn-success shadow rounded' disabled={!(isPrinciple && isRate && isYear)}>Calculate</button>
              <button id='ssss' style={{ height: '50px', width: '150px' }} type='button' className='btn btn-light ms-5 shadow rounded text-primary' onClick={handleChange}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App;
