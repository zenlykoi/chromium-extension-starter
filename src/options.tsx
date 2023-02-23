import React from "react";
import ReactDOM from "react-dom";

const Option = () => {
  return (
    <>
      <h4>Chromium extension starter option page</h4>
      <i>Author: <a href="https://www.facebook.com/nguyenphuong.2661999/" target={'_blank'}>NguyenPhuong99</a></i>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Option />
  </React.StrictMode>,
  document.getElementById("root")
);
