import React from 'react';

const postItem = function (props) {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}JavaScript - язык прогрмаммирования.</div>
            </div>
                <div className='post__btns'>
                <button>Удалить</button>
            </div>
         </div>
    );
}

export default postItem;