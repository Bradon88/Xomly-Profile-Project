import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={Main} />

        <Route path='/add' component={Header} />
        <Route path='notification' component={Header} />
        <Route path='profile' component={Header} />

        <Route path='/facebook' component={Share} />
        <Route path='/pinterest' component={Share} />
        <Route path='/twitter' component={Share} />
        <Route path='linkedin' component={Share} />

        <Route path='clock' component={Footer} />
        <Route path='briefcase' component={Footer} />
        <Route path='checklist' component={Footer} />
        <Route path='grid' component={Footer} />
        <Route path='arrows' component={Footer} />
    </Switch>
)