//////////////////////////// SubmitBoxes 
import React from 'react';

function SubmitOrder(props) {
    return (
        <div>
            <p className="submitter">
                <button onClick={props.handleSubmitOrder}><strong>&bull; Order Taco &bull;</strong></button>
            </p>
        </div>
    );
}

export default SubmitOrder;