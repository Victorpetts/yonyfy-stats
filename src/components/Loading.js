import React from "react";

const Loading = props => (
  <div>
    {props.hockey
      ? <h4 className="loadingHockey">Loading...</h4>
      : <h4 className="loading">Loading...</h4>
    }
  </div>
);
export default Loading;
