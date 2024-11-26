import axios from 'axios';

export const submitPipeline = async (nodes, edges) => {
    try {
        // Prepare the payload with nodes and edges
        const payload = { nodes, edges };

        // Send the POST request to the backend
        const response = await axios.post('http://localhost:8000/pipelines/parse', payload);

        return response.data;
    } catch (error) {
        console.error('Error submitting pipeline:', error);
        alert('An error occurred while submitting the pipeline. Please try again.');
    }
};