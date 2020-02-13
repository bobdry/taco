////////////////////////////SubmitBoxes.js 
import React from 'react';

function SubmitBoxes(props) {
    return (
        <div>
            <p className="submitter">
                <button onClick={props.handleSubmitBoxes}><strong>PLACE ORDER</strong></button>
            </p>
        </div>
    );
}

export default SubmitBoxes;