import React,{useState} from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import {useHistory } from "react-router-dom";
 import {useStateValue} from "../StateProvider";
import { actionTypes } from '../reducer';

function Search(hideButtons  ) {
   const[input, setInput]= useState("");
   const history= useHistory();
  const [{} , dispatch] = useStateValue();

const search=e => {
   e.preventDefault();
   console.log("gvhb",input);
   dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
   });
   history.push('/search');


    }


    return (
        <form className="Search">
            <div className='search__input'>
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>
           {!hideButtons ? (  <div className="search__button">
               <Button type="submit" onClick={search}variant="outlined">Google Search</Button>
               <Button variant="outlined">I'm feeling Lucky</Button>
            </div>
            ):( 
                  <div className="search__button">
               <Button className="search__buttonHidden" type="submit" onClick={search}variant="outlined">Google Search</Button>
               <Button className="search__buttonHidden" variant="outlined">I'm feeling Lucky</Button>
            </div>)}


          
            
        </form>
    )
}

export default Search
