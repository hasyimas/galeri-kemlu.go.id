import Router, { useRouter } from "next/router"
const YearsComponent = (props) => {

    let listYears = ['1980-1985', '1986-1990', '1991-1995', '1996-2000', '2001-2005', '2006-2010', '2011-2015', '2016-2021'];
    let returnListYears = '';

    function toggleYear(year) {
        const path = props.router.pathname
        const query = props.router.query
        props.setStateYear(!props.stateYear)
        query.year = year
        if (year === props.queryYear && props.stateYear === true) {
            query.year = ''
        }
        props.router.push({
            pathname: path,
            query: query,
        })
    }

    returnListYears = listYears.map((map, i) => {

        return <button key={i} onClick={() => {
            toggleYear(map)
        }} className={(props.queryYear === map ?
            "bg-cyan-800 text-white" : "bg-white text-cyan-800") +
            " bg-white-500 text-center hover:bg-cyan-800 hover:text-white font-bold uppercase text-xs px-4 py-2 ring-1 ring-black rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
            type="button" >
            {map}
        </button>

    })
    return (
        <>
            <div className=" my-4 mx-2 grid grid-cols-3 gap-4 lg:mx-4 lg:grid-cols-8 ">
                {returnListYears}
            </div>
        </>
    )
}

export default YearsComponent