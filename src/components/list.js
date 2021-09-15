const List = () => {
    return (
      <>
          <div className="border-2 border-black grid grid-cols-3 p-10 gap-4">

            <div name="photo" className="border border-black h-full">
                <p>Photo</p>
            </div>
            <div name="info" className="flex flex-col space-y-2">
                <p name="name">Name</p>
                <p name="company">Company Name</p>
                <p name="job description">Job description</p>
            
            </div>
          
          </div>
   
     </>
    );
  }
  
  export default List;