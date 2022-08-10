import React from "react";
import { Link } from "react-router-dom";

function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Aprajit's game reviews</h1>
      </Link>
    </div>
  );
}

export default SiteHeader;
