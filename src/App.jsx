import React from "react";
import Form from "./Form/Form";
import "./App.css";

function App() {
  return (
    <>
      <div className="container w-75 rounded-5 text-white shadow-lg">
        <h1 className="text-center fw-medium display-1 m-5">
          Random Password Generator
        </h1>
      </div>

      <div className="container w-75 rounded-5 text-white border border-2 border-white p-5">
        <Form />
      </div>
    </>
  );
}

export default App;
