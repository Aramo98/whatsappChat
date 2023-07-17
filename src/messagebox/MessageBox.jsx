import MessageItem from '../messageitem/MessageItem'
import classes from './messagebox.module.css'

function MessageBox({TypedText,TypedVoice}) {
    return(
        <>
        <div className={classes.messagebox}>
            {
        TypedText.map((typing)=>{
            return(
                <MessageItem 
            typing={typing}
            key={typing.id}
            HourDate={new Date().getHours()}
            MinuteDate={new Date().getMinutes()}
            />
            )
        })
            },
            {
                TypedVoice.map((voice)=>{
                    return (
                        <MessageItem 
                       voice={voice}
                       voiceKey = {voice.voiceID}
                       HourDate={new Date().getHours()}
                       MinuteDate={new Date().getMinutes()}
                        />
                    )
                })
            }
        </div>
        </>
    )
}

export default MessageBox