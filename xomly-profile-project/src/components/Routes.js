import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from './Main'
import Add from './Add'
import Profile from './Profile'
import Bell from './Bell'
// import Share from './components/Share'
// import Footer from './components/Footer'

export default (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/add' component={Add} />
        <Route path='/bell' component={Bell} />
        <Route path='/profile' component={Profile} />

        {/* <Route path='/facebook' component={Share} />
        <Route path='/pinterest' component={Share} />
        <Route path='/twitter' component={Share} />
        <Route path='linkedin' component={Share} /> */}

        {/* <Route path='clock' component={Footer} />
        <Route path='briefcase' component={Footer} />
        <Route path='checklist' component={Footer} />
        <Route path='grid' component={Footer} />
        <Route path='arrows' component={Footer} /> */}
    </Switch>
)

