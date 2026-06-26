
import {Link} from 'react-router-dom'
function Navbar(){
    return <div>
        <div className="flex items-center justify-between bg-black">
            <div className="h-[60px] w-[150px] flex items-center justify-center">
                <h1 className="text-[white]">Drafter</h1>
            </div>
            <div className="h-[60px] w-[350px] flex items-center justify-center gap-x-[30px] text-[white]">
                <Link to= {'/'}>Home</Link>
                <Link to= {'/about'}>About</Link>
                <Link to= {'/contact'}>Contact</Link>
                
                
            </div>
           
        </div>
    </div>
}
export default Navbar