import React from "react";
import CollectionCard from "../components/CollectionCard";
import "../components/PunkList.css";
const PunkList = ({ punkListData, setSelectedPunk }) => {
  console.log(punkListData);
  return (
    <div className="punk__list">
      {punkListData.map((punk) => (
        <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
