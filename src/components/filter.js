const Filter = () => {
    return (
      <>
      <div className="border-2 border-black mx-10">
      <form className="flex flex-col space-y-10 items-center px-16 py-40">
        <input type="text" placeholder="Job Title" className="py-2 w-full" />
        <select className="py-2 w-full">
            <option>
                Options
            </option>
        </select>
        <button type="submit" className="bg-gray-400 text-white w-1/2 h-10">Filter</button>
      </form>
    
      </div>
         
     </>
    );
  }
  
  export default Filter;