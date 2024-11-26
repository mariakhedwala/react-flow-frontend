import React, { useEffect } from 'react'
import Modal from 'react-modal';

Modal.setAppElement("#modal-root");

const CustomModal = ({ responseData, onClose }) => {
    useEffect(() => {
        // Optional: Close the modal when clicking outside the modal content area
        const closeModalOnOutsideClick = (e) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        };

        document.body.addEventListener("click", closeModalOnOutsideClick);

        return () => {
            document.body.removeEventListener("click", closeModalOnOutsideClick);
        };
    }, [onClose]);

    const { num_nodes, num_edges, is_dag } = responseData;

    return (
        <Modal
            isOpen={!!responseData} // Open modal only when there is responseData
            onRequestClose={onClose} // Close the modal when the user clicks outside or presses escape
            contentLabel="Pipeline Response"
            className="modal-content" // Customize modal content class for styling
            overlayClassName="modal-overlay" // Customize overlay class
        >
            <div className="modal-body">
                <h2>Pipeline Submission Response</h2>
                <ul>
                    <li><p className='title'><strong>Number of Nodes:</strong></p> <span className='value'>{num_nodes}</span></li>
                    <li><p className='title'><strong>Number of Edges:</strong></p> <span className='value'>{num_edges}</span></li>
                    <li><p className='title'><strong>Is DAG:</strong></p> <span className='value'>{is_dag ? "Yes" : "No"}</span></li>
                </ul>
                <button onClick={onClose} className="modal-close-btn">
                    Close
                </button>
            </div>
        </Modal>
    )
}

export default CustomModal