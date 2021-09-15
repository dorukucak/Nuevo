const List = () => {
    return (
      <>
        <div className="border-2 border-black p-5">
        <form className="flex flex-row space-x-10">
          <input type="text" placeholder="Name" className="w-full" />
          <select className="w-full">
            <option>
              Company-1
            </option>
          </select>
          <button type="submit" className="bg-gray-400 text-white w-1/2 h-10">Filter</button>
      </form>
        
        </div>
   
     </>
    );
  }
  
  export default List;