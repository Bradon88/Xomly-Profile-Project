import {Link} from 'react-router-dom'

const Facebook = () => {
    return (<div>
        <p className='page'> This is the Facebook sharing page.</p>
        <Link to='/' className='home-link'>Home</Link>
    </div>
    )
}

export default Facebook