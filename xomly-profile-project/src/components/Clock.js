import {Link} from 'react-router-dom'

const Clock = () => {
    return (<div>
        <p className='page'> This is the Clock page.</p>
        <Link to='/' className='home-link'>Home</Link>
    </div>
    )
}

export default Clock