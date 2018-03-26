import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import clients from '../../api/mockData'
import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';
import { isAdmin } from '../../selectors';
import ToLogin from '../../components/ToLogin';

const style = {
    card: {
        minWidth: '100vw'
    }
};

class Info extends Component {
    constructor(props){
        super(props);
        this.state = {
            clients: clients
        }
    }

    render(){
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
                        <Card className={style.card}>
                            <CardHeader
                                title="Admin"
                                subtitle="this is admin"
                                actAsExpander={false}
                                showExpandableButton={false}
                                className={style.card}
                            />

                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
};

export default Info;