import React from "react";

export const ProjectData = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: 700,
        marginTop: 50,
      }}
    >
      <img style={{ heigh: 300, width: 250 }} src={props.data.img} alt="" />
      <p>{props.data.name}</p>
    </div>
  );
};
