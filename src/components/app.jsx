import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

//import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder } from '../actions';
import '../App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {
        console.log('this', this);
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id){
        console.log('delete pressed',`delete reminder with id ${id}`);
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        console.log("current reminders",reminders);
        return(
            <ul className="list-group col-sm-4">
                { 
                    reminders.map(reminder => {
                        return(
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                                <div 
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        );

    }

    render(){


        return(
            
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            placeholder="I have to ..."
                            onChange={event => this.setState({text: event.target.value}) }
                        />
                        <input 
                            className="form-control"  
                            type="datetime-local"
                            onChange={event =>this.setState({dueDate: event.target.value})}
                        />
                     
                        <button 
                            type="button"
                            className="btn btn-success"
                            onClick={() => this.addReminder()}
                        >
                                Add Reminder 
                        </button>
                    </div>
                </div>
                   { this.renderReminders() }
            </div>
        );
    }
}


// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addReminder}, dispatch);
// }

//export default connect(null, mapDispatchToProps)(App);

function mapStateToProps(state){
    
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);