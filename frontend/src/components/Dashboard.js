import React, { Component } from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Employee from './employee/Employee'
import Employees from './employee/Employees'
import NavInput from './NavInput'


class Dashboard extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="dashboard">
                <NavBar />
                <Switch>
                    <Route path="/signup"/>
                    <Route path="/signin"/ component={NavInput}>
                    <Route path="/employees/:id" render={(routerProps) => <Employee employees={this.props.employees}/>}/>
                    <Route path="/employees" render={(routerProps) => <Employees employees={this.props.employees}/> } />
                </Switch>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel magna velit. Proin condimentum urna a laoreet rutrum. Nunc mollis vitae justo sit amet vestibulum. Ut eget nunc nec purus mattis placerat. Suspendisse semper rhoncus volutpat. Donec sodales aliquam consequat. Fusce dapibus libero non nulla pretium, ac finibus urna blandit. Sed ut arcu in turpis consectetur mattis. Sed vitae velit laoreet, porttitor turpis vitae, viverra est. Integer quis imperdiet tellus, at ornare leo.
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps)(Dashboard)