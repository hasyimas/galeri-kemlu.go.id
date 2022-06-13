import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DocTypeComponent = (props) => {

    return (
        <>
            <div className="flex justify-center w-full ">
                <button onClick={(e) => props.toggleDocumentType('audio')}
                    className={(props.docTypes === 'audio' && props.stateDoctype ? 'border-cyan-800 text-cyan-800' : "border-black text-black") +
                        " group flex flex-col items-center mx-2  hover:text-cyan-800  hover:border-cyan-800"}>
                    <FontAwesomeIcon className={(props.docTypes === 'audio' && props.stateDoctype ? 'border-cyan-800 ' : "border-black ") +
                        " inline-block h-16 mx-2 px-2 py-2 border-2 group-hover:border-cyan-800"} icon={['fas', 'volume-up']} />
                    <span className="my-2"> Audio</span>
                </button>
                <button onClick={(e) => props.toggleDocumentType('image')}
                    className={(props.docTypes === 'image' && props.stateDoctype ? 'border-cyan-800 text-cyan-800' : "border-black text-black") +
                        " group flex flex-col items-center mx-2  hover:text-cyan-800  hover:border-cyan-800"}>
                    <FontAwesomeIcon className={(props.docTypes === 'image' && props.stateDoctype ? 'border-cyan-800 ' : "border-black ") +
                        " inline-block h-16 mx-2 px-2 py-2 border-2 group-hover:border-cyan-800"} icon={['fas', 'image']} />
                    <span className="my-2"> Foto</span>
                </button>
                <button onClick={(e) => props.toggleDocumentType('video')}
                    className={(props.docTypes === 'video' && props.stateDoctype ? 'border-cyan-800 text-cyan-800' : "border-black text-black") +
                        " group flex flex-col items-center mx-2  hover:text-cyan-800  hover:border-cyan-800"}>
                    <FontAwesomeIcon className={(props.docTypes === 'video' && props.stateDoctype ? 'border-cyan-800 ' : "border-black ") +
                        " inline-block h-16 mx-2 px-2 py-2 border-2 group-hover:border-cyan-800"} icon={['fas', 'play']} />
                    <span className="my-2"> Video</span>
                </button>
            </div>
        </>
    )
}



export default DocTypeComponent