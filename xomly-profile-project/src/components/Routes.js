import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from './Main'
import Add from './Add'
import Profile from './Profile'
import Bell from './Bell'
import Facebook from './Facebook'
import Pinterest from './Pinterest'
import Twitter from './Twitter'
import Linkedin from './Linkedin'
import Clock from './Clock'
import Briefcase from './Briefcase'
import Checklist from './Checklist'
import Grid from './Grid'
import Arrow from './Arrow'

export default (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/add' component={Add} />
        <Route path='/bell' component={Bell} />
        <Route path='/profile' component={Profile} />

        <Route path='/facebook' component={Facebook} />
        <Route path='/pinterest' component={Pinterest} />
        <Route path='/twitter' component={Twitter} />
        <Route path='/linkedin' component={Linkedin} />

        <Route path='/clock' component={Clock} />
        <Route path='/briefcase' component={Briefcase} />
        <Route path='/checklist' component={Checklist} />
        <Route path='/grid' component={Grid} />
        <Route path='/arrow' component={Arrow} />
    </Switch>
)

