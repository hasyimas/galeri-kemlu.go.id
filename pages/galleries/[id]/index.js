import Search from '../../../components/Search'
import { server } from '../../../config'
import { saveAs } from "file-saver";
import Meta from '../../../components/Meta';
import { useContext } from 'react';
import Modal from "../../../components/Login";
import sessionContext from '../../../context/sessionContext';
import http from "../../../config/http-common"

const Galleries = (props) => {
    const { show, setShow, token, q, setQ, docTypes, setDocTypes, handleFilter } = useContext(sessionContext)
    let keywords = '';
    keywords = props.gallery.keywords.map((map, key) => {
        if (key < 3) {
            return (
                <div key={key}>
                    <a href={`/galleries?keyword=${map}&year=&docType=&page=1`} as={`/galleries?keyword=${map}&year=&docType=&page=1`} className="cursor-pointer text-blue-500 hover:text-blue-900"
                    >{map}</a> |&nbsp;
                </div>)
        }
    })

    const ComponentFile = ({ props }) => {
        if (props.gallery.fileType == 'image') {
            return (<img className="w-full h-full object-cover" src={server + '/uploads/watermark/' + props.gallery.sourceFile} alt={props.gallery.keywords} />);
        } else if (props.gallery.fileType == 'audio') {
            return (<audio src={server + '/uploads/audio/' + props.gallery.sourceFile} className="w-full h-full object-cover" controls></audio>);
        } else if (props.gallery.fileType == 'video') {
            return (<video src={server + '/uploads/videos/' + props.gallery.sourceFile} className="w-full h-full object-cover" controls preload="none"></video>);
        }
    }
    const ComponentDownload = ({ props }) => {
        if (props.gallery.fileType == 'image') {
            return (<button disabled={(token ? false : true)}
                onClick={() => downloadFile((token ? `${server + '/uploads/origin/' + props.gallery.sourceFile}` : ''))}
                className="disabled:opacity-60 opacity-100 bg-cyan-600 text-white hover:bg-cyan-500 font-bold uppercase text-sm px-6 py-3 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            >
                Download Now
            </button>);
        } else if (props.gallery.fileType == 'audio') {
            return (<button disabled={(token ? false : true)}
                onClick={() => downloadFile((token ? `${server + '/uploads/audio/' + props.gallery.sourceFile}` : ''))}
                className="disabled:opacity-60 opacity-100 bg-cyan-600 text-white hover:bg-cyan-500 font-bold uppercase text-sm px-6 py-3 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            >
                Download Now
            </button>);
        } else if (props.gallery.fileType == 'video') {
            return (<button disabled={(token ? false : true)}
                onClick={() => downloadFile((token ? `${server + '/uploads/videos/' + props.gallery.sourceFile}` : ''))}
                className="disabled:opacity-60 opacity-100 bg-cyan-600 text-white hover:bg-cyan-500 font-bold uppercase text-sm px-6 py-3 my-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            >
                Download Now
            </button>);
        }
    }

    return (
        <>
            <Meta title={`${props.gallery.title}`} />
            <div className="min-h-screen my-4">
                <Search q={q} setQ={setQ} docTypes={docTypes} setDocTypes={setDocTypes} handleFilter={handleFilter} />
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 my-4 mx-2 lg:mx-6">
                    <div className="lg:col-span-3 border-2 border-gray-400 py-2 px-2">
                        <ComponentFile props={props} />
                    </div>
                    <div className="flex flex-col border-2 border-gray-400 divide-y px-4 py-4">
                        <div>
                            <span className="my-1">Information Size / format</span>
                            <h1 className="text-lg font-semibold my-1">Large - {props.gallery.imageHeight} x {props.gallery.imageWidth} pixels</h1>
                            <h2 className="my-1">{props.gallery.imageHeightInCm} x {props.gallery.imageWidthInCm} cm - {props.gallery.xResolution} DPI - {props.gallery.fileType}</h2>
                        </div>
                        <div className="flex flex-col ">
                            <h1 className="text-lg font-semibold my-1">{props.gallery.title}</h1>
                            <h2 className="my-1">Tahun {props.gallery.year}</h2>
                            <div className="my-1 flex">Tags : {keywords}</div>
                            <ComponentDownload props={props} />
                            <button onClick={() => setShow(true)} className={(token != '' ? 'hidden' : 'block') + " bg-white text-black hover:bg-cyan-600 hover:text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"} type="button"
                            >
                                Login
                            </button>
                            <Modal onClose={() => setShow(false)} show={show} setShow={setShow} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    // const res = await fetch(`${server}/api/galleries/${context.params.id}`)
    const res = await http.get(`galleries/${context.params.id}`)

    const gallery = await res.data
    return {
        props: {
            gallery: gallery.data
        }
    }
}


const downloadFile = async (url) => {
    var filename = url.split('/')
    saveAs(url, filename[4]);
};

export default Galleries
