import {Link} from 'react-router-dom'

const Profile = () => {
    return (<div>
        <p className='page'> This is the Profile page.</p>
        <Link to='/' className='home-link'>Home</Link>
    </div>
    )
}

export default Profile