import React from "react";
import Navbar from "../components/Navbar";

function DefaultLayout(props) {
  const [query, setQuery] = React.useState("");
  return (
    <div>
      <Navbar onSearch={(query) => setQuery(query)} />
      {React.cloneElement(props.children, {
        query,
      })}
    </div>
  );
}

export default DefaultLayout;
