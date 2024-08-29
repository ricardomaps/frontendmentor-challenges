import { useState } from 'react';
import './App.css'
import Comment from './components/Comment'
import Reply from './components/Reply'

const response = await fetch('data.json');
const data = await response.json();
const currentUser = data.currentUser;

export type comments = {
  id: number,
  content: string,
  createdAt: string,
  score: number,
  user: {
    image: {
      png: string
    },
    username: string
  }
  replies: comments[]
  replyingTo?: string
}

function App() {

  const repliesStyle = {
    width: "45vw", 
    paddingLeft: "5%", 
    borderLeft: "3px solid var(--light-gray)",
  }
  const [comments, setComments] = useState(data.comments);

  const findComment = (commentsToSearch: comments[], id: number, commentUnder?: number): comments => {
    if(!commentUnder){
      const index = commentsToSearch.findIndex((comment: comments) => comment.id == id);
      return commentsToSearch[index]
    }else{
      const indexComment = commentsToSearch.findIndex((comment: comments) => comment.id == commentUnder);
      const indexReply = commentsToSearch[indexComment].replies.findIndex((reply: comments) => reply.id == id);
      return commentsToSearch[indexComment].replies[indexReply]
    }
  }

  const editComment = (id: number, content: string, commentUnder?: number) => {
    const newComments = comments;
    const commentToEdit = findComment(newComments, id, commentUnder);
    commentToEdit.content = content;
    setComments(newComments)
  }

  const addComment = (content: string, commentUnder?: number, replyingTo?: string) => {
    if(content == ""){
      return
    }
    const newComments: comments[] = Array.from(comments);
    const newComment = {
      id: Math.floor(Math.random()*1000),
      content: content,
      score: 0,
      createdAt: "Just now",
      user: {
        image: {
          png: currentUser.image.png
        },
        username: currentUser.username
      },
      replies: [],
    };

    if(commentUnder){
      newComments[newComments.length-1].replyingTo = replyingTo;
      const replyingToIndex = newComments.findIndex((comment: comments) => comment.id == commentUnder);
      newComments[replyingToIndex].replies.push(newComment);
    }else{
      newComments.push(newComment);
    }
    setComments(newComments);
    
  }

  const deleteComment = (id: number, commentUnder?: number) =>{
    const newComments: comments[] = Array.from(comments);
    if(!commentUnder){
      const index = comments.findIndex((comment: comments) => comment.id == id);
      newComments.splice(index, 1);
      setComments(newComments) 
    }else{
      const indexComment = newComments.findIndex((comment: comments) => comment.id == commentUnder);
      const indexReply = newComments[indexComment].replies.findIndex((reply: comments) => reply.id == id);
      newComments[indexComment].replies.splice(indexReply, 1);
      setComments(newComments)
    }
  }

  return (
    <>
      { comments.map((comment: comments, index: number) => {
        return(
          <div key={comment.id} style={{marginTop: index == 0 ? "20px" : "0px"}}>
            <Comment onEdit={editComment} onReply={addComment} currentUser={currentUser} comment={comment} onDelete={deleteComment}/>
              <div style={{paddingLeft: "5%"}}>
                <div style={repliesStyle}>
                    {comment.replies.map((reply) => {
                      return (<Comment onEdit={editComment} onReply={addComment} commentUnder={comment.id}  key={reply.id}  currentUser={currentUser} comment={reply} onDelete={deleteComment}/>)
                    })}
                </div>
              </div>
          
          </div>
        )
      })}
      <Reply avatar={'src/assets/' + data.currentUser.image.png} isReply={false} onAddComment={addComment}/>
    </>

  )
}

export default App
