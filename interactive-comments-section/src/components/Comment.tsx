import { useState, useRef, ChangeEvent, useEffect } from "react";
import type {comments} from '../App.tsx'
import Modal from './Modal.tsx'
import SideBar from "./Sidebar.tsx";
import Reply from "./Reply.tsx";
import './Comment.css'

type props = {
    comment: comments,
    currentUser: {
        username: string,
        image: {
            png: string
        }
    }
    onDelete: (id: number, commentUnder?: number) => void,
    onEdit: (id: number, content: string, commentUnder?: number,) => void,
    onReply: (content: string, commentUnder?: number, replyingTo?: string) => void,
    commentUnder?: number
}

export default function Comment({currentUser, comment, onDelete, onEdit, commentUnder, onReply}: props) {

    const [modalOpen, setModalOpen] = useState(false);
    const [replying, setReplying] = useState(false);
    const [editing, setEditing] = useState(false);

    const [content, setContent] = useState(comment.content);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(()=>{
        if(!editing) return
        const length = textAreaRef.current?.value.length
        textAreaRef.current?.focus()
        textAreaRef.current?.setSelectionRange(length, length);
    },[editing])

    const changeContentHandler = (event: ChangeEvent<HTMLTextAreaElement>) =>{
        setContent(event.target.value);
    }

    const onConfirmDelete = () => {
        onDelete(comment.id, commentUnder)
        setModalOpen(false);
    }

    const onCancelDelete = () => {
        setModalOpen(false);
    }
    
    const onReplyTo = (content: string, commentUnder?: number, replyingTo?: string) => {
        onReply(content, commentUnder, replyingTo);
        setReplying(false);
    }

    const onEditing = () => {
        onEdit(comment.id, content, commentUnder);
        setEditing(false);
    }
    
    const openModal = () => {
        setModalOpen(true);
    }

    const replyJsx = (
        <div className="reply-btn" onClick={() => setReplying(true)}>
            <svg width={14} height={13} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                fill="#5357B6"
            />
            </svg>
            <span style={{marginLeft: "5px"}}>Reply</span>
        </div> 
    )

    const deleteEditJsx = (
        <>
            <div onClick={openModal} className="delete-btn">
                <svg width={12} height={14} xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                                fill="#ED6368"
                            />
                </svg>
                <span style={{marginLeft: "5px"}}>Delete</span>
            </div>
            <div onClick={() => setEditing(true)} className="edit-btn">
                <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg">
    <path
        d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
        fill="#5357B6"
    />
                </svg>
                <span style={{marginLeft: "5px"}}>Edit</span>
            </div>
            
        </>
   
    )

    const userTagJsx = (
        <span className="you-tag">you</span>
    )

    return (
        <>
            <div className = "comment-wrapper">
                <Modal open={modalOpen} onCancelDelete={onCancelDelete} onConfirmDelete={onConfirmDelete}/>
                <SideBar likes={comment.score}/>
                <div className="comment-body">
                    <div className = "comment-header">
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img src={"src/assets/" + comment.user.image.png}/>
                            <p className="username">{comment.user.username}</p>
                            {currentUser.username === comment.user.username ? userTagJsx : ""}
                            <p className="time-ago">{comment.createdAt}</p>
                        </div>
                        <div className="reply-edit-section">
                            {currentUser.username === comment.user.username ? deleteEditJsx : replyJsx}                     
                        </div>
                    </div>
                    {editing ? (
                        <div className="update-section">
                            <textarea ref={textAreaRef} value={content} onChange={changeContentHandler}></textarea>
                            <button onClick={onEditing} className="btn-update">Update</button>
                        </div>
                    ) 
                    :
                    (<p className="comment-text">
                        {comment.replyingTo ? (<span className="user-tag">{"@"+comment.replyingTo}</span>) : ""}
                        {comment.content}
                    </p>)}
                </div>
            </div>
            {replying ? <Reply replyingTo={comment.user.username} commentUnder={commentUnder ? commentUnder : comment.id} onAddComment={onReplyTo} avatar={"src/assets/" + currentUser.image.png} isReply={true}/> : ""} 
        </>
    )
}