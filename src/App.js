import "./App.css";
import Header from "../src/components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "../src/components/PunkList";
import Content from "../src/components/Content";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getNFTs = async () => {
      const options = {
        method: "GET",
        url: "https://testnets-api.opensea.io/api/v1/assets",
        params: {
          order_direction: "asc",
          offset: "0",
          limit: "6",
          asset_contract_address: "0x0902d16c6D7503A30f615f23D52BCB18E972AD0e",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          setPunkListData(response.data.assets);
          console.log(punkListData);
        })
        .catch(function (error) {
          console.error("err: ", error);
        });
    };
    getNFTs();
    console.log(punkListData);
  }, []);
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Content punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
