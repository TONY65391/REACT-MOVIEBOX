import Header from "../components/Header";
import { Link } from "react-router-dom";
function Landing(){
    return(
        <div className={`min-w-full min-h-screen bg-[url('https://images.pexels.com/photos/7991264/pexels-photo-7991264.jpeg')] bg-cover text-white`}>
            <Header />

            <div className="text-center md:text-left min-h-screen flex items-center justify-center flex-col px-5 md:px-10">
                <h1 className="mr-auto w-full">Stream Smarter. Watch Everything.</h1>
                <h2 className="mr-auto">Your all-in-one MovieBox app for movies, series, trailers, and personalized recommendations — all in one beautifully simple interface.</h2>
                <p className="mr-auto">Discover trending titles, explore top charts, create watchlists, and enjoy a seamless viewing experience across all your devices. <br />MovieBox puts the world of entertainment right at your fingertips.</p>

                <div className="mr-auto mt-5 flex gap-3 items-center w-fit mx-auto md:w-full">
                    <Link className="border-2 border-fuchsia-900 hover:bg-transparent py-2 px-5 rounded-lg bg-fuchsia-900">Start Watching Now</Link>
                    <Link className="border-2 border-fuchsia-900 hover:bg-fuchsia-900 py-2 px-5 rounded-lg">Contact Developer</Link>
                </div>
            </div>
        </div>
    )
};
export default Landing;