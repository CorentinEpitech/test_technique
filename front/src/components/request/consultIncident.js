import useModal from '../modal/useModal';
import Modal from '../modal/modal';
import React from 'react';
import { ReactComponent as MoreIcon } from '../../assets/icons/chevron_droite_icon.svg'
import '../../style/component/consultIncident.css'
import { useState } from 'react';

const ConsultIncident = function(props) {
    const { isShowing: isFormShowed, toggle: toggleForm } = useModal();
    const [getIncident, setGetIncient] = useState([]);

    const fetchOneIncident = async function(event, id) {
        toggleForm();
        console.log(id)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id})
        };
        fetch('http://localhost:8080/oneincident', requestOptions)
        .then(response => response.json())
        .then(data => setGetIncient(data.incident))
    }

    return (
        <div>
            <button id='moreIcon' onClick={event => fetchOneIncident(event, props.id)}>
                <MoreIcon />
            </button>
        <Modal
          isShowing={isFormShowed}
          hide={toggleForm}
          title="Consulter l’incident">
            <form className='formContainer'>
                <div>
                    <div className="form-group">
                        <label htmlFor='formTitle'>Titre</label>
                        <input id='formTitle' type="text" placeholder="Titre" name='title' value={getIncident.title} disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='formDescription'>Description</label>
                        <textarea id='formDescription' type="text" placeholder="Description" name='description' value={getIncident.description} disabled/>
                    </div>
                </div>
            </form>
        </Modal>
        </div>
    )
}

export default ConsultIncident