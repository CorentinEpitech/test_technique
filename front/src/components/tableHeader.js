import '../style/component/tableHeader.css'

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
                <button>Nouvel Incident</button>
            </div>
        </div>
    )
}

export default TableHeader