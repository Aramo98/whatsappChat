import classes from './form.module.css';
import {FaPaperclip,
        FaCamera,
        FaPaperPlane,
        FaMicrophone,
        FaFile,
        FaHeadphones,
      FaMapMarker,
        FaUser,
       FaChartBar,
        FaArtstation} from 'react-icons/fa';
import { useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
function Form({AddingText,AddingVoice}) {
  
    const [textChange,setTextChange] = useState("");
    const [open,setOpen] = useState(false)
    const [voices,setVoices] = useState("")

    const HandleChange = (evt) =>{
        evt.preventDefault();
      setTextChange(evt.target.value)
        AddingText(textChange);
        setTextChange("");
    }

    const HandleSpeak = (evt)=>{
      evt.preventDefault()
AddingVoice(voices);
SpeechRecognition.startListening();
setVoices([])
    }

const opening = (evt)=>{
evt.preventDefault()
setOpen(!open)
}

const Handle = (evt)=>{
  setTextChange(evt.target.value);
}


const { listening,  browserSupportsSpeechRecognition} = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return 
  }
    return(
        <>
        <div className={classes.formBox}>
        <div style={open? {clipPath:"circle(141.4% at 100% 100%)"}:{clipPath:"circle(0.0% at 100% 100%)"}} className={classes.iconsBlock}>
                <div className={classes.icons}>
                  <span><FaFile /></span>  
                  <p>Документ</p>
                   </div>


                  <div className={classes.icons} onClick={()=>{
                    alert("")
                  }}>
                    <span><FaCamera /></span>
                    <p>Камера</p>
                    </div>
                  <div className={classes.icons}>
                    <span><FaHeadphones /></span>
                    <p>Аудио</p>
                    </div>
                  <div className={classes.icons}>
                    <span><FaMapMarker /></span>
                    <p>Местоположение</p>
                    </div>
                  <div className={classes.icons}>
                    <span><FaUser /></span>
                    <p>Контакты</p>
                    </div>
                  <div className={classes.icons}>
                    <span><FaChartBar /></span>
                    <p>Опрос</p>
                  </div>
                  <div className={classes.icons}>
                    <span><FaArtstation /></span>
                    <p>Галерея</p>
                    </div>
                </div>
            <form> 
              <div className={classes.inputBox}>
                {<textarea value={textChange}  onChange={Handle} placeholder='Type Message'/> || <div className={classes.voices}>{listening?"yes":"no"}</div>}
              <div className={classes.buttongroup} style={textChange?{transform:"translateX(40px)"}:{transform:"translateX(0)"}}>
         
                   <button onClick={opening}><FaPaperclip /></button>
                    <button onClick={(evt)=>evt.preventDefault()}><FaCamera /></button>
                </div>
              </div>
                



                <div className={classes.buttonTypes}>
                    {textChange?
                    <button className={classes.Send} onClick={HandleChange}><FaPaperPlane /></button>
                    :
                    <button className={classes.Speak} onClick={HandleSpeak}><FaMicrophone /></button>}</div>
     
            </form>
        </div>
        </>
    )
}

export default Form