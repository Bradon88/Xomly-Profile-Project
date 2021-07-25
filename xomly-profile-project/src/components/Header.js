import React from 'react';
import {Link} from 'react-router-dom'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (<div className='Header'>
        <Link to='/add' className='add'>
            <AddCircleOutlineIcon/>
        </Link>

        <p className='contact-details'>Contact Details</p>

        <Link to='/bell' className='bell'>
            <NotificationsIcon/>
        </Link>

        <Link to='/profile'>
        <img className='small-pic' src='https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg'/>
        </Link>
    </div>
    )
}

export default Header