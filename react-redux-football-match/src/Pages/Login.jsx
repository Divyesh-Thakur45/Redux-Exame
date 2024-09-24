import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { LOGIN_SUCCESS } from "../Redux/Authentication/actionTypes";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { Loading, token, error } = useSelector((store) => store.Authreducer);
  console.log(token);
  const dispatch = useDispatch();
  const HandleClick = () => {
    const userObj = {
      email,
      password,
    };
    axios
      .post("https://reqres.in/api/login", userObj)
      .then(
        (res) => (
          console.log(res.data.token),
          dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
        )
      )
      .catch((err) => console.log(err));
  };
  // useEffect(()=>{},[])
  return Loading ? <h1>Loading..</h1> :  error ? <h1>Error</h1> :(
    <DIV>
      <h2>Log In</h2>
      <input
        data-testid="user-email"
        onChange={(e) => setemail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        data-testid="user-password"
        onChange={(e) => setpassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button data-testid="user-login" onClick={() => HandleClick()}>
        Log In
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
