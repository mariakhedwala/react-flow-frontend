// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { FileNodeContent } from './nodesAbs/Nodes';
import NodeWrapper from './nodesAbs/NodeWrapper';

export const FileNode = ({ id, data }) => {
    const [currName, setCurrName] = useState('');

    const handleChange = (e) => {
        setCurrName(e.target.value);
    };

    return (
        <NodeWrapper title={'File'}>
            <Handle
                type="target"
                position={Position.Left}
                id={`${id}-fileInput`}
            />
            <FileNodeContent handleChange={handleChange} />
            <Handle
                type="source"
                position={Position.Right}
                id={`${id}-fileOutput`}
            />
        </NodeWrapper>
    );
}
