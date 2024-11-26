// llmNode.js

import { Handle, Position } from 'reactflow';
import NodeWrapper from './nodesAbs/NodeWrapper';

export const TTSNode = ({ id }) => {

  return (
    <NodeWrapper title={'Text to Speech'} content={'This is Text to Speech node'}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-text`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-text`}
        style={{ top: `${200 / 3}%` }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-speech`}
      />
    </NodeWrapper>
  );
}
