import React, { useState } from "react";
const List = ({ onChange, data, onSubmit }) => {

  const uniqCo = [...new Set(data)]; //removes duplicate company names

  return (
    <>
      <div className="border-2 border-black p-5">
        <form className="flex flex-row space-x-10" onSubmit={onSubmit}>
          <input type="text" placeholder="Name" className="w-full" onChange={onChange} />
          <select className="w-full">
            {
              uniqCo.map((item) =>
                <option value={item.company}>{item.company}</option>
              )
            }
          </select>
          <input type="submit" value="Submit" className="bg-gray-400 text-white w-1/2 h-10" />
        </form>

      </div>

    </>
  );
}

export default List;