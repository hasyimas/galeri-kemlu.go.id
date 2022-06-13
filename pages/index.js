import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselList from '../components/CarouselList';
import Meta from '../components/Meta';
import Search from '../components/Search';
import { server } from '../config';
import { useContext } from 'react'
import sessionContext from "../context/sessionContext";
import http from "../config/http-common";

export default function Beranda({ galleries, server }) {
  const { q, setQ, docTypes, setDocTypes, handleFilter } = useContext(sessionContext)

  return (
    <>
      <Meta title='Kementerian Luar Negeri Republik Indonesia | Rumah Arsip Digital - Home' />
      <div className="flex flex-col items-center justify-center py-2 min-h-screen">

        <main className="flex flex-col w-full flex-1 text-center">
          <h1 className="text-4xl font-bold"> Rumah Arsip Digital </h1>
          <h2 className="text-xl capitalize mt-1 ">sumber aset data dokumentasi kementerian luar negeri</h2>

          <CarouselList galleries={galleries} server={server} />

          <Search q={q} setQ={setQ} docTypes={docTypes} setDocTypes={setDocTypes} handleFilter={handleFilter} />

        </main>
      </div>
    </>
  )
}


export const getServerSideProps = async (context) => {
  const res = await http.get("banner/active").catch(error => console.log(error.message));
  const data = res ? res.data.data : [];
  // const res = await fetch(`${server}/api/galleries/banner`)
  const galleries = await data
  return {
    props: {
      galleries: galleries,
      server
    }
  }
}

