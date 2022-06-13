import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Search = (props) => {

    return (
        <>
            <div className="mx-2 mb-2 lg:mx-6 flex justify-between ">
                <div className="relative flex w-full flex-wrap items-stretch ">
                    <input type="text" placeholder="Cari Arsip" value={props.q} onChange={(e) => props.setQ(e.target.value)} 
                    className="w-full relative  px-3 py-3 placeholder-gray-600 font-semibold ring-1 ring-black
                    text-black border-black rounded shadow  focus:ring-blue-500 focus:outline-none focus:ring-1 " />
                    <button onClick={props.handleFilter} className="flex items-center justify-center w-10 right-0 px-3 py-3 h-full bg-sky-600 ring-1 ring-sky-600  absolute text-center text-white rounded-r ">
                        <FontAwesomeIcon className="inline-block h-4" icon={['fas', 'search']} />
                    </button>
                </div>
            </div>
        </>
    )
}



export default Search