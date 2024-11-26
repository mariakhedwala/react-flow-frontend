import React, { useState, useEffect, useRef } from 'react'
import { Handle, Position } from 'reactflow';

const TextNodeContent = ({ id, currText, handleTextChange }) => {
    const [text, setText] = useState('');
    const [dimensions, setDimensions] = useState({ width: 100, height: 50 });
    const [variables, setVariables] = useState([]);
    const hiddenDivRef = useRef(null);

    useEffect(() => {
        // Adjust dimensions based on the hidden div's computed size
        if (hiddenDivRef.current) {
            const { offsetWidth, offsetHeight } = hiddenDivRef.current;
            const newWidth = Math.min(Math.max(200, offsetWidth + 20), 400); // Min 150px, Max 400px
            const newHeight = Math.max(50, offsetHeight + 30); // Min 50px
            setDimensions({ width: newWidth, height: newHeight });
        }
    }, [text]);

    useEffect(() => {
        // Extract variables from the text
        const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
        const matches = [...text.matchAll(variableRegex)];
        const newVariables = matches.map((match) => match[1]);
        setVariables(newVariables);
    }, [text]);

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            {variables.map((variable, index) => (
                <Handle
                    key={index}
                    type="target"
                    position={Position.Left}
                    id={`${id + index}-input`}
                    data-tip={variable}
                    style={{ top: `${(index + 1) * (100 / (variables.length + 1))}%` }}
                />
            ))}
            <label>
                <span>Text:</span>
                <div
                    style={{
                        position: 'relative',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '5px',
                        background: '#f9f9f9',
                        boxSizing: 'border-box',
                        width: `${dimensions.width}px`,
                        height: `${dimensions.height}px`,
                        resize: 'none',
                        overflow: 'hidden',
                    }}
                >

                    {/* Hidden div for dynamic size calculation */}
                    <div
                        ref={hiddenDivRef}
                        style={{
                            position: 'absolute',
                            visibility: 'hidden',
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word',
                            width: `${dimensions.width - 20}px`,
                            fontSize: '14px',
                            lineHeight: '1.5',
                        }}
                    >
                        {text || 'Type here...'}
                    </div>

                    {/* Visible textarea */}
                    <textarea
                        value={text}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            outline: 'none',
                            resize: 'none',
                            fontSize: '14px',
                            lineHeight: '1.5',
                        }}
                        placeholder="Type here..."
                    />
                </div>
            </label>
        </>
    )
}

const InputNodeContent = ({ currName, handleNameChange, inputType, handleTypeChange }) => {
    return (
        <>
            <label>
                <span>Name:</span>
                <input
                    type="text"
                    value={currName}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                <span>Type:</span>
                <select value={inputType} onChange={handleTypeChange}>
                    <option value="text">Text</option>
                    <option value="file">File</option>
                </select>
            </label>
        </>
    )
}

const OutputNodeContent = ({ currName, handleNameChange, outputType, handleTypeChange }) => {
    return (<>
        <label className='mb-5'>
            <span>Name:</span>
            <input
                type="text"
                value={currName}
                onChange={handleNameChange}
            />
        </label>
        <label>
            <span>Type:</span>
            <select value={outputType} onChange={handleTypeChange}>
                <option value="Text">Text</option>
                <option value="File">Image</option>
            </select>
        </label>
    </>
    )
}

const FileNodeContent = ({ handleChange }) => {
    return (<>
        <label>
            <input type='file' accept='.pdf' onChange={handleChange} />
        </label>
    </>)
}

const TheoryNodeContent = ({ currName, handleChange }) => {
    return (<>
        <label className='mb-5'>
            <span>Theory title:</span>
            <input
                type="text"
                value={currName}
                onChange={handleChange}
            />
        </label>
    </>)
}
const NodeCheckbox = ({ currName, label, handleChange }) => {
    return (<>
        <label className="checkbox-wrap">
            <input type="checkbox" className="checkbox-input" onChange={handleChange} value={currName} />
            <span className="checkbox-label">{label}</span>
        </label>
    </>)
}

export { TextNodeContent, InputNodeContent, OutputNodeContent, FileNodeContent, TheoryNodeContent, NodeCheckbox };