import React, {Component, Fragment, useReducer} from 'react'


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

        var activityIcons = {
            'calendar' : 'https://preview.pixlr.com/images/800wm/100/1/1001503340.jpg',
            'briefcase' : 'https://media.istockphoto.com/vectors/briefcase-icon-vector-flat-briefcase-symbol-illustration-vector-vector-id1176590128',
            'check-circle' : 'https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-check-mark-circle-thin.png',
            'credit-card' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaW-awAWbkIj0kt7d1oy1-oFsI4FmwGmoyw&usqp=CAU'
        }

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else{

        return (
            <div className='Activity'>
               <p>Recent Activity</p>
               <div>
                    {user.recentActivity.map((activity) => (
                        <div>
                            <img src={activityIcons[activity.icon]} height="25px" width="25px"/> 
                            {activity.date} <b>{activity.details}</b>
                        </div>
                    ))}
                </div>
               <button>ALL ACTIVITIES</button>
            </div>
        )
    }
}
}

export default Activity