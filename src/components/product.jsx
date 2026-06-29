import {Link} from 'react-router-dom'
function Product() {
    return <div>
        <h1 className="text-[50px]">Product Page</h1>
        <Link className='pl-[10px]' to={'/men'}>Men's Collection</Link>
        <br></br>
        <Link className='pl-[10px]' to={'/women'}>Women's Collection</Link>

    </div>
}
export default Product