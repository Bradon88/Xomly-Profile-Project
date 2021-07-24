import {Link} from 'react-router-dom'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import WorkIcon from '@material-ui/icons/Work';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import GridOnIcon from '@material-ui/icons/GridOn';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Footer = () => {
    return <div className='Footer'>
        <Link to='/clock' className='foot-icon'>
            <QueryBuilderIcon />
        </Link>

        <Link to='/briefcase' className='foot-icon'>
            <WorkIcon />
        </Link>

        <Link to='/checklist' className='foot-icon'>
            <PlaylistAddCheckIcon />
        </Link>

        <Link to='/grid' className='foot-icon'>
            <GridOnIcon />
        </Link>

        <Link to='/arrow' className='foot-icon'>
            <ArrowUpwardIcon />
        </Link>
    </div>
}

export default Footer