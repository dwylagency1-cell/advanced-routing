import { useNavigate } from "react-router-dom"
function Navhome() {
    const Navigate = useNavigate()

    function NavigateHome() {
        Navigate('/')
    }
    return <div >
        <button className="bg-black text-[white] pt-[10px] pb-[10px] pl-[30px] pr-[30px] ml-[10px] rounded-[10px] cursor-pointer" onClick={NavigateHome}>Return to Home</button>
    </div>
}
export default Navhome