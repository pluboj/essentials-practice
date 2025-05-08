import {useState} from 'react';
import { calculateInvestmentResults } from '../util/investment';
import { formatter } from '../util/investment';

export default function Output({result, ...props}) {
    let newResult;

    if(Object.keys(result).length == 4){
        newResult = calculateInvestmentResults(result);
        console.log(newResult)
        
      }

    return <div id="result" {...props}>
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {newResult.map((item,itemIndex) => <tr key={itemIndex}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(item.annualInvestment)}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
}