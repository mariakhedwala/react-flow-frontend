// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { TextNodeContent } from './nodesAbs/Nodes';
import NodeWrapper from './nodesAbs/NodeWrapper';

export const NoteNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));

  const handleTextChange = (e) => {
    setCurrName(e.target.value);
  };


  return (
    <NodeWrapper title={'Note'}>
      <TextNodeContent id={id} currName={currName} handleTextChange={handleTextChange} />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </NodeWrapper>
  );
}
