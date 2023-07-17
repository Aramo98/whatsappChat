import classes from './messageItem.module.css'


function MessageItem({typing,voice}){
return (
    <>
    <div className={classes.messageListItem}>

    { <span >{typing.text}</span>||<audio controls src={voice.voice}></audio>}
   
    <p>{typing.HourDate}:{typing.MinuteDate}</p>
    </div>
    
    </>
)
}

export default MessageItem