import React, {useState, useEffect} from 'react'
import Response from '../components/Response'

const EtherscanContainer = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = function(){
        fetch('https://api.etherscan.io/api?module=account&action=tokennfttx&&address=0x23b50b9815eedd4e2de9227aa462144b548c34cd&page=1&offset=100&sort=asc&apikey=IZKIMPDE58Y59KW2RSD9NDYYY39HSBY1QJ')
        .then(res => res.json())
        .then(munros => setInfo(munros))
    }

    // getInfo()

    return (
        <>
        <h2>I'm the EtherscanContainer</h2>
        <Response info={info}/>
        </>
    )
}


export default EtherscanContainer