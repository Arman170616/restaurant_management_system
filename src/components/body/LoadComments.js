import React from 'react';
import dateformat from 'dateformat';


const LoadComments = props => {
    return (

        props.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <h5> {comment.author} </h5>
                    <p>{comment.comment}</p>
                    <p>{dateformat(comment.date, "dddd, mmmm ds, yyyy, h:MM:ss TT")}</p>
                </div>
            );
        })

    );
}


export default LoadComments;