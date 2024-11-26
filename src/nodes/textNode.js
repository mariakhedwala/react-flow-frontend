// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { TextNodeContent } from './nodesAbs/Nodes';
import NodeWrapper from './nodesAbs/NodeWrapper';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <NodeWrapper title={'Text'}>
      <TextNodeContent id={id} currText={currText} handleTextChange={handleTextChange} />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </NodeWrapper>
  );
}
