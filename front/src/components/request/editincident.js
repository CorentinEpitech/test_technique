import useModal from '../modal/useModal';
import Modal from '../modal/modal';
import React from 'react';
import { ReactComponent as EditIcon } from '../../assets/icons/edit_icon.svg'
import { useState } from 'react';
// import '../../style/component/editIncident.css'


const initialFormData = Object.freeze({
    title: "",
    description: "",
  });

const EditIncident = function(props) {
    const { isShowing: isFormShowed, toggle: toggleForm } = useModal();
    const [getIncident, setGetIncient] = useState(initialFormData);


    const newIncidentRequest = async function(props) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: props._id, title: props.title, description: props.description})
        };
        fetch('http://localhost:8080/incident', requestOptions);
    }

    const getCurrentIncident = async function(event, id) {
        toggleForm();
        console.log(id)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id})
        };
        const t = await fetch('http://localhost:8080/oneincident', requestOptions);

        const g = await t.json();

        setGetIncient(g.incident);
    }

    const handleChange = (e) => {
        setGetIncient({
        ...getIncident,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (getIncident.description == '' || getIncident.title == '') {
            alert("Vous devez remplir les champs pour éditer un incident")
            return;
        }
        console.log(getIncident);
        newIncidentRequest(getIncident);
        toggleForm();
        window.location.reload();
    }
    return (
        <div>
            <button id='editIcon' onClick={event => getCurrentIncident(event, props.id)}>
                <EditIcon />
            </button>
            <Modal
            isShowing={isFormShowed}
            hide={toggleForm}
            title="Modifier l'incident">
                <form className='formContainer'>
                    <div>
                        <div className="form-group">
                            <label htmlFor='formTitle'>Titre</label>
                            <input id='formTitle' type="text" placeholder="Titre" name='title' value={getIncident.title} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor='formDescription'>Description</label>
                            <textarea id='formDescription' type="text" placeholder="Description" name='description' value={getIncident.description} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-group-btn">
                        <input id='formButton' type="submit" value="Sauvegarder" onClick={handleSubmit}/>
                    </div>
                </form>
            </Modal>
        </div>
    
    )
}

export default EditIncident