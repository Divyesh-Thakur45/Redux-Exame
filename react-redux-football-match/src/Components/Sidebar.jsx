import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ShowData } from "../Redux/Matches/action";

export const Sidebar = () => {
  
  const [page , setpage] = useState(1)


  const [year , setyear] = useState(null)
  const dispatch = useDispatch();
  useEffect(()=>{
    const obj ={
      params : {
        _page : page,
        _limit : 10,
        _sort : "year",
        _order : year
      }
    }
    // console.log(year)
    dispatch(ShowData(obj))
  },[page,year])
  
  return (
    <DIV>
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" onClick={(e)=>setyear(e.target.value)} name="sort" value={"asc"} />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          onClick={(e)=>setyear(e.target.value)}
          value={"desc"}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No. {page}</h3>
      <button data-testid="previous-page" disabled={page == 1} onClick={()=>setpage(page - 1)}>Previous</button>
      <br />
      <br />
      <button data-testid="next-page" disabled={page == 6} onClick={()=>setpage(page + 1)}>Next</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;

  button {
    border: none;
    width: 100px;
    height: 40px;
    background-color: gray;
  }
`;
