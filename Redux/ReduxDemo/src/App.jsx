import React, { useRef, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

// Methods defined in our slice
import { changeUserData, getUserData } from "./Redux/firstSlice";

export default function App() {
  const userName = useRef("");
  const age = useRef("");
  const language = useRef("");
  const [isData, setIsData] = useState(false);
  let bool = false;

  // Dispatch method to dispatch(call) methods in the slice
  const dispatch = useDispatch();
  // getting the value of dataAvailable

  bool = useSelector((state) => state.first.dataAvailable);

  const username = useSelector((state) => state.first.username);

  const userage = useSelector((state) => state.first.age);

  const userlan = useSelector((state) => state.first.language);

  const sendData = () => {
    dispatch(
      changeUserData({
        username: userName.current.value,
        age: age.current.value,
        language: language.current.value,
      })
    );
  };

  const getData = () => {
    if (bool) {
      setIsData(true);
    } else alert("No data available");
  };
  return (
    <div>
      <h1 className="heading" style={{ textAlign: "center" }}>
        React redux demo
      </h1>
      <section className="formGroup">
        <div className="forminput">
          <label className="label" htmlFor="usern">
            Enter your username
          </label>
          <input type="text" id="usern" ref={userName} />
        </div>

        <div className="forminput">
          <label className="label smalllabel" htmlFor="age">
            Enter your age
          </label>
          <input type="text" id="age" ref={age} />
        </div>

        <div className="forminput">
          <label className="label" htmlFor="language">
            Enter your language
          </label>
          <input type="text" id="language" ref={language} />
        </div>

        <button className="button" onClick={() => sendData()}>
          Send Data to redux
        </button>
        <button className="button" onClick={() => getData()}>
          Get Data From Redux
        </button>
      </section>

      {isData && (
        <section className="section">
          <div className="main">
            <p className="para item">{username}</p>
          </div>

          <div className="main">
            <p className="age item">Age : {userage}</p>
          </div>

          <div className="main">
            <p className="lang item">{userlan}</p>
          </div>
        </section>
      )}
    </div>
  );
}
