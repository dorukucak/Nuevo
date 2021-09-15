import React, { useState, useEffect } from "react";
import Header from './components/header';
import Filter from './components/filter';
import List from './components/list';
import Search from './components/search';



const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(null);


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
      <div id="main container" className="px-20">
        <Header />
        <div className="grid grid-cols-3">
          <Filter />
          <div className="col-span-2 flex flex-col space-y-10  ">
            <Search data={data} onChange={(e) => setSearch(e.target.value)}/>
            <List data={data} search={search} loading={loading} error={error}/>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
