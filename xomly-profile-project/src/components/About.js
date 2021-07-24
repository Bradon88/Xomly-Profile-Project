import React, {Component, useReducer} from 'react'


class About extends Component {

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
            <div className='About'>
                <p>About</p>
               <p>{user.about}</p>
               <p>{user.skills}</p>
               <button onClick>LEARN MORE</button>
            </div>
        )
    }
}
}

export default About