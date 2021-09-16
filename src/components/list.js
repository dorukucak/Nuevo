import defaultImage from '../images/defaultImage.jpg';

const List = ({ data, loading, error }) => {


    if (loading) return ("Loading...");
    else if (error) return "Error!";
    else {
        return (
            <>
                <div className="border-2 border-black flex flex-col space-y-10 p-16">


                    {data.length === 0 ? "No person found" :

                        data.map((item) =>


                        (<div key={item.id}>
                            <div className="flex flex-row space-x-10 items-center">
                                <div name="photo" className="border border-black h-20 w-20">
                                    <img src={item.image} alt={item.name} onError={(e) => { e.target.src = defaultImage; e.target.onError = null; }} />
                                </div>
                                <div name="info" className="flex flex-col space-y-1">
                                    <p name="name" className="text-lg">{item.name}</p>
                                    <p name="company">{item.company}</p>
                                    <p name="job description">{item.jobdescription}</p>
                                </div>
                            </div>
                        </div>)


                        )
                    }




                </div>

            </>
        );
    };
}

export default List;