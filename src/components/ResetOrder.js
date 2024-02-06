////////////////////////////ResetOrder.js
import React from 'react';

function ResetOrder(props) {
    return (
        <div>
            <p className="submitter">
                <button onClick={props.handleResetOrder}><strong>&bull; Order Another &bull;</strong></button>
            </p>
        </div>
    );
}

export default ResetOrder;