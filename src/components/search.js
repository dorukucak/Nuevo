import React, { useState } from "react";
const List = ({ onChange, data }) => {

    

    return (
      <>
        <div className="border-2 border-black p-5">
        <form className="flex flex-row space-x-10">
          <input type="text" placeholder="Name" className="w-full" onChange={onChange}/>
          <select className="w-full">
         
            
          </select>
          <button type="submit" className="bg-gray-400 text-white w-1/2 h-10">Search</button>
      </form>
        
        </div>
   
     </>
    );
  }
  
  export default List;