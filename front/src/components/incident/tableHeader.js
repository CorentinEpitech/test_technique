import '../../style/component/tableHeader.css'
import useModal from '../modal/useModal';
import Modal from '../modal/modal';
import React from 'react';
import NewIncident from '../request/newIncident';

const TableHeader = function() {
    return(
        <div className='tableHeader'>
            <div id='title'>
                <p>Title</p>
            </div>
            <div id='createdDate'>
                <p>Date de création</p>
            </div>
            <div id='editDate'>
                <p>Date de modifiction</p>
            </div>
            <div id='newIncidentButton'>
                <NewIncident />
            </div>
        </div>  
    )
}

export default TableHeader