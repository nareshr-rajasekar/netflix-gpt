const VideoTitle = ({title, overview})=>{
    return (
        <div className="w-screen aspect-video absolute text-white pt-[20%] px-36 bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="text-lg py-6 w-1/4">{overview}</p>
            <div className="">
                <button className="text-black  bg-white p-4 px-12  text-xl  rounded-lg mx-2 hover:bg-opacity-80">Play</button>
                <button className="text-white bg-gray-500 p-4 px-12  text-xl  rounded-lg mx-2 bg-opacity-50 ">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle