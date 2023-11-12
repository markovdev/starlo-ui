import React, { useState, useEffect } from "react";
import useHttp from "../hooks/http";
import Message from "../components/UI/Message/Message";
import Section from "../components/Section/Section";
import Container from "../components/Containers/Container";
import Loader from "../components/UI/Loader/Loader";
import RoomsSearch from "../components/RoomsSearch/RoomsSearch";
import { useNavigate } from "react-router";
import SearchForm from "../components/SearchForm";
import Button from "../components/UI/Button/Button";
import { LiaChevronLeftSolid, LiaChevronRightSolid } from "react-icons/lia";
let typeTimer;
import Cookies from "js-cookie";
const Search = () => {
  const { sendRequest, data, error, status, isLoading } = useHttp();
  useEffect(() => {
    const t = Cookies.get("csrf-token");
    console.log(t);
  }, []);

  const searchQuery = new URLSearchParams();
  const navigate = useNavigate();
  const [searchObj, setSearchObj] = useState({
    name: "",
    date: "-createdAt",
    sort: "price",
    price: "100",
    page: 1,
    limit: 6,
  });
  const nextPage = (e) => {
    setSearchObj({ ...searchObj, page: searchObj.page + 1 });
  };
  const prevPage = (e) => {
    setSearchObj({ ...searchObj, page: searchObj.page - 1 });
  };

  const updateSearchParams = () => {
    for (const key in searchObj) {
      if (key === "name" && searchObj.name) {
        searchQuery.append("name", searchObj.name);
      } else if (key !== "name") {
        searchQuery.set(key, searchObj[key]);
      }
    }
  };
  const handleSearchData = (e) => {
    const { name, value } = e.target;
    setSearchObj({ ...searchObj, [name]: value });
    searchQuery.append(name, value);
  };

  useEffect(() => {
    updateSearchParams();
    navigate(`?${searchQuery.toString()}`);
  }, [searchObj]);
  // useEffect(() => {
  //   const sort = searchQuery.get("sort");
  //   const limit = searchQuery.get("limit");
  //   const page = searchQuery.get("page");
  //   const name = searchQuery.get("name") || "";
  //   const priceFilter = `price[gt]=${searchQuery.get("price")}`;
  //   const url = `/rooms?search=${name}&sort=${sort}&${priceFilter}&page=${page}&limit=${limit}`;
  //   clearTimeout(typeTimer);
  //   setTimeout(() => {
  //     sendRequest(url, "GET", true);
  //   }, 500);
  // }, [searchObj]);
  return (
    <Section className="section--search">
      {error && <Message text={error.response.data.message} error />}
      <Container>
        <div className="search-page">
          <SearchForm handler={handleSearchData} />
          <div className="u-center-text">{isLoading && <Loader isFetch />}</div>
          <div className="pagination">
            <Button
              className="pagination__btn"
              text="Prev"
              onClick={prevPage}
              disabled={searchObj.page === 1}
            >
              <LiaChevronLeftSolid className="pagination__btn__icon" />
            </Button>
            <Button
              className="pagination__btn"
              onClick={nextPage}
              disabled={data?.data.docs.length < searchObj.limit}
            >
              <LiaChevronRightSolid className="pagination__btn__icon" />
            </Button>
          </div>
          <p className="search-page__result u-center-text u-margin-bottom-medium">
            {!isLoading ? (
              <strong>{`Got ${data?.results} results from your search query.`}</strong>
            ) : (
              "Loading..."
            )}
          </p>
          <RoomsSearch rooms={data?.data.docs} />
        </div>
      </Container>
    </Section>
  );
};

export default Search;
