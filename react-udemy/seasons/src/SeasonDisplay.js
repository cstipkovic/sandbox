import React from "react";
import "semantic-ui-css/semantic.min.css";

const seasonConfig = {
  summer: {
    text: "Hot",
    iconName: "sun",
  },
  winter: {
    text: "Cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SesasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <>
      <i className={`${iconName} icon`} />
      {text}
    </>
  );
};

export default SesasonDisplay;
