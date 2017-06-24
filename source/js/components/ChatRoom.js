import React, { Component } from 'react'

class ChatRoom extends Component {

  constructor() {
    super()
    this.state = {
      messages: [],
    }
    this.ws = null
    this.initSocket = this.initSocket.bind(this)
  }

  componentDidMount() {
    this.initSocket()
  }

  initSocket() {
    this.ws = new WebSocket('ws://localhost:8080')
    this.ws.onmessage = (msg) => {
      const tempMessages = this.state.messages
      tempMessages.push(msg.data)
      this.setState({
        messages: tempMessages,
      })
    }
  }

  sendMessage(message) {
    this.ws.send(JSON.stringify(message))
  }

  render() {
    return (
      <div>
        <h3>Chat</h3>
        <pre>
          {this.state.messages.join('\n')}
        </pre>
      </div>
    )
  }
}

export default ChatRoom
