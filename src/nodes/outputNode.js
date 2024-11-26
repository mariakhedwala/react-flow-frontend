// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { OutputNodeContent } from './nodesAbs/Nodes';
import NodeWrapper from './nodesAbs/NodeWrapper';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <NodeWrapper title={'Output'}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <OutputNodeContent
        currName={currName}
        handleNameChange={handleNameChange}
        outputType={outputType}
        handleTypeChange={handleTypeChange}
      />
    </NodeWrapper>
  );
}
