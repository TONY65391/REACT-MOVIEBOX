import Header from "../components/Header";
import Hero from "../components/Hero";
function Landing(){
    return(
        <div className={`backdrop-blur-sm min-w-full min-h-screen bg-[url('https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg')] bg-cover text-white`}>
            <Header />
            <Hero />
        </div>
    )
};
export default Landing;