import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({input}) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    console.log(resultsData)
    return (
        <table id="result">
            <thead>
            <tr>
                <th>YEAR</th>
                <th>INVESTMENT VALUE</th>
                <th>INTEREST (YEAR)</th>
                <th>TOTAL INTEREST</th>
                <th>INVESTED CAPITAL</th>
            </tr>
            </thead>
            <tbody>
            {resultsData.map(yearData => {
                const tatalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - tatalInterest;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(tatalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
            </tbody>
        </table>
    );
}