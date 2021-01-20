import React from 'react'
function Button(object) {
    return (
        <>
        <div className="btn-container"><button>{object.text}</button></div>
        </>
    )
}
export default Button
