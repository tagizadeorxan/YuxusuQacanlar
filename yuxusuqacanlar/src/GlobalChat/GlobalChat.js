import React from 'react';
import './globalchat.css';

import { Button, withStyles } from '@material-ui/core';
const firebase = require("firebase");

// I need to investigate why sometimes
// two messages will send instead of just
// one. I dont know if there are two instances
// of the chat box component or what...

// I will be using both .then and async/await
// in this tutorial to give a feel of both.





  
class GlobalChat extends React.Component {

 state = {value:'',chat:[]}

componentDidMount(){
    this.showGlobalChat();
}

componentDidUpdate() {
  this.showGlobalChat();
  
}


    submitMessage = () => {
   
        firebase
          .firestore()
          .collection('globalchat')
          .doc('Q6Y265wfQUN8JetGhkLt')
          .update({
            messages: firebase.firestore.FieldValue.arrayUnion({
              sender: 'anonim',
              message: this.state.value,
              timestamp: Date.now()
            }),
            receiverHasRead: false
          });
          this.setState({value:''});
      }

 showGlobalChat = () => {
 const globalchat=  firebase
.firestore()
.collection('globalchat').
doc('Q6Y265wfQUN8JetGhkLt').get().then(data =>{
  let chat = [];
   data.data().messages.forEach(doc => {
       chat.push(doc.message);
    });
    this.setState({chat})
  })


}

  valueInput = (e) => {
        this.setState({value: e.target.value})
  }
keyHandle = (e) => {
  if(e.key === 'Enter') {
    this.setState({value: e.target.value},this.submitMessage);
  }
}
  

    render() {
      let {chat} = this.state;
        return(
           <>
           <input value={this.state.value} onKeyPress={this.keyHandle}  onChange={this.valueInput}></input>
           <button onClick={this.submitMessage}>submit message</button>
           <div className="chat">
           {chat.slice(0).reverse().map((item,i)=> <p key={i}>{item}</p>)}
           </div>
           </>
        )
    }
}

export default GlobalChat;


