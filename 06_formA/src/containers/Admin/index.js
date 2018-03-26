import React, {Component} from 'react';
import {Link} from 'react-router';

import clients from '../../api/mockData'

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { isAdmin } from '../../selectors';
import { addNewClient } from '../../selectors';

import ToLogin from '../../components/ToLogin';
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';


class Admin extends Component {
constructor(props){
    super(props);
    this.state = {
        clients: clients,
        open: false,
        newName:'',
        newPhone:'',
        newEmail:'',
        newNameError:'',
        newPhoneError:'',
        newEmailError:'',
    }
}

    phoneValidation = (inputtxt) => {
    let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.match(phoneNumber)) {
        return true
    }
    else {
        return false
    }
    };

    isEmailAddress = (inputtxt) => {
        let email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(inputtxt.match(email)) {
            return true
        }
        else {
            return false
        }
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChangeNewName = (e) => {
        this.setState({
            newName: e.target.value
        });
    };

    handleChangeNewPhone = (e) => {
        this.setState({
            newPhone: e.target.value
        },
            ()=>console.log('the phone was changed')
        )

    };

    handleChangeNewEmail = (e) => {
        this.setState({
            newEmail: e.target.value
        },
            ()=>console.log('the Email was changed')
        );
    };

    handleSubmitNewUser = () => {

        if(!this.phoneValidation(this.state.newPhone)){
            this.setState({
                newPhoneError:'please enter correct phone number'
            });
        } else {
            this.setState({
                newPhoneError:''
            });
        };

        if(!this.isEmailAddress(this.state.newEmail)){
            this.setState({
                newEmailError:'please enter correct Email'
            });
        } else {
            this.setState({
                newEmailError:''
            });
        };

        if (this.phoneValidation(this.state.newPhone) &&
        this.isEmailAddress(this.state.newEmail)) {
            let newClient = {
                id: Date.now(),
                name: this.state.newName,
                email: this.state.newEmail,
                tel: this.state.newPhone
            };
            this.setState({
                clients: addNewClient(clients, newClient)
            });

            this.setState({
                newName:'',
                newPhone:'',
                newEmail:'',
                newNameError:'',
                newPhoneError:'',
                newEmailError:'',
            });
            this.handleClose();

        }

    };

    render(){
        console.log('clients', clients);
        console.log('newPhoneError', this.state.newPhoneError);
        console.log('newEmailError', this.state.newEmailError);
        console.log('this.isEmailAddress(this.state.newEmail)', this.isEmailAddress(this.state.newEmail));
        console.log('this.phoneValidation(this.state.newPhone)', this.phoneValidation(this.state.newPhone));


        const condition = isAdmin('password_1', <ToLogin />);

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                // keyboardFocused={true}
                onClick={this.handleSubmitNewUser}
            />,
        ];
    return(
        <div>
            {condition}
            <TopBar />

            <div className="admin-wrapper">
                <div className="admin-left">
                    <NavBar />
                </div>

                <div className="admin-right">
                    <div>
                        <Table >
                            <TableHeader displaySelectAll={false}
                                         adjustForCheckbox={false}
                                         enableSelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
                                    <TableHeaderColumn>Email</TableHeaderColumn>
                                    <TableHeaderColumn>Telephone</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {
                                    this.state.clients.map(client => {
                                        return (

                                            <TableRow
                                                rowNumber={+`${client.id}`}
                                                key={client.id}
                                                onClick={ ()=> console.log('--', 'clicked')}
                                            >

                                                <TableRowColumn><Link to={`/admin/clients/${client.id}`}>{client.id}</Link></TableRowColumn>
                                                <TableRowColumn><Link to={`/admin/clients/${client.id}`}>{client.name}</Link></TableRowColumn>
                                                <TableRowColumn><Link to={`/admin/clients/${client.id}`}>{client.email}</Link></TableRowColumn>
                                                <TableRowColumn><Link to={`/admin/clients/${client.id}`}>{client.tel}</Link></TableRowColumn>

                                            </TableRow>

                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <RaisedButton label="Add new" primary={true} fullWidth={true} onClick={this.handleOpen} />
                        <Dialog
                            title="Adding a new client"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <TextField
                                floatingLabelText="Name"
                                underlineShow={false}
                                type="text"
                                onChange={this.handleChangeNewName}
                                value={this.state.newName}

                            />
                            <Divider />
                            <TextField
                                floatingLabelText="Phone"
                                underlineShow={false}
                                type="number"
                                onChange={this.handleChangeNewPhone}
                                errorText={this.state.newPhoneError}
                                hintText="9261112233"

                            />
                            <Divider />
                            <TextField
                                floatingLabelText="E-mail"
                                underlineShow={false}
                                type="email"
                                onChange={this.handleChangeNewEmail}
                                errorText={this.state.newEmailError}
                                hintText="name@mail.ru"
                            />
                            <Divider />
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    )
    }
};

export default Admin;