import React from 'react';

const CommentItem = ({comm}) => {
    return (
        <div style={{marginTop: 15}}>
            <h5>{comm.email}</h5>
            <p>{comm.body}</p>
        </div>
    );
};

export default CommentItem;