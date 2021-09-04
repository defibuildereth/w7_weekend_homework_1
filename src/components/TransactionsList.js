import React from 'react'

const TransactionsList = ({info}) => {

    console.log(info);
    const resultArray = info.result

    console.log(resultArray);

    const transactionOptions = resultArray.map((result, index) => {
        return <option value={index} key = {index}>{result.hash}</option>
    })

    return (
        
        <select defaultValue="">
            <option value="" selected>Choose a Transaction</option>
            {transactionOptions}
        </select>
    )
}

    
export default TransactionsList