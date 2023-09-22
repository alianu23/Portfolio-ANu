import React from "react";

export const Skills = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: 40,
      }}
    >
      <img style={{ width: 50, height: 50 }} src={props.data.img} alt="" />
      <h1 style={{ fontWeight: 500, fontSize: 20, marginTop: 8 }}>
        {props.data.name}
      </h1>
      <h3 style={{ textAlign: "center" }}>{props.data.desc}</h3>
    </div>
  );
};
