import React, {Component} from 'react';

import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
import { isAdmin } from '../../selectors';


import {Card, CardHeader, CardText} from 'material-ui/Card';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import ToLogin from '../../components/ToLogin';
import { getClientById } from '../../selectors';
import clients from '../../api/mockData'


const style = {
    table: {
        height: '300px'
    },
    button: {
        fontSize: 16,
        padding: '0 30px'
    }
};

class Client extends Component {
    constructor(props){
        super(props);
        const clientId = this.props.params.id;
        this.state = {
            client: getClientById(clients, clientId)
        }
    }



    render(){
        console.log('this.state.client', this.state.client);

        const condition = isAdmin('password_1', <ToLogin />);
        return(
            <div>
                {condition}
                <TopBar />

                <div className="admin-wrapper">
                    <div className="admin-left">
                        <NavBar />
                    </div>
                    <div className="admin-right">
                        <Card >
                            <CardHeader

                                title={`${this.state.client.name}`}
                                subtitle={`${this.state.client.email}
                                ${this.state.client.tel}`}
                            />
                            <CardText
                                expandable={false}>
                                {this.state.client.comment}
                                <Table className={style.table}
                                       fixedHeader={true}>
                                    <TableHeader displaySelectAll={false}
                                                 adjustForCheckbox={false}
                                                 enableSelectAll={false}>
                                        <TableRow>
                                            <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
                                                CHAT
                                            </TableHeaderColumn>
                                        </TableRow>
                                        <TableRow>
                                            <TableHeaderColumn>ID</TableHeaderColumn>
                                            <TableHeaderColumn>Name</TableHeaderColumn>
                                            <TableHeaderColumn>Message</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody displayRowCheckbox={false}>
                                        {
                                            this.state.client.dialog.map(client => {
                                                return (

                                                    <TableRow
                                                        key={client.id}
                                                    >

                                                        <TableRowColumn>{client.id}</TableRowColumn>
                                                        <TableRowColumn>{client.userName}</TableRowColumn>
                                                        <TableRowColumn>{client.message}</TableRowColumn>

                                                    </TableRow>

                                                )
                                            })
                                        }

                                    </TableBody>
                                </Table>
                            </CardText>
                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}

export default Client;
