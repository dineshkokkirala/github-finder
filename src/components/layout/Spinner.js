import React, { Fragment } from "react";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
