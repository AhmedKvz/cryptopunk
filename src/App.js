import "./App.css";
import Header from "../src/components/Header";
import CollectionCard from "../src/components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getNFTs = async () => {
      const options = {
        method: "GET",
        url: "https://testnets-api.opensea.io/api/v1/assets",
        params: {
          order_direction: "asc",
          offset: "0",
          limit: "20",
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
  }, []);
  return (
    <div className="app">
      <Header />

      <div className="collection__cards">
        <CollectionCard
          id={0}
          name={"Cripto Punk"}
          traits={[{ value: 7 }]}
          image="https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg"
        />
        <CollectionCard
          id={1}
          name={"Girl Punk"}
          traits={[{ value: 7 }]}
          image="https://ipfs.thirdweb.com/ipfs/QmQQVwdSn864xHx9Hx2B5SB9Hmv886LuuUYUauYB97JMTS/0.jpg"
        />
        <CollectionCard
          id={2}
          name={"King Punk"}
          traits={[{ value: 7 }]}
          image="https://ipfs.thirdweb.com/ipfs/QmXt9PsvwBQvs4kHbbM1Gt3aPcZTrFfQNcY6eRWVW6d3aH/0.jpg"
        />
        <CollectionCard
          id={3}
          name={"Girl Pipe Punk"}
          traits={[{ value: 7 }]}
          image="https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg"
        />
        <CollectionCard
          id={4}
          name={"Gorila Punk"}
          traits={[{ value: 7 }]}
          image="https://ipfs.thirdweb.com/ipfs/QmRgisvKaQqqdLn5Mc6fyDtmT2KX8Q3sVbGd6whFFGuif6/0.gif"
        />
        <CollectionCard
          id={5}
          name={"Hipster Punk"}
          traits={[{ value: 7 }]}
          image="https://ipfs.thirdweb.com/ipfs/QmVDHP7P7PG8PHzbXsTSnquuPTqPMmwY5DpNmNe6ay2BSx/0.jpg"
        />
        <CollectionCard
          id={6}
          name={"Money Punk"}
          traits={[{ value: 7 }]}
          image="https://ipfs.thirdweb.com/ipfs/QmZt3PYdhoAzJK3sDrBeBe9pv1xqZ1FnTHcFkWZ6BaSiwJ/0.jpg"
        />
      </div>
    </div>
  );
}

export default App;
