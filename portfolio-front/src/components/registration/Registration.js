import * as React from "react";
import {useState} from "react";

function Registration(props) {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index < 5) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (<div className="w-full bg-gray-100 py-10 px-40 h-screen flex flex-col items-center">
        <div className="p-card  flex p-5 w-full flex-col gap-5 items-center">

            {index === 0 ? (

                <React.Fragment>
                    <strong>Experience</strong>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Position</label>
                        <input
                            placeholder={'Position'}
                            className="text-violet-500 text-sm w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                    <div className="w-full gap-2 flex flex-col">
                        <label>Company</label>
                        <input
                            placeholder={'Company'}
                            className="text-violet-500 text-sm  w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Start date</label>
                        <input
                            type={"date"}
                            placeholder={'Start date'}
                            className="text-violet-500 text-sm w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                    <div className="w-full flex gap-2 flex-col">
                        <label>End date</label>
                        <input
                            type={"date"}
                            placeholder={'End date'}
                            className="text-violet-500 text-sm w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                </React.Fragment>

            ) : index === 1 ? (

                <React.Fragment>
                    <strong>Skills</strong>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Position</label>
                        <input
                            placeholder={'Position'}
                            className="text-violet-500 text-sm w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                    <div className="w-full gap-2 flex flex-col">
                        <label>Company</label>
                        <input
                            placeholder={'Company'}
                            className="text-violet-500 text-sm  w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Start date</label>
                        <input
                            type={"date"}
                            placeholder={'Start date'}
                            className="text-violet-500 text-sm w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                    <div className="w-full flex gap-2 flex-col">
                        <label>End date</label>
                        <input
                            type={"date"}
                            placeholder={'End date'}
                            className="text-violet-500 text-sm w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                </React.Fragment>

            ) : index === 2 ? (

                <React.Fragment>
                    <strong>Languages</strong>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Position</label>
                        <input
                            placeholder={'Position'}
                            className="text-violet-500 text-sm w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                    <div className="w-full gap-2 flex flex-col">
                        <label>Company</label>
                        <input
                            placeholder={'Company'}
                            className="text-violet-500 text-sm  w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                    <div className="w-full flex gap-2 flex-col">
                        <label>Start date</label>
                        <input
                            type={"date"}
                            placeholder={'Start date'}
                            className="text-violet-500 text-sm w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                    <div className="w-full flex gap-2 flex-col">
                        <label>End date</label>
                        <input
                            type={"date"}
                            placeholder={'End date'}
                            className="text-violet-500 text-sm w-full whitespace-nowrap border bg-slate-50
                    grow justify-center
                     pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"/>

                    </div>
                </React.Fragment>

            ) : (
                <p>Default Hello</p>
            )}


            <div className="w-full flex flex-row justify-between">
                <button
                    disabled={index <= 0}
                    onClick={handlePrev}
                    className="text-white disabled:bg-gray-400 disabled:border-0 text-md font-medium whitespace-nowrap bg-violet-500 self-stretch justify-center items-center
                                 mt-10 px-16 py-2 rounded-3xl border-2 border-solid border-violet-500 max-md:px-5">
                    {" "}
                    Prev
                </button>

                <button
                    disabled={index === 5}
                    onClick={handleNext}
                    className="text-white disabled:bg-gray-400 disabled:border-0 text-md font-medium whitespace-nowrap bg-violet-500 self-stretch justify-center items-center
                                 mt-10 px-16 py-2 rounded-3xl border-2 border-solid border-violet-500 max-md:px-5">
                    {" "}
                    Next
                </button>
            </div>

        </div>
    </div>);
}

export default Registration;
