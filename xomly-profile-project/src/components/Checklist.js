import {Link} from 'react-router-dom'

const Checklist = () => {
    return (<div>
        <p className='page'> This is the Checklist page.</p>
        <Link to='/' className='home-link'>Home</Link>
    </div>
    )
}

export default Checklist