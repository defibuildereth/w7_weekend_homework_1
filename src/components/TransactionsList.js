import React from 'react'

const TransactionsList = ({info, onTransactionSelected}) => {

    const handleChange = function(event) {
        console.log(event)
    }

    // console.log(info);
    const resultArray = info.result

    // console.log(resultArray);
    

    

    const transactionOptions = resultArray.map((result, index) => {
        return <option value={index} key = {index}>{result.hash}</option>
    })

    return (
        
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Transaction</option>
            {transactionOptions}
        </select>
    )
}

    
export default TransactionsList