import * as React from "react";
import { getUser } from "../../auth/auth";
import { useEffect, useState } from "react";
import axios from "axios";

function Home(props) {
    const user = getUser();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []); // Add an empty dependency array to ensure useEffect runs only once

    const fetchUsers = async () => {
        try {
            let url = "http://localhost:8080/api/user/all";
            const response = await axios.get(url);
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching experiences:", error);
        }
    };

    return (
        <div className="bg-white flex flex-col gap-2 items-start">
            <div className="flex flex-row items-center p-10  justify-center w-auto max-w-full ">
                <input
                    placeholder={"search.."}
                    className="text-violet-500 text-lg  whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"
                />
            </div>
            <div className="bg-slate-50 self-stretch w-full pl-3.5 pr-16 pt-1 pb-12 max-md:max-w-full max-md:mt-10 max-md:pr-5">
                <div className="gap-3 flex flex-row justify-center items-center flex-wrap">
                    {users.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-stretch w-auto  max-md:w-full max-md:ml-0"
                        >
                            <div className="backdrop-blur-[2px] bg-white flex flex-col w-full pl-8 pr-6 pt-12 pb-6 rounded-[30px] max-md:mt-10 max-md:px-5">
                                <div className="self-center whitespace-nowrap">
                                    <img
                                        src="/logo.jpg"
                                        className="w-12 h-12 img__logo rounded-full"
                                        alt={`${item.firstName} ${item.lastName}`}
                                    />
                                </div>
                                <div className="text-black text-3xl font-bold self-center whitespace-nowrap mt-4">
                                    {item.firstName} {item.lastName}
                                </div>
                                <div className="text-violet-500 text-base font-medium self-center whitespace-nowrap">
                                    {item.title}
                                </div>
                                <div className="justify-center text-black text-center text-xs leading-5 max-w-[330px] ml-3.5 mt-10 self-start max-md:ml-2.5">
                                    I’m a friendly kitchen assistant who suffers from a severe
                                    phobia of buttons. I’m a friendly kitchen assistant who suffers
                                    from a severe phobia of buttons.
                                </div>
                                <div className="bg-violet-500 self-stretch shrink-0 h-[1px] mt-8" />
                                <button className="text-white text-md font-medium whitespace-nowrap bg-violet-500 self-stretch justify-center items-center mt-10 px-16 py-2 rounded-3xl border-2 border-solid border-violet-500 max-md:px-5">
                                    See complete bio
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
