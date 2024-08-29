import { useState, useRef, useEffect, ChangeEvent } from 'react';

import './Reply.css'

export default function Reply({avatar, isReply, commentUnder, replyingTo , onAddComment}: {avatar: string, isReply?: boolean, commentUnder?: number, replyingTo?: string,  onAddComment: (content: string, commentUnder?: number, replyingTo?: string) => void}) {
    
    const [content, setContent] = useState("");
    const textAreaRef = useRef(null);

    useEffect(()=>{
        textAreaRef.current?.focus()
    }, [])

    const changeContentHandler = (event: ChangeEvent<HTMLTextAreaElement>) =>{
        setContent(event.target.value);
    }
    const addComment = () =>{
        if(!isReply){
            onAddComment(content);
        }else{
            onAddComment(content, commentUnder, replyingTo);
        }
        setContent("")
    }
    return (  
        <div className={`reply-section ${isReply ? "" : "comment"}`}>
            <img src={avatar}/>
            <textarea ref={textAreaRef} value={content} onChange={changeContentHandler} placeholder='Add a comment...' name="reply" id="reply"></textarea>
            <button onClick={addComment} className="btn-send">{isReply ? "reply" : "send"}</button>
        </div> 
    )
}