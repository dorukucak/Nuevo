const Filter = ({ data, onSubmit, onAreaFilter, onDescFilter }) => {

  const Jobs = data.map(item => (item.area)).sort();
  const uniqJobs = [...new Set(Jobs)]; //removes duplicate company names


    return (
      <>
      <div className="border-2 border-black">
      <form className="flex flex-col space-y-10 items-center px-16 py-40" onSubmit={onSubmit}>
      <input type="text" placeholder="Job title" name="title" className="w-full border-b-2 border-gray-300 onFocus: outline-none placeholder-black" onChange={onDescFilter} />
      <select className="w-full border-b-2 border-gray-300 onFocus: outline-none"  onChange={onAreaFilter} >
      <option value="">Job areas</option>
        {
          uniqJobs.map((item, i) =>
            <option className="text-black" key={i} value={item}>{item}</option>
          )
        }
      </select>
      <button className="bg-green-600 text-white w-1/2 h-10">Filter</button>
      </form>
    
      </div>
         
     </>
    );
  }
  
  export default Filter;