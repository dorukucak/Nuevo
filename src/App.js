import Header from './components/header';
import Filter from './components/filter';
import List from './components/list';
import Search from './components/search';


const App = () => {
  return (
    <>
      <div id="main container" className="px-20">
        <Header />
        <div className="grid grid-cols-3">
          <Filter />
          <div className="col-span-2 flex flex-col space-y-10  ">
            <Search />
            <List />
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
