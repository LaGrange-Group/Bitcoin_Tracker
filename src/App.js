import React, {useEffect, useState} from 'react'
import axios from 'axios';

function App() {

  const [bitcoinData, setBitcoinData] = useState(null);


  useEffect(() => {
    getBitcoinData();
  }, [])

  async function getBitcoinData(){
      try{
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        console.log(response.data);
        setBitcoinData(response.data);
      } catch(ex){
        console.log('ERROR in getBitcoinData: ', ex)
      }
  }


  return (
    <div>
      <h1>Bitcoin Data</h1>
      {bitcoinData &&
        <React.Fragment>
              <h3>EUR</h3>
              <p>Description: {bitcoinData.bpi.EUR.description}</p>
              <p>Price: {bitcoinData.bpi.EUR.rate_float}</p>
              <h3>USD</h3>
              <p>Description: {bitcoinData.bpi.USD.description}</p>
              <p>Price: {bitcoinData.bpi.USD.rate_float}</p>
        </React.Fragment>
      }
    </div>
  );
}

export default App;
