// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className='toolbar-wrapper' style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='file' label='File' />
                <DraggableNode type='theory' label='Theory' />
                <DraggableNode type='note' label='Note' />
                <DraggableNode type='tts' label='TTS' />
                <DraggableNode type='integration' label='Integration' />
            </div>
        </div>
    );
};
