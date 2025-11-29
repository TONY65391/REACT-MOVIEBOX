import { Link } from "react-router-dom";

function Hero(){
    return(
        <div className="z-5 text-center md:text-left min-h-screen pt-20 md:w-3/4 flex items-center justify-center flex-col px-5 md:px-10">
            <h1 className="mr-auto w-full">Stream <span className="px-3 rounded-4xl bg-fuchsia-900 font-bold">Smarter</span>. Watch <span className="px-3 rounded-4xl bg-fuchsia-900 font-bold">Everything</span>.</h1>
            <h2 className="mr-auto text-gray-200">Your all-in-one MovieBox app for movies, series, trailers, and personalized recommendations — all in one beautifully simple interface.</h2>
            <p className="mr-auto text-gray-200 md:w-3/4">Discover trending titles, explore top charts, create watchlists, and enjoy a seamless viewing experience across all your devices. <br />MovieBox puts the world of entertainment right at your fingertips.</p>

            <div className="mr-auto mt-5 flex gap-3 items-center w-fit mx-auto md:w-full">
                <Link className="border-2 border-fuchsia-900 hover:bg-fuchsia-700 hover:border-fuchsia-700 py-2 px-5 rounded-lg bg-fuchsia-900">Start Watching Now</Link>
                <Link className="border-2 border-fuchsia-900 hover:bg-fuchsia-700 hover:border-fuchsia-700 py-2 px-5 rounded-lg">Contact Developer</Link>
            </div>
        </div>
    )
}
export default Hero;