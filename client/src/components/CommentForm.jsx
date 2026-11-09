import { useState } from 'react'

export function CommentForm({saveComment, comment}) {
    const [editing, setEditing] = useState(false)
    
    const submitChanges = event => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newComment = formData.get('comment')

        saveComment(newComment);
        setEditing(false);
    }

    return(
        <div>
            {editing ? 
            
            <form id="edit-comment" onSubmit={submitChanges}>
                <textarea name='comment' defaultValue={comment}></textarea>
                <button type='submit'>Save comment</button>
            </form>
            
            : 
            
            <div>
                <p>{comment}</p>
                <button onClick={() => setEditing(true)}>Edit comment</button>
            </div>
            
            
            }
        </div>
    )
}