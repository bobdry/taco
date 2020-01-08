////////////////////////////ResetOrder.js
import React from 'react';

function ResetOrder(props) {
    return (
        <div>
            <p className="submitter">
                <button onClick={props.handleResetOrder}>New Order</button>
            </p>
        </div>
    );
}

export default ResetOrder;