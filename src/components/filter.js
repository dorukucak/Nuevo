const Filter = ({ data, onSubmit, onAreaFilter }) => {
  const uniqJob = [...new Set(data)]; //removes duplicate company names


    return (
      <>
      <div className="border-2 border-black mx-10">
      <form className="flex flex-col space-y-10 items-center px-16 py-40" onSubmit={onSubmit}>
      <input type="text" placeholder="Job title" name="title" className="w-full" />
      <select className="w-full" onChange={onAreaFilter} >
      <option value="">Job areas</option>
        {
          data.map((item) =>
            <option value={item.area}>{item.area}</option>
          )
        }
      </select>
      <button className="bg-gray-400 text-white w-1/2 h-10">Search</button>
      </form>
    
      </div>
         
     </>
    );
  }
  
  export default Filter;