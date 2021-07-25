import {Link} from 'react-router-dom'

const Grid = () => {
    return (<div>
        <p className='page'> This is the Grid page.</p>
        <Link to='/' className='home-link'>Home</Link>
    </div>
    )
}

export default Grid