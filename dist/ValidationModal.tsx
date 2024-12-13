import React from 'react';
import './ValidationModal.css';


interface ValidationModalProps {
    isOpen: boolean
    closeModal: () => void
    title: string
    buttonText: string
    children?: React.ReactNode
}


const ValidationModal: React.FC<ValidationModalProps> = ({isOpen, closeModal, title, buttonText, children}) => {

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    return (
        isOpen ? (
            <div className="modal-overlay" onClick={handleOverlayClick}>
                <div className='modal-container'>
                    <div className="modal-content">
                        <h2>{title}</h2>
                        <div>{children}</div>
                        <button onClick={closeModal}>{buttonText}</button>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default ValidationModal;