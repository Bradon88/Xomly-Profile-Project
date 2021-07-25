import {Link} from 'react-router-dom'

const Arrow = () => {
    return (<div>
        <p className='page'> This is the Arrow page.</p>
        <Link to='/' className='home-link'>Home</Link>
    </div>
    )
}

export default Arrow