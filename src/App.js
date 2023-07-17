import classes from'./App.module.css'
import Form from './form/Form';
import MessageBox from './messagebox/MessageBox';
import { useState } from 'react';
import BackImage from '../src/image/jt4AoG.webp'
function App() {
  const [messageText,setMessageText] = useState([])
  const [getVoices,setGetVoices] = useState([])
  return (
    <div className={classes.container}>
     <div className={classes.phone} >
     <img src={BackImage} alt="background" />
      <MessageBox 
      TypedText = {messageText}
     TypedVoice = {getVoices}
      />

      <Form AddingText = {(text)=>{
        setMessageText([
          ...messageText,
          {
            id:Math.random(),
            text:text,
           HourDate:   new Date().getHours(),
           MinuteDate: new Date().getMinutes(),
          }
        ])
      }}
      AddingVoice = {(voice)=>{
        setGetVoices([
          ...getVoices,
          {
            voiceID:Math.random(),
            voice:voice,
            HourDate:   new Date().getHours(),
           MinuteDate: new Date().getMinutes(),
          }
        ])
      }}
      
      />
     </div>
    </div>
  );
}

export default App;
