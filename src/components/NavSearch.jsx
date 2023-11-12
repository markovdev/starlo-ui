import React, { useState, useEffect } from "react";
import { LiaSearchSolid, LiaShoppingCartSolid } from "react-icons/lia";
import useHttp from "../hooks/http";
import Item from "./List/Item/Item";
import SearchResult from "./Search/SearchResults/SearchResult/SearchResult";
import SearchResults from "./Search/SearchResults/SearchResults";
import { FULL_PATH } from "../config";
import Message from "./UI/Message/Message";
import axios from "../axios";

let typeTimer;
const NavSearch = () => {
  const [search, setSearch] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const { sendRequest, data, error, status } = useHttp();
  const getRooms = async () => {
    try {
      const res = await axios.get(`/rooms`);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getRooms();
    // sendRequest(`/rooms?search=${search}`, "GET");
  }, [search]);
  getRooms();
  const handleSearch = (e) => {
    clearTimeout(typeTimer);
    typeTimer = setTimeout(() => setSearch(e.target.value), 750);
  };
  return (
    <div className="search">
      {" "}
      {error && <Message text={error.response.data.message} error />}
      <div className="search__box">
        <input
          type="search"
          placeholder="Search for rooms..."
          name="search"
          onChange={handleSearch}
          className="search__input"
        />
        <LiaSearchSolid className="search__icon" />
      </div>
      {search !== "" && data?.data.docs ? (
        <SearchResults
          curPage={curPage}
          rooms={data}
          limit={limit}
          nextCb={() => setCurPage(curPage + 1)}
          prevCb={() => setCurPage(curPage - 1)}
        >
          {data?.data.docs.map((result) => (
            <Item className="search__results__result" key={result._id}>
              <SearchResult
                text={result.name}
                path={`/room/${result.slug}`}
                photo={`${FULL_PATH}/img/rooms/${result.cover}`}
              />
            </Item>
          ))}
        </SearchResults>
      ) : null}
    </div>
  );
};

export default NavSearch;
