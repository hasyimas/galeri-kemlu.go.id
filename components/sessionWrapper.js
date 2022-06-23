import sessionContext from "../context/sessionContext";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { jwtVerify } from 'jose'
import Cookies from "js-cookie";
function SessionWrapper({ children }) {
    const [token, setToken] = useState('')
    const [usernameData, setUsernameData] = useState('')
    const [show, setShow] = useState(false)
    const router = useRouter()
    const [q, setQ] = useState(router.query.keyword || '');
    const [years, setYears] = useState(router.query.year || '')
    const [docTypes, setDocTypes] = useState(router.query.doctype || '')
    const [stateDoctype, setStateDoctype] = useState(true)
    const [stateYear, setStateYear] = useState(false)
    const secret = process.env.TOKEN_KEY
    const handleFilter = (page) => {
        const path = '/galleries'
        const slugs = router.query.slug
        if (slugs == undefined) {
            slugs = ['image', '1']
        }
       
        router.push({
            pathname: `${path}/${slugs.join('/')}`,
            query: { q: q }
        });
    }

    const valContext = {
        show, setShow, token, setToken, usernameData, setUsernameData,
        q, setQ, years, setYears, docTypes, setDocTypes, stateDoctype, setStateDoctype,
        stateYear, setStateYear, router, handleFilter
    }

    useEffect(async () => {
        // const token = localStorage.getItem('token') || '';
        // const username = localStorage.getItem('username') || '';
        // setToken(token)
        // setUsernameData(username)
        const token = Cookies.get('token') || '';
        const username = Cookies.get('name') || '';
        try {
            const verified = await jwtVerify(
                token,
                new TextEncoder().encode(secret)
            )
            if (verified) {
                Cookies.set('name', verified.payload.username)
            }

        } catch (err) {
            Cookies.remove('token')
            Cookies.remove('name')
        }
        setToken(token)
        setUsernameData(username)
    }, [])

    return (
        <sessionContext.Provider value={valContext}>
            {children}
        </sessionContext.Provider>
    )
}

export default SessionWrapper