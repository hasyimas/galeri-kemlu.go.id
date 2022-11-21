import React, { useState, useEffect, useContext } from "react";
import 'tailwindcss/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Modal from "./Login";
import { server } from '../config'
import sessionContext from "../context/sessionContext";
import Cookies from "js-cookie";

function Navbar() {

  const { show, setShow, token, setToken, usernameData, setUsernameData,
    q, setQ, years, setYears, docTypes, setDocTypes, stateDoctype, setStateDoctype, stateYear, setStateYear,
    router, handleFilter } = useContext(sessionContext)
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const [dropdownPopoverShow2, setDropdownPopoverShow2] = useState(false);
  const btnDropdownRef2 = React.createRef();
  const popoverDropdownRef2 = React.createRef();
  const openDropdownPopover2 = () => {
    setDropdownPopoverShow2(true);
  };
  const closeDropdownPopover2 = () => {
    setDropdownPopoverShow2(false);
  };
  const logout = async (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify({})
    };
    const res = await fetch(`${server}/api/auth/logout`, requestOptions)
    const auth = await res.json()
    if (res.status == 200) {
      Cookies.remove('token')
      Cookies.remove('name')
      router.reload()
      // localStorage.removeItem('token')
      // localStorage.removeItem('username')
      // setToken('')
      // setUsernameData('')
      dropdownPopoverShow2 ? closeDropdownPopover2() : openDropdownPopover2();
    }
  }

  const handleClick = (e, docType) => {
    e.preventDefault()
    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();

    const slugs = router.query.slug;
    slugs = [docType, 1]
    router.push({
      pathname: `/galleries/${slugs.join('/')}/`,
    })
  };


  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-gray-200 px-2 py-2 " >
        <div className="w-full px-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="w-full flex items-center text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <div className="w-14 h-14 mr-4">
                <img src="/logo-01.png" alt="kemenlu" />
              </div>
              <div className="uppercase">
                <p className="font-semibold text-blue-700 hidden lg:block">Kementerian Luar Negeri <br></br>
                  <span className="text-red-700">Republik Indonesia</span>
                </p>
              </div>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon className={(navbarOpen ? "hidden" : "inline-block h-5")} icon={['fas', 'bars']} />
              <FontAwesomeIcon className={(navbarOpen ? "inline-block h-5" : "hidden")} icon={['fas', 'times']} />
            </button>
          </div>
          <div className={"lg:flex flex-grow lg:items-center " + (navbarOpen ? " flex" : " hidden")}  >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="px-2 lg:px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="/"
                >
                  <span className="">Home</span>
                </a>
              </li>
              <li className="nav-item ">
                <button ref={btnDropdownRef} onClick={() => { dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover(); }}
                  className="relative pl-2 lg:pl-3 pr-4 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 cursor-pointer" >
                  <span className="mr-0">Gallery</span>
                  <span className="absolute right-0 " >
                    <FontAwesomeIcon className={(dropdownPopoverShow ? "hidden" : "block h-5 ")} icon={['fas', 'caret-down']} />
                    <FontAwesomeIcon className={(dropdownPopoverShow ? "block h-5" : "hidden")} icon={['fas', 'caret-up']} />
                  </span>
                </button>
                <div
                  ref={popoverDropdownRef}
                  className={(dropdownPopoverShow ? "block " : "hidden ") + "absolute bg-gray-200 text-base z-50 float-left  list-none text-left rounded shadow-lg mt-1"}
                  style={{ minWidth: "12rem" }}
                >
                  <Link href="/galleries"  >
                    <a href="/" className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-sky-900 hover:text-white "
                    }
                      onClick={(e) => handleClick(e, "image")}>Photo</a>
                  </Link>
                  {/* <Link href="/galleries"  >
                    <a href="/" className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-sky-900 hover:text-white"
                    }
                      onClick={(e) => handleClick(e, "audio")}>Audio</a>
                  </Link>
                  <Link href="/galleries"  >
                    <a href="/" className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-sky-900 hover:text-white"
                    }
                      onClick={(e) => handleClick(e, "video")} >Video</a>
                  </Link> */}
                </div>
              </li>
              <li className="nav-item">
                <Link href="/faq"  >
                  <a
                    className="px-2 lg:px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="/"
                  >
                    <span className="">FAQ</span>
                  </a>
                </Link>
              </li>
              <li className={(token != '' ? 'hidden' : 'block') + " nav-item"}>

                <button
                  className=" px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug bg-sky-900 text-white hover:opacity-75"
                  onClick={() => setShow(true)}
                >
                  <span className="">Login </span>
                </button>

                <Modal onClose={() => setShow(false)} show={show} setShow={setShow} />
              </li>
              <li className={(token != '' ? 'block' : 'hidden') + " nav-item"}>
                <button ref={btnDropdownRef2} onClick={() => { dropdownPopoverShow2 ? closeDropdownPopover2() : openDropdownPopover2(); }}
                  className="relative pl-3 pr-4 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 cursor-pointer" >
                  <span className="mr-0">{`${Cookies.get('name')}`}</span>
                  <span className="absolute right-0 " >
                    <FontAwesomeIcon className={(dropdownPopoverShow2 ? "hidden" : "block h-5 ")} icon={['fas', 'caret-down']} />
                    <FontAwesomeIcon className={(dropdownPopoverShow2 ? "block h-5" : "hidden")} icon={['fas', 'caret-up']} />
                  </span>
                </button>
                <div
                  ref={popoverDropdownRef2}
                  className={(dropdownPopoverShow2 ? "block " : "hidden ") + "absolute bg-white text-base z-50 float-left  list-none text-left rounded shadow-lg mt-1"}
                  style={{ minWidth: "12rem" }}
                >
                  <a href="/" className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-cyan-800 hover:text-white "
                  }
                    onClick={(e) => logout(e)} >
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar