import {Link} from 'react-router-dom'

const Briefcase = () => {
    return (<div>
        <p className='page'> This is the Briefcase page.</p>
        <Link to='/' className='home-link'>Home</Link>
    </div>
    )
}

export default Briefcase