import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const WatchListPage = () => {
  const [data , setdata] = useState({});
 const {id} = useParams();
 const ListData = () =>{
  axios.get(`http://localhost:8080/matches/${id}`)
  .then((res)=>setdata(res.data))
  .catch((err)=>console.log(err))
 }
 useEffect(()=>{
  ListData();
 },[])
  return (
    <div>
      <div data-testid="watch-list">
        <h1>WatchList</h1>
        <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s"
                  alt=""
                />
                <p>Competition : {data.competition}</p>
                <span>Year : {data.year}</span>
                <span>Round : {data.round}</span>
                <div>
                  <div>
                    <span>Team 1 : {data.team1}</span>
                    <span>Team 1 Goals : {data.team1goals}</span>
                  </div>
                  <div>
                    <span>Team 2 : {data.team2}</span>
                    <span>Team 2 Goals : {data.team2goals}</span>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
};
