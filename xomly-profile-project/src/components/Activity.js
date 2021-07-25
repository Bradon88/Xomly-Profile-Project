import React, {Component, Fragment, useReducer} from 'react'


class Activity extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            isLoaded: false,
            activityVisible: false
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

    handleClick = () => {
        this.setState({
            activityVisible: !this.state.activityVisible
        })
    }

    render() {

        var {isLoaded, user, activityVisible} = this.state

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
            <div className='Activity-box'>
               <p className='recent-activity'>Recent Activity</p>
               <div>
                    {user.recentActivity.map((activity) => (
                        <div style={{paddingLeft:'5px'}}>
                            <img src={activityIcons[activity.icon]} height="25px" width="25px"/> 
                            {activity.date} <b>{activity.details}</b>
                        </div>
                    ))}
                </div>
                <div className='activity-but-box'>
                    <button onClick={this.handleClick} className='activity-button'>ALL ACTIVITIES</button>
                    <p style={{display:activityVisible ? 'block' : 'none', background:'white', border: '2px solid black', position:'relative', width:'95vw', height:'35px', fontWeight:'400'}}>All activities displayed here.</p>
               </div>
            </div>
        )
    }
}
}

export default Activity