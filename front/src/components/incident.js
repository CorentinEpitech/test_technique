import '../style/component/incident.css'
import { ReactComponent as EditIcon } from '../assets/icons/edit_icon.svg'
import { ReactComponent as DeleteIcon } from '../assets/icons/delete_icon.svg'
import { ReactComponent as MoreIcon } from '../assets/icons/chevron_droite_icon.svg'

const IncidentElement = function(props) {
    return(
        <div className='incidentContainer'>
            <div id='incidentTitle'>
                <p>{props.incident.title}</p>
            </div>
            <div id='incidentCreatedDate'>
                <p>{props.incident.created}</p>
            </div>
            <div id='incidentEditDate'>
                <p>{props.incident.modified}</p>
            </div>
            <div className='buttonContainer'>
                    <button id='editIcon'>
                        <EditIcon/>
                    </button>
                    <button id='deleteIcon'>
                        <DeleteIcon />
                    </button>
                    <button id='moreIcon'>
                        <MoreIcon />
                    </button>
            </div>
        </div>
    )
}

export default IncidentElement;