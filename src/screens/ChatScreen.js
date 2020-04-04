import React, { Component } from 'react'

export default class ChatScreen extends Component {
  render() {
    return (
      <div className = "padTop">
        <div><iframe src="https://app2.simpletexting.com/join/joinWebForm?webFormId=5d5597b70a975a7b92dd5fa8&c=USA" width = "400" height ="475" allowTransparency = "true"></iframe></div>
        <div><p className = "smallText">Complete this form or text "StonyBrookU" to 555-888 to begin receiving our texts.</p></div>
      </div>
    )
  }
}
