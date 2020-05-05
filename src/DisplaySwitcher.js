import React, { Component } from 'react'
import Menu from './screens/MenuScreen';
import VoterStatusScreen from './screens/VoterStatusScreen';
import AbsenteeScreen from './screens/AbsenteeScreen';
import ChatScreen from './screens/ChatScreen';
import RegisterScreen from './screens/RegisterScreen';
import OnCampus from './screens/OnCampus'
import {Button, Icon} from 'react-materialize';
export default class DisplaySwitcher extends Component {
    constructor(props) {
        super(props);
        // first method
        this.state = {page: 'menu'}
      }
    changeScreen = (pagename) =>{
        console.log("Change Screen called to " + pagename);
        this.setState({page: pagename});
    }

    render() {
        if(this.state.page === 'voterStatus'){
            console.log("Loading VoterStatus screen");
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <VoterStatusScreen/>
                </div>
            )
        }
        else if(this.state.page === 'registerToVote'){
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <RegisterScreen/>
                </div>
            )
        }
        else if(this.state.page === 'absenteeVoting'){
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <AbsenteeScreen/>
                </div>
            )
        }
        else if(this.state.page === 'OnCampus'){
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <AbsenteeScreen/>
                </div>
            )
        }
        else if(this.state.page === 'chat'){
            return(
                <div>
                    <Button className = "homeButton" onClick = {(e)=>this.changeScreen("menu")}><Icon>arrow_back_ios</Icon></Button>
                    <ChatScreen/>
                </div>
            )
        }else{
            console.log("Loading Menu screen");
            return (
                <div>
                    <Menu changeScreen={this.changeScreen}/>
                </div>
            )
        }
    }
}
