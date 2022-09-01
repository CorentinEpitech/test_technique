import '../style/component/incidentList.css'

import IncidentElement from './incident'

const IncidentList = function() {
    return(
        <div className='table'>
            <IncidentElement />
        </div>
    );
}

export default IncidentList