
import {Link} from 'react-router-dom'
function Navbar(){
    return <div>
        <div className="flex items-center justify-between bg-black">
            <div className="h-[60px] w-[150px] flex items-center justify-center">
                <h1 className="text-[white] text-[30px] ">Drafter</h1>
            </div>
            <div className="h-[60px] w-[400px] flex items-center justify-center gap-x-[30px] text-[white]">
                <Link to= {'/'}>Home</Link>
                <Link to= {'/about'}>About</Link>
                <Link to= {'/contact'}>Contact</Link>
                <Link to={'/product'}>Products</Link>
                <Link to={'/cources'}>Cources</Link>
                
                
            </div>
           
        </div>
    </div>
}
export default Navbar