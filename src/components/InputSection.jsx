import Inputs from "./Inputs.jsx";
import Result from './Result.jsx'
import { calculateInvestmentResults } from "../util/investment.js";
import { useState } from "react";

let INITIAL_INVESTMENTDATA = {
    initialInvestment : 15000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
}







export default function InputSection(){
    const [currentData, setData] = useState(INITIAL_INVESTMENTDATA)

    let results = calculateInvestmentResults(currentData);


    function handleDataInput(prop, value){
        const currentObject = {
            ...currentData,
            [prop] : value
        }
        setData(currentObject);

        console.log(currentObject);
        results = calculateInvestmentResults(currentObject);

    }

    


    return(
    <>
        <div id="user-input">
            

            <div className="input-group">
                
                <Inputs 
                    label ="Initial Investment"
                    update = {handleDataInput}
                    objectLabel = "initialInvestment"
                    value = {currentData.initialInvestment}
                />
                

                <Inputs 
                    label="Annual Investment"
                    update = {handleDataInput}
                    objectLabel = "annualInvestment"
                    value = {currentData.annualInvestment}
                />

            </div>

            <div className="input-group">


                <Inputs 
                    label="Expected Return"
                    update = {handleDataInput}
                    objectLabel = "expectedReturn"
                    value = {currentData.expectedReturn}
                />

                <Inputs 
                    label="Durations"
                    update = {handleDataInput}
                    objectLabel = "duration"
                    value = {currentData.duration}

                />

            </div>

        </div>
        {currentData.duration > 0 ? <Result investment={results} /> : <h1 className="center">Invalid "Duration"</h1>}
        
    </>
    );
};