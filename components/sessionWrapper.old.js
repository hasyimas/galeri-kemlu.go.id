import sessionContext from "../context/sessionContext";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

    const handleFilter = () => {
        const path = '/galleries'
        const query = router.query.slug
        query.keyword = q
        query.year = years
        query.docType = docTypes
        query.page = 1
        router.push({
            pathname: path,
            query: query,
        })

    }

    const valContext = {
        show, setShow, token, setToken, usernameData, setUsernameData,
        q, setQ, years, setYears, docTypes, setDocTypes, stateDoctype, setStateDoctype,
        stateYear, setStateYear, router, handleFilter
    }

    useEffect(() => {
        const token = localStorage.getItem('token') || '';
        const username = localStorage.getItem('username') || '';
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