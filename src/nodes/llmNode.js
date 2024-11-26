// llmNode.js

import { Handle, Position } from 'reactflow';
import NodeWrapper from './nodesAbs/NodeWrapper';

export const LLMNode = ({ id, data }) => {

  return (
    <NodeWrapper title={'LLM'} content={'This is LLM'}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </NodeWrapper>
  );
}
