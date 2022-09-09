import '../../style/component/incident.css'
import { ReactComponent as EditIcon } from '../../assets/icons/edit_icon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete_icon.svg'
import { ReactComponent as MoreIcon } from '../../assets/icons/chevron_droite_icon.svg'
import DeleteIncident from '../request/deleteIncident'
import ConsultIncident from '../request/consultIncident'
import EditIncident from '../request/editincident'

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
                {/* <button id='editIcon'>
                    <EditIcon/>
                </button> */}
                <EditIncident id={props.incident._id} />
                {/* <button id='deleteIcon'>
                    <DeleteIcon />
                </button> */}
                <DeleteIncident id={props.incident._id} />
                {/* <button id='moreIcon'>
                    <MoreIcon />
                </button> */}
                <ConsultIncident id={props.incident._id} />
            </div>
        </div>
    )
}

export default IncidentElement;