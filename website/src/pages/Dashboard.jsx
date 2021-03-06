import React from 'react'
import Header from '../components/Header';
import DepositList from './DepositList'
import NavBar from '../components/NavBar.jsx'
import { Grid } from '@material-ui/core';
import DashboardBody from '../components/DashboardBody'
import RolesList from '../components/RolesList';
import RoleCreation from '../components/RoleCreation';
import DepositListItem from './DepositListItem';
import { CustomerBody } from '../components/CustomerBody';
import RolepageCreate from './RolepageCreate';

export const PAGES = {
    DEPOSITS: 0,
    DASHBOARD: 1,
    ROLEPAGE: 2,
    ROLEPAGECREATE: 3,
    DEPOSITLISTITEM: 4,
    CUSTOMER: 5
}
export default class Dashboard extends React.Component {
    state = {
        user: true,
        currentPage: PAGES.DASHBOARD
    }

    handleChangePage = (page) => {
        console.log(page)
        this.setState({ currentPage: page })
    }

    render() {
        return this.state.user === true ? (
            <>
                <Header loggedIn={true} changePage={this.handleChangePage}/>
                <div style={styles.body}>
                    <NavBar admin={this.props.admin} changePage={this.handleChangePage} />
                    <Grid container style={{ height: '100%', overflowY: 'auto' }}>
                        <Grid item xs={12}>
                            {this.state.currentPage === PAGES.DASHBOARD && <DashboardBody />}
                            {this.state.currentPage === PAGES.DEPOSITS && <DepositList changePage={this.handleChangePage} />}
                            {this.state.currentPage === PAGES.DEPOSITLISTITEM && <DepositListItem />}
                            {this.state.currentPage === PAGES.CUSTOMER && <CustomerBody />}
                            {this.state.currentPage === PAGES.ROLEPAGE && <RolesList change={this.handleChangePage}/>}
                            {this.state.currentPage === PAGES.ROLEPAGECREATE && <RolepageCreate change={this.handleChangePage}/>}
                        </Grid>
                    </Grid>
                </div>
            </>
        ) : (
                <div></div>
            );
    }
}

const styles = {
    body: {
        display: 'flex',
        minHeight: '89%',
        width: '100%',
        flex: 'auto'
    }
}