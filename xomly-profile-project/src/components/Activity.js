import React, {Component, useReducer} from 'react'
import { useParams } from 'react-router-dom'

class Activity extends Component {

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
            <div className='Activity'>
               <p>Recent Activity</p>
               <p>{user.recentActivity.map((activity) => (
                   <p>{activity.date} {activity.details}</p>
                ))}
                </p>
               <button>ALL ACTIVITIES</button>
            </div>
        )
    }
}
}

export default Activity