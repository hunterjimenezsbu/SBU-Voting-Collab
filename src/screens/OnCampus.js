import React, { Component } from 'react'
import {Button} from 'react-materialize';
export default class Menu extends Component {
    render() {
        return (
            <div className = "buttonHolder">
              <p id="p">Would you like to register to vote with a on campus address?</p>
                <Button id = "OnCampus" className = "menuButton" onClick = {(e)=>this.props.changeScreen('OnCampusForm')}>Yes</Button>
                <Button id = "OffCampus" className = "menuButton" onClick = {(e)=>this.props.changeScreen('registerToVote')}>No</Button>
                
        )
    }
}
