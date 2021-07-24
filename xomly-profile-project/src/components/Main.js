import React, {Component} from 'react'
import Share from './Share';
import About from './About'
import Activity from './Activity';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            isLoaded: false
        }
    }

    componentDidMount () {
        fetch('https://raw.githubusercontent.com/xomly/profile-screen-test/master/api/users/4932.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    user: json
                })
            })
    
    }

    render() {

        var {isLoaded, user} = this.state

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else{

        return (
            <div className='Main'>
                <img className='main-pic'src='https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg'/>
               <p>{user.name}</p>
               <p>{user.position}</p>
                <Share />
                <About />
                <Activity />

            </div>
        )
    }
}
}

export default Main