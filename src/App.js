import React from "react";
import Routing from "./utils/Routing";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from 'react-toastify';
import ScreenRedirect from "./utils/ScreenRedirect";

function App() {
  return (
    <React.Fragment>
      <Routing/>
      <ToastContainer
        position="top-center"
      />
      <ScreenRedirect/>
    </React.Fragment>
  );
}

export default App;
