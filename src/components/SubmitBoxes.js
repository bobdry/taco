import React from 'react';

function SubmitBoxes(props) {
    return (
        <div>
            <p className="submitter">
                <button onClick={props.handleSubmitBoxes}>Submit Box</button>
            </p>
        </div>
    );
}

export default SubmitBoxes;