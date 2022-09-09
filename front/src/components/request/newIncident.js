import useModal from '../modal/useModal';
import Modal from '../modal/modal';
import React from 'react';
import '../../style/component/newIncident.css'


const initialFormData = Object.freeze({
    title: "",
    description: "",
  });

const NewIncident = function() {
    const { isShowing: isFormShowed, toggle: toggleForm } = useModal();
    const [formData, updateFormData] = React.useState(initialFormData);

    const newIncidentRequest = async function(props) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: props.title, description: props.description})
        };
        fetch('http://localhost:8080/incident', requestOptions);
    }

    const handleChange = (e) => {
        updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.description == '' || formData.title == '') {
            alert("Vous devez remplir les champs pour ajouter un incident")
            return;
        }
        console.log(formData);
        newIncidentRequest(formData);
        toggleForm();
        window.location.reload();
    }
    return (
        <div>
            <button id='newIncidentAddButton' onClick={toggleForm}>Nouvel Incident</button>
        <Modal
          isShowing={isFormShowed}
          hide={toggleForm}
          title="Nouvel Incident">
            <form className='formContainer'>
                <div>
                    <div className="form-group">
                        <label htmlFor='formTitle'>Titre</label>
                        <input id='formTitle' type="text" placeholder="Titre" name='title' onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='formDescription'>Description</label>
                        <textarea id='formDescription' type="text" placeholder="Description" name='description' onChange={handleChange}/>
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

export default NewIncident