// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    function handleEyes(e) {
        console.log(e)
    }

    return (
        <button onBlur={() => handleEyes('Hey! Eyes on me!')} onFocus={() => handleEyes('Good!')}>Eyes on me</button>
    )
}

export default EyesOnMe;