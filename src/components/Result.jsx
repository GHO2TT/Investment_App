import { formatter } from "../util/investment" 

export default function Result({investment}){
    // console.log(investment)
    const initialInvestment = investment[0].valueEndOfYear - investment[0].interest - investment[0].annualInvestment 
    
    return(
            <table id="result">

                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Value</th>

                    </tr>
                </thead>
                
                <tbody>
                    
                    {investment.map( value => (
                        

                            <tr key={value.year}>
                            <td>{value.year}</td>
                            <td>{formatter.format(value.valueEndOfYear)}</td>
                            <td>{formatter.format(value.interest)}</td>
                            <td>{formatter.format(value.valueEndOfYear - value.annualInvestment * value.year - initialInvestment)}</td>
                            <td>{formatter.format(value.valueEndOfYear - (value.valueEndOfYear - value.annualInvestment * value.year - initialInvestment ))}</td>
                            </tr>
                        )
                    )}
                    
                </tbody>

            </table>
    )
}