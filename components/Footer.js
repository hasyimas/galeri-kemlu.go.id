import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col lg:flex-row bg-gray-200 lg:justify-between px-3 py-3 lg:px-2 lg:py-14" >
        <div className="flex flex-col text-center w-full items-center  lg:flex-row lg:text-left ">
          <img src="/logo.png" alt="kemenlu" className="h-20 w-20 lg:h-28 lg:w-28 lg:mr-6" />
          <div className="items-center">
            <h1 className="uppercase text-base lg:text-xl font-semibold text-black">Kementerian Luar Negeri Republik Indonesia</h1>
            <p className="text-black text-sm lg:text-lg">
              Jl. Taman Pejambon No. 6 Jakarta Pusat <br></br>
              Telp. (62-21) 3849413, 3456014, 3441508 <br></br>
              Fax. (62-21) 3855481
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 lg:gap-6 mr-4 justify-items-center">
          <a href="https://kemlu.go.id/portal/id" target="_blank"
            className="flex items-center justify-center rounded-full bg-white h-8 w-8 lg:h-12 lg:w-12">
            <FontAwesomeIcon className="inline-block h-4 lg:h-6 text-cyan-800" icon={['fas', 'globe']} />
          </a>
          <a href="https://www.facebook.com/Kemlu.RI/" target="_blank"
            className="flex items-center justify-center rounded-full bg-white h-8 w-8 lg:h-12 lg:w-12">
            <FontAwesomeIcon className="inline-block h-4 lg:h-6 text-cyan-800" icon={['fab', 'facebook-f']} />
          </a>
          <a href="https://instagram.com/kemlu_ri?igshid=2uw3xqu2nm81" target="_blank"
            className="flex items-center justify-center rounded-full bg-white h-8 w-8 lg:h-12 lg:w-12">
            <FontAwesomeIcon className="inline-block h-4  lg:h-6 text-cyan-800" icon={['fab', 'instagram']} />
          </a>
          <a href="https://www.youtube.com/c/MoFAIndonesia" target="_blank"
            className="flex items-center justify-center rounded-full bg-white h-8 w-8 lg:h-12 lg:w-12">
            <FontAwesomeIcon className="inline-block h-4  lg:h-6 text-cyan-800" icon={['fab', 'youtube']} />
          </a>
          <a href="https://twitter.com/kemlu_ri?s=21" target="_blank"
            className="flex items-center justify-center rounded-full bg-white h-8 w-8 lg:h-12 lg:w-12">
            <FontAwesomeIcon className="inline-block h-4  lg:h-6 text-cyan-800" icon={['fab', 'twitter']} />
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full py-4 px-4">
        <p className="text-sm lg:text-lg font-semibold"> &copy;2021 Copyright Kementerian Luar Negeri Republik Indonesia</p>
      </div>
    </div>
  );
}

export default Footer