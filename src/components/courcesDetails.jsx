import { useParams } from "react-router-dom"

function Details() {

    const params = useParams()
    console.log(params.id)
    return <div>
        <h1 className="text-[50px]">{params.id} Cources Details</h1>
    </div>
}
export default Details