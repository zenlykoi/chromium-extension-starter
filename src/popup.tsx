import React from "react";
import ReactDOM from "react-dom";

const Popup = () => {
  return (
    <>
      <h4>Chromium extension starter popup</h4>
      <i>Author: <a href="https://www.facebook.com/nguyenphuong.2661999/" target={'_blank'}>NguyenPhuong99</a></i>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
