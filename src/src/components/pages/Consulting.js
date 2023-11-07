import React from "react";
import { ConsultingList } from "../../helpers/ConsultingList";

function Consulting() {
  const consultingContainerStyle = {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const consultingTitleStyle = {
    fontFamily: "cursive",
    fontSize: "60px",
  };

  const consultingListStyle = {
    width: "70vw",
    height: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    placeItems: "center",
  };

  const consultingItemStyle = {
    borderRadius: "15px",
    width: "300px",
    height: "350px",
    margin: "20px",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
  };

  const consultingItemTextStyle = {
    marginLeft: "20px",
  };

  return (
    <div style={consultingContainerStyle}>
      <h1 style={consultingTitleStyle}>Consulting Services</h1>
      <div style={consultingListStyle}>
        {ConsultingList.map((consultingItem, key) => (
          <div key={key} style={consultingItemStyle}>
            <h1 style={consultingItemTextStyle}>{consultingItem.name}</h1>
            <p style={consultingItemTextStyle}>{consultingItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consulting;
