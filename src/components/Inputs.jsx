import { useState } from "react"

export default function Inputs({label, objectLabel, update, value}){
    const [data, setData] = useState(value)


    const handleDataChange = (event) =>{
        const currentValue = event.target.value;

        update(objectLabel , Number(currentValue)) 
        setData(currentValue);

    }

    return(
        <div>
            <p>
            <label>{label}</label>
            <input type="number" value={data} onChange={handleDataChange}/>
            </p>
        </div>
    )
}