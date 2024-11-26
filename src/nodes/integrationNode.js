// llmNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeCheckbox } from './nodesAbs/Nodes';
import NodeWrapper from './nodesAbs/NodeWrapper';

export const IntegrationNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(false);

    const handleChange = (e) => {
        setCurrName(!currName);
    };
    return (
        <NodeWrapper title={'Integration'} content={'Integration Node'}>
            <Handle
                type="target"
                position={Position.Left}
                id={`${id}-input`}
                style={{ top: `${100 / 3}%` }}
            />
            <NodeCheckbox value={currName} label={'integration'} handleChange={handleChange} />
            <Handle
                type="source"
                position={Position.Right}
                id={`${id}-output`}
            />
        </NodeWrapper>
    );
}
