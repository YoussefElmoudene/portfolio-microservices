import * as React from "react";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIdBadge, faListAlt} from '@fortawesome/free-regular-svg-icons'
import './navbar.css'
import {faBriefcase, faCertificate, faPhoneSquare, faTentArrowTurnLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {getUser, logout} from "../../auth/auth";
import {isUserLoggedIn} from "../../auth/utils";
import {Button} from 'primereact/button';
import type {Navigation} from "../../auth/models/navigation";
import type {User} from "../../auth/models/User";

function Navbar() {
    const user: User = getUser()
    let [navigation: Array<Navigation>, setNavigation] = useState([])
    const isAuthenticated: boolean = isUserLoggedIn()
    const [activeElement, setActiveElement] = useState(localStorage.getItem("activeElement") || "/");


    useEffect(() => {
        localStorage.setItem("activeElement", activeElement);
        if (isAuthenticated) {
            setNavigation(() => [{
                title: "ABOUT ME", icon: <FontAwesomeIcon className="pr-2" icon={faIdBadge}/>, path: "/about-me"
            }, {
                title: "SERVICES", icon: <FontAwesomeIcon className="pr-2" icon={faListAlt}/>, path: "/services"
            }, {
                title: "EXPERIENCES", icon: <FontAwesomeIcon className="pr-2" icon={faBriefcase}/>, path: "/experiences"
            }, {
                title: "CERTIFICATIONS",
                icon: <FontAwesomeIcon className="pr-2" icon={faCertificate}/>,
                path: "/certifications"
            }])
        }
    }, [activeElement]);

    // handle click on navbar element
    const handleClick = (element) => {
        setActiveElement(element);
    };

    const [state, setState] = useState(false)


    //<FontAwesomeIcon icon={} />

    return (<nav className="bg-gray-900 w-full border-b md:border-0 md:static">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link to={`/`}>
                    <div className=" logo__container flex items-center gap-x-3">
                        {isAuthenticated ? (<div>

                            <span
                                className="block text-white name text-sm font-medium">{user?.firstName} {user?.lastName}</span>
                            <p className="block text-indigo-600 hover:text-indigo-500 text-xs">{user?.title}</p>
                        </div>) : <div className="text-violet-500 text-4xl max-w-[178px]">PortFolio</div>}
                    </div>
                </Link>
                <div className="md:hidden">
                    <button className="text-gray-200 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                    >
                        {state ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                       fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 8h16M4 16h16"/>
                        </svg>)}
                    </button>
                </div>
            </div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    {navigation.map((item, idx) => {
                        return (<li key={idx}
                                    onClick={() => handleClick(item.path)}
                                    className={activeElement === item.path ? "text-indigo-600" : "text-gray-200 hover:text-indigo-600 "}>
                                <Link to={item.path}>
                                    <a>
                                        {item?.icon}
                                        {item?.title}
                                    </a>
                                </Link>
                            </li>

                        )
                    })}
                </ul>
            </div>

            {isAuthenticated ? <React.Fragment>
                <div className="hidden md:inline-block">
                    <Link to={`/contact-me`}>
                        <a onClick={() => handleClick("contact-me")}
                           className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
                            CONTACT ME <FontAwesomeIcon className="pl-2" icon={faPhoneSquare}/>
                        </a>
                    </Link>
                </div>

                <Button onClick={e => logout()} label="logout" severity="info" text/>
            </React.Fragment> : <React.Fragment>

                <div className="hidden  flex-row gap-2 md:flex">
                    <Link to={`/login`}>
                        <a onClick={() => handleClick("contact-me")}
                           className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
                            LOGIN <FontAwesomeIcon className="pl-2" icon={faTentArrowTurnLeft}/>
                        </a>
                    </Link>


                    <Link to={`/register`}>
                        <a onClick={() => handleClick("contact-me")}
                           className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
                            RESISTER
                        </a>
                    </Link>
                </div>

            </React.Fragment>}


        </div>

    </nav>)
}

export default Navbar;
