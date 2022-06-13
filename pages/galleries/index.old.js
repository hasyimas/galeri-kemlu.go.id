import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useContext } from 'react'
import ReactPaginate from "react-paginate"
import Router, { useRouter } from "next/router"
import Link from 'next/link'
import { server } from '../../config'
import Meta from "../../components/Meta"
import Filter from "../../components/Filter"
import sessionContext from "../../context/sessionContext";
import YearsComponent from "../../components/YearsComponent.js";
import http from "../../config/http-common"

function Galleries({ galleriesData, queryYear, querykeyword, queryDocType }) {
  const { q, setQ, years, setYears, docTypes, setDocTypes,
    stateDoctype, setStateDoctype, stateYear, setStateYear, router, handleFilter } = useContext(sessionContext)
  const [galleries, setGalleries] = useState([])
  const [loading, setLoading] = useState(false)

  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  // Triggers fetch for new page
  const handlePagination = (page) => {
    const path = router.pathname
    const query = router.query
    query.page = page.selected + 1
    router.push({
      pathname: path,
      query: query,
    })
  }

  useEffect(() => {
    if (galleriesData) {
      if (!galleriesData.error) {
        setGalleries(galleriesData.data)
      }
    }

    Router.events.on("routeChangeStart", startLoading)
    Router.events.on("routeChangeComplete", stopLoading)
    return () => {
      Router.events.off("routeChangeStart", startLoading)
      Router.events.off("routeChangeComplete", stopLoading)
    }
  }, [galleriesData, years, handleFilter]);

  const ComponentFile = ({ d }) => {
    if (d.fileType == 'image') {
      return (<div className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  after:content-['\^'] after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-black after:opacity-0 after:transition-all after:duration-500 after:ease-in-out after:transform group-hover:scale-150 group-hover:after:opacity-75" style={{ backgroundImage: `url(${server + '/uploads/watermark/' + d.sourceFile})` }}></div>);
    } else if (d.fileType == 'audio') {
      return (<audio src={server + '/uploads/audio/' + d.sourceFile} className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  after:content-['\^'] after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-black after:opacity-0 after:transition-all after:duration-500 after:ease-in-out after:transform group-hover:scale-150 group-hover:after:opacity-75" __idm_id__="undefined"></audio>);
    } else if (d.fileType == 'video') {
      return (<video src={server + '/uploads/videos/' + d.sourceFile} className="absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover  after:content-['\^'] after:absolute after:w-full after:h-full after:top-0 after:left-0  after:bg-black after:opacity-0 after:transition-all after:duration-500 after:ease-in-out after:transform group-hover:scale-150 group-hover:after:opacity-75" __idm_id__="undefined"></video>);
    } else {
      return null
    }
  }

  //Conditional rendering of the posts list or loading indicator
  let content = null;
  if (loading)
    content = <div className="text-center text-lg text-sky-500">Loading...</div>;
  else {
    //Generating posts list
    if (galleries) {
      content = (
        <>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-6 px-4">
            {galleries.map(d => {
              return <Link key={d.id} href="/galleries/[id]" as={`/galleries/${d.id}`}>
                <a href={`/galleries/${d.id}`} className="group cursor-pointer  before:content-[''] before:block relative flex items-center justify-center p-24 overflow-hidden shadow-xl w-full h-full ">
                  <ComponentFile d={d} />
                  <div className="absolute text-xs p-3 bottom-0 left-0 font-light transition-all duration-500 ease-in-out transform  text-gray-50 opacity-0 group-hover:opacity-100">
                    <div>{d.title}</div>
                    <div>{d.year}</div>
                  </div>
                </a>
              </Link>
            })}
          </div>
        </>
      );
    } else {
      content = (<>
        <div className="text-lg text-center">Data Not Found</div>
      </>);
    }
  }
  function title(docTypes) {
    if (docTypes == 'image') {
      return 'Photo';
    } else if (docTypes == 'audio') {
      return 'Audio';
    } else if (docTypes == 'video') {
      return 'Video';
    }
    return 'Semua File'
  }

  return (
    <>
      <Meta title='Kementerian Luar Negeri Republik Indonesia | Rumah Arsip Digital - Gallery' />
      <div className="min-h-screen">
        <h1 className="my-4 mx-2 lg:mx-4 font-black text-2xl" >{title(docTypes)}</h1>
        <Filter q={q} setQ={setQ} handleFilter={handleFilter} />
        <YearsComponent years={years} setYears={setYears} setStateYear={setStateYear} router={router} queryYear={queryYear} stateYear={stateYear} />
        {content}
        {galleries &&
          <ReactPaginate
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            previousLabel={<FontAwesomeIcon className="inline-block h-5 -mr-px" icon={['fas', 'chevron-left']} />}
            nextLabel={<FontAwesomeIcon className="inline-block h-5 -mr-px" icon={['fas', 'chevron-right']} />}
            breakLabel={"..."}
            initialPage={galleriesData.curPage - 1}
            pageCount={galleriesData.maxPage}
            onPageChange={handlePagination}
            containerClassName={'flex justify-center px-6 my-4 rounded list-none flex-wrap'}
            subContainerClassName={'pages pagination'}
            pageClassName={"cursor-pointer first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-cyan-800 bg-white text-cyan-800"}
            pageLinkClassName={"p-3"}
            activeClassName={"bg-cyan-800"}
            activeLinkClassName={"text-white"}
            nextLinkClassName={"cursor-pointer first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-cyan-800 bg-white text-cyan-800"}
            previousLinkClassName={"cursor-pointer first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-cyan-800 bg-white text-cyan-800"}
            breakLinkClassName={"cursor-pointer first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-cyan-800 bg-white text-cyan-800"}
          />
        }
      </div>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {

  const page = query.page || 1
  const keyword = query.keyword || ''
  const year = query.year || ''
  const docType = query.docType || ''


  let keywords = ''
  if (keyword != '') {
    keywords = `keyword=${keyword}&`
  }

  let years = ''
  if (year != '') {
    years = `year=${year}&`
  }
  let docTypes = ''
  if (docType != '') {
    docTypes = `docType=${docType}&`
  }

  // const res = await fetch(`${server}/api/galleries?${keywords}${years}${docTypes}page=${page}`)
  const res = await http.get(`/galleries?${keywords}${years}${docTypes}page=${page}`).catch(error => console.log(error.message));
  const galleries = await res ? res.data : [];
  // const lastPage = Math.ceil(gallery.totalData / gallery.size)
  return {
    props: {
      galleriesData: galleries,
      queryYear: year,
      querykeyword: keyword,
      queryDocType: docType,
    }
  }
}


export default Galleries