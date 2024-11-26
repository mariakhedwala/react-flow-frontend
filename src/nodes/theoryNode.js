// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { TheoryNodeContent } from './nodesAbs/Nodes';
import NodeWrapper from './nodesAbs/NodeWrapper';

export const TheoryNode = ({ id, data }) => {
    const [currName, setCurrName] = useState('');

    const handleChange = (e) => {
        setCurrName(e.target.value);
    };

    return (
        <NodeWrapper title={'Theory'}>
            <Handle
                type="target"
                position={Position.Left}
                id={`${id}-titleInput`}
            />
            <TheoryNodeContent currName={currName} handleChange={handleChange} />

        </NodeWrapper>
    );
}
