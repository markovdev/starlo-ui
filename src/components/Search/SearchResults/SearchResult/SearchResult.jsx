import React from "react";
import { Link } from "react-router-dom";
const SearchResult = ({ path, text, photo }) => {
  return (
    <Link className="link search__results__result__link" to={path}>
      <p className="search__results__result__heading">{text}</p>
      <img src={photo} alt="" className="search__results__result__img" />
    </Link>
  );
};

export default SearchResult;
