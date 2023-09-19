import { useState } from "react";
import Link from "../Link/Link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
const Nav = () => {

    const [open, setopen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Not Found', path: '/404' },
      ];


    return (
        <nav className="m-10">
            
            <div className="md:hidden text-xl font-bold text-black" onClick={() => setopen(!open)}>
                {
                   open === true ? 
                   <AiOutlineClose></AiOutlineClose> 
                   : <AiOutlineMenu></AiOutlineMenu>
                }

              
            </div>
            <ul className={
                `bg-yellow-400 p-6 md:flex gap-10 absolute duration-1000 px-6 md:static hover:bg-yellow-500
                ${open? 'top-16 left-14' : '-top-60 left-14'}
                ` }>
            {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default Nav;