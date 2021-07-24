import {Link} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Share = () => {
    return <div className='share'>
      <Link to='/facebook' className='share-icon'>
        <FacebookIcon />
      </Link>

      <Link to='/pinterest' className='share-icon'>
        <PinterestIcon />
      </Link>

      <Link to='/twitter' className='share-icon'>
        <TwitterIcon />
      </Link>

      <Link to='/linkedin' className='share-icon'>
        <LinkedInIcon />
      </Link>
    </div>
}

export default Share