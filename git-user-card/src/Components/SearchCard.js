import React from "react";

function Search(props) {
  return (
    <div className="search">
      <input type="text" value={props.user} onChange={props.handleChange} />
      <button onClick={props.getUsers}>Search Users</button>
      {props.error && <p style={{ color: "red" }}> {props.error} </p>}
    </div>
  );
}

export default Search;
