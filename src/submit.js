// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import CustomModal from "./CustomModal";

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    responseData: state.responseData,
    error: state.error,
    resetResponse: state.resetResponse,
    isSubmitting: state.isSubmitting,
    onSubmitPipeline: state.onSubmitPipeline,
})

export const SubmitButton = () => {
    const {
        nodes,
        edges,
        responseData,
        error,
        resetResponse,
        isSubmitting,
        onSubmitPipeline,
    } = useStore(selector, shallow);

    const handleSubmit = () => {
        onSubmitPipeline(nodes, edges);
    };

    const handleCloseModal = () => {
        resetResponse(); // Reset the state when modal is closed
    };

    return (
        <div className="submit-wrap">
            <button onClick={handleSubmit} disabled={isSubmitting} type="submit">{isSubmitting ? "Submitting..." : "Submit"}</button>
            {responseData && <CustomModal responseData={responseData} onClose={handleCloseModal} />}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
