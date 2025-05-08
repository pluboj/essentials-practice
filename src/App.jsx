import { useState } from 'react';

import Header from "./components/Header";
import InputContainer from "./components/InputContainer";
import UserInput from "./components/UserInput";

import Output from './components/Output';

function App() {

  const [inputVals, setInputVals] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputVals(prevInput => {
      return {...prevInput, [name]: parseFloat(value)}
    });
    
    console.log(obj)
  }

  return (
    <>
      <Header>
        <img src="investment-calculator-logo.png" alt="dollar sign logo" />
        <h1>Investment Calculator</h1>
      </Header>
      <InputContainer>
        <div className="row">
          <UserInput
            type="number"
            label="initial investment"
            inputId="initialInvestment"
            onInputChange={handleInputChange}
          />
          <UserInput type="number" label="annual investment" inputId="annualInvestment" onInputChange={handleInputChange}/>
        </div>
        <div className="row">
          <UserInput type="number" label="expected return" inputId="expectedReturn" onInputChange={handleInputChange}/>
          <UserInput type="number" label="duration" inputId="duration" onInputChange={handleInputChange}/>
        </div>
      </InputContainer>
      <Output className="input-group center" result={inputVals}/>
    </>
  );
}

export default App;
