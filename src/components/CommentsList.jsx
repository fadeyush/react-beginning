import React from 'react';
import CommentItem from './CommentItem';

const CommentsList = ({comments}) => {
    return (
        <div>
            {comments.map(comm =>
                <CommentItem key={comm.id} comm={comm}/>
            )}
        </div>
    );
};

export default CommentsList;