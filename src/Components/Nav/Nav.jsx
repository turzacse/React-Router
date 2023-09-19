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
        <nav className="mx-10">
            
            <div className="md:hidden text-xl font-bold text-black" onClick={() => setopen(!open)}>
                {
                   open === true ? 
                   <AiOutlineClose></AiOutlineClose> 
                   : <AiOutlineMenu></AiOutlineMenu>
                }

              
            </div>
            <ul className="md:flex gap-10">
            {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default Nav;