import useModal from '../modal/useModal';
import ModalDelete from '../modal/modalDelete';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete_icon.svg'
import '../../style/component/deleteIncident.css'
import React from 'react';


const DeleteIncident = function(props) {
    const { isShowing: isFormShowed, toggle: toggleForm } = useModal();

    const handleDelete = async function(event, id) {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id})
        };
        fetch('http://localhost:8080/incident', requestOptions);
        toggleForm();
        window.location.reload();
    }
    
    return (
        <div>
            <button id='deleteIcon' onClick={toggleForm}>
                <DeleteIcon />
            </button>
            <ModalDelete
            isShowing={isFormShowed}
            hide={toggleForm}
            title="">
                <div className='modalContainer'>
                    <div className='modalTitleContainer'>
                        <a className='modalTitle'>Êtes vous sûr de vouloir supprimer cet incident ?</a>
                    </div>
                    <div className='modalButtonContainer'>
                        <button className='modalButtonDelete' onClick={event => handleDelete(event, props.id)}>
                            Supprimer
                        </button>
                        <button className='modalButtonCancel' onClick={toggleForm}>
                            Annuler
                        </button>
                    </div>
                </div>
            </ModalDelete>
        </div>
    )
}

export default DeleteIncident