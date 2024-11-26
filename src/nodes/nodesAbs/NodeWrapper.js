import React from 'react'

const NodeWrapper = ({ title, content, children }) => {
    return (
        <div className='node'>
            <h3>{title}</h3>
            {content && (<p>{content}</p>)}
            {children}
        </div>
    )
}

export default NodeWrapper