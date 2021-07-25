import React, {Component, useReducer} from 'react'


class About extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            isLoaded: false,
            learnMoreVisible: false
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
            learnMoreVisible: !this.state.learnMoreVisible
        })

    }

    render() {

        var {isLoaded, user, learnMoreVisible} = this.state

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else{

        return (
        <div className='About-box'>
            <p className='About'>About</p>

            <p className='about-user'>{user.about}</p>

            <div className='skills'>
                {user.skills.map((skill) => (
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'lightblue', borderRadius:'5px', color:'blue', padding:'1px'}}>
                        {skill}
                    </div>
                ))}
            </div>
            <div className='learn-but-box'>
                <button onClick={this.handleClick} className='learn-more'>LEARN MORE</button>
                <p style={{display:learnMoreVisible ? "block" : "none", background:'white', border: '2px solid black', height:'35px', position:'relative', width:'95vw', fontWeight:'400'}}>More information displayed here.</p>
            </div>
        </div>
        )
    }
}
}

export default About