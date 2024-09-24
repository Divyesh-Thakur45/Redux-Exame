import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShowData } from "../Redux/Matches/action";

export const MatchList = () => {
  // const [data, setdata] = useState([]);
  const { isLoading,data, isError } = useSelector((store) => store.MatchReducer);
  // console.log(data);
  const dispatch = useDispatch();
  // console.log(matchList);
  
  useEffect(() => {
    dispatch(ShowData)
  }, []);

  return isLoading ? <h1>Loading..</h1> : isError ? <h1>Error</h1> :  (
    <div
      data-testid="match-list"
      style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
    >
      {/* // Show matches here  */}
      {data.map(
        ({
          competition,
          id,
          round,
          team1,
          team1goals,
          team2,
          team2goals,
          year,
        }) => {
          return (
            <div
              key={id}
              style={{ border: "1px solid black", padding: "10px 20px" }}
            >
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s"
                  alt=""
                />
                <p>Competition : {competition}</p>
                <span>Year : {year}</span>
                <span>Round : {round}</span>
                <div>
                  <div>
                    <span>Team 1 : {team1}</span>
                    <span>Team 1 Goals : {team1goals}</span>
                  </div>
                  <div>
                    <span>Team 2 : {team2}</span>
                    <span>Team 2 Goals : {team2goals}</span>
                  </div>
                </div>
                <button>
                  <Link to={`/WatchListPage/${id}`}>Watch-List</Link>
                </button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
