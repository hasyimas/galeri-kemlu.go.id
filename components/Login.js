import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useContext } from 'react'
import Alert from "./Alert"
import sessionContext from "../context/sessionContext";
import axios from 'axios';
import Link from 'next/link';
import { server } from "../config";
import Cookies from "js-cookie";

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [setuju, setSetuju] = useState(false)
    const { setToken, setUsernameData, router } = useContext(sessionContext)
    if (!props.show) {
        return null
    }
    const auth = async () => {

        await axios.post(`${server}/api/auth`,
            { 'username': username, 'password': password })
            .then(async res => {

                if (!setuju) {
                    setAlert(true)
                    setMessage("You must agree")
                    setShowAlert(true)
                    return
                }
                const tokens = res.data.token
                Cookies.set('token', tokens)

                // localStorage.setItem('token', res.data.token);
                // localStorage.setItem('username', res.data.username);
                // setToken(res.data.token)
                // setUsernameData(res.data.username)
                // setShowAlert(false)
                props.setShow(false)
                router.reload()


            })
            .catch(function (error) {
                setAlert(true)
                setMessage("Authentication Failed !")
                setShowAlert(true)
            });
    }


    return (<div className="fixed flex items-center justify-center bg-gray-700 left-0 right-0 top-0 bottom-0 z-40 bg-opacity-80 ">
        <div className="bg-white px-4 py-4 lg:w-1/3 rounded-lg ">
            <div className="flex justify-between">
                <h1 className=" mb-3 text-2xl font-semibold">Login</h1>
                <FontAwesomeIcon className="inline-block h-5 hover:cursor-pointer" icon={['fas', 'times']} onClick={props.onClose} />
            </div>
            <Alert onClose={() => setShowAlert(false)} showAlert={showAlert} setShowAlert={setShowAlert} alert={alert} message={message} />

            <div className="mb-3 pt-0">
                <div className="my-2">Username</div>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white  rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full" />
            </div>
            <div className="mb-3 pt-0">
                <div className="my-2">Password</div>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white  rounded text-sm border-2 shadow outline-none focus:outline-none focus:ring w-full" />
            </div>
            <div class="form-check mb-3 pt-0 flex">
                <input value={setuju} onChange={(e) => setSetuju(e.target.checked)} type="checkbox" id="setuju"
                    className="flex-none appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                <label className="flex-1 inline-block text-gray-800 text-xs text-justify" for="flexCheckDefault">
                    Seluruh file dokumentasi pada website Rumah Arsip Digital merupakan properti kepemilikan Kementerian Luar Negeri RI dan dapat
                    digunakan untuk keperluan non-komersial berkaitan dengan tujuan dan misi lingkup diplomasi Indonesia. Dengan mengklik checkbox
                    berarti pengguna telah membaca, memahami dan menyetujui hal-hal yang tercantum pada laman <Link href="/faq"  ><a href="" onClick={props.onClose} className="underline decoration-sky-400"> Usage & Guidelines</a></Link>.
                </label>
            </div>
            <button onClick={auth} className="bg-cyan-900 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            >
                Login
            </button>
        </div>
    </div>)
}

export default Login
