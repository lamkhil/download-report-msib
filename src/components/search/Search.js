import React, {useState} from "react";
import { BiSearch } from "react-icons/bi";
import "./Search.css";



const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <div class="row d-flex justify-content-end align-items-end">
      <div class="col-md-3" style={{width : "20vw"}}>
        <div class="form">
          <i class="fa fa-search">
            <BiSearch className="ic-size" />
          </i>
          <input type="search" class="form-control form-input" placeholder="Search anything..."  />
        </div>
      </div>
    </div>
  );
}

export default Search;
