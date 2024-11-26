// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { InputNodeContent } from './nodesAbs/Nodes';
import NodeWrapper from './nodesAbs/NodeWrapper';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <NodeWrapper title={'Input'}>
      <InputNodeContent currName={currName} handleNameChange={handleNameChange} inputType={inputType} handleTypeChange={handleTypeChange} />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </NodeWrapper>
  );
}
