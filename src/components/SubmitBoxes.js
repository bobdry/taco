////////////////////////////SubmitBoxes.js 
import React from 'react';

function SubmitBoxes(props) {
    return (
        <div>
            <p className="submitter">
                <button onClick={props.handleSubmitBoxes}><strong>&bull; Order Taco &bull;</strong></button>
            </p>
        </div>
    );
}

export default SubmitBoxes;