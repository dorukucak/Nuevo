import React, { useState, useEffect } from "react";

const List = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://5f7335deb63868001615f557.mockapi.io/list")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";

    return (
        <>
            <div className="border-2 border-black flex flex-col space-y-10 p-16">

                {data.map((item) =>
                    <div key={item.id}>
                        <div className="flex flex-row space-x-10 items-center">
                            <div name="photo" className="border border-black h-20 w-20">
                                <img src={`${item.image}`} />
                            </div>
                            <div name="info" className="flex flex-col space-y-1">
                                <p name="name" className="text-lg">{item.name}</p>
                                <p name="company">{item.company}</p>
                                <p name="job description">{item.jobdescription}</p>
                            </div>
                        </div>
                    </div>

                )
                }




            </div>

        </>
    );
}

export default List;