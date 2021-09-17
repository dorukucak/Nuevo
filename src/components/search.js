const List = ({ onChange, data, onSubmit, onCompanyFilter }) => {
  const uniqCo = [...new Set(data)]; //removes duplicate company names

  return (
    <>
      <div className="border-2 border-black p-5">
        <form
          className="flex flex-col justify-center space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full border-b-2 m-0 border-gray-300 placeholder-black onFocus: outline-none"
            onChange={onChange}
          />
          <select
            className="m-0 w-full border-b-2 border-gray-300 onFocus: outline-none"
            onChange={onCompanyFilter}
          >
            <option value="">All companies</option>
            {uniqCo.map((item) => (
              <option value={item.company}>{item.company}</option>
            ))}
          </select>
          <button className="bg-green-600 text-white w-1/2 h-10">Search</button>
        </form>
      </div>
    </>
  );
};

export default List;
