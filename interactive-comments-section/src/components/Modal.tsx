import './Modal.css'

export default function Modal({ open, onCancelDelete, onConfirmDelete }: {open: boolean, onCancelDelete: () => void, onConfirmDelete: () => void}) {
  
  return (
    <div style={{display: open ? "block" : "none"}}>
        <div className='modal-background'>
        </div>
        <div className="modal">
            <h3>Delete comment</h3>
            <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
            <div style={{width: "100%",display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <button onClick={onCancelDelete} className="btn-cancel">no, cancel</button>
                <button onClick={onConfirmDelete} className="btn-delete">yes, delete</button>
            </div>
        </div>
    </div>


  )
}
