import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <div className="navbar">
            <h1>Saad Ahmad</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">New Blog</Link>
            </div>
        </div>
    );
}

export default Navbar;

// function Navbar(){
//     return(
//         <nav className="navbar">
//             <h1>Saad Ahmad</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href = "/Create">New Blog</a>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

