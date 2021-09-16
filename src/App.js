import React, { useState, useEffect } from "react";
import Header from './components/header';
import Filter from './components/filter';
import List from './components/list';
import Search from './components/search';
import Pagination from './components/pagination';



const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(null);
  const [searched, setSearched] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [companyFiltered, setCompanyFiltered] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [areaFiltered, setAreaFiltered] = useState("");
  const [descFilter, setDescFilter] = useState("");
  const [descFiltered, setDescFiltered] = useState("");
  // PAGINATION SETUP
  const [cardsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  //Index of cards in current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const filtered = data.filter((item) => { // filters JSON according to search

    const nameFilter = item.name.toUpperCase().includes(searched.toUpperCase())
    const companyFilter = item.company.includes(companyFiltered);
    const jobAreaFilter = item.area.includes(areaFiltered);
    const descFilter = item.jobdescription.toUpperCase().includes(descFiltered.toUpperCase());

    return nameFilter && companyFilter && jobAreaFilter && descFilter;

  });                                   // filters JSON according to search

  const currentCards = filtered
    .slice(indexOfFirstCard, indexOfLastCard);
  // applies search criteria to filtered data and then applies area filter

  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setShow(true); // reveals filter and list components
    setSearched(search);
    setCompanyFiltered(companyFilter)  // prevents immediate search change - sends what search value we want to <List />
    setCurrentPage(1);
  }

  const handleFilterClick = (e) => {
    e.preventDefault();
    setAreaFiltered(areaFilter); // this function prevents immediate filter change
    setDescFiltered(descFilter);
  }

  useEffect(() => {
    fetch("https://5f7335deb63868001615f557.mockapi.io/list")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  return (
    <>
      <div id="main container" className="px-10 my-5 sm:px-20 font-serif">
        <Header />
        <div className={(show) ? "flex flex-col md:grid md:grid-cols-3 gap-10 justify-center" : "flex justify-center items-center h-full"}>
          <div className={(show) ? "flex md:block h-full order-2 md:order-1" : "hidden"}>
          <div className="order-2 w-full">
          <Filter
              data={data}
              onAreaFilter={(e) => setAreaFilter(e.target.value)}
              onDescFilter={(e) => setDescFilter(e.target.value)}
              onSubmit={handleFilterClick}
              
            />
            </div>
            <div className="items-start">
            <Pagination
              data={currentCards}
              postsPerPage={cardsPerPage}
              totalPosts={filtered.length}
              paginateBack={paginateBack}
              paginateFront={paginateFront}
              currentPage={currentPage}
              
            />
            </div>
          </div>
          <div className="col-span-2 flex flex-col space-y-10 order-1 md:order-2 ">
            <Search
              data={data}
              onChange={(e) => setSearch(e.target.value)}
              onSubmit={handleSearchClick}
              onCompanyFilter={(e) => setCompanyFilter(e.target.value)}
            />
            <div className={(show) ? "block" : "hidden"}>
              <List
                data={currentCards}
                search={searched}
                loading={loading}
                error={error} />
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
