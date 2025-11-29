import logo from '../images/tondev_logo.png'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className='flex items-center justify-between px-5 md:px-10 absolute top-0 w-full'>
            <div className='w-3/15 md:w-2/20'>
                <img className='w-full' src={logo} alt="TonDev's Logo" />
            </div>

            <div className='flex items-center gap-5'>
                <Link className='px-5 py-2 rounded-md bg-fuchsia-900 border-2 border-fuchsia-900 hover:bg-transparent' to={`/signup`}>Signup</Link>
                <Link className='px-5 py-2 rounded-md border-2 border-fuchsia-900 hover:bg-fuchsia-900' to={`/login`}>Login</Link>
            </div>
        </header>
    )
}
export default Header;