import Header from "../components/header";
import IncidentList from "../components/incident/incidentList";
const HomeView = function() {
    return (
        <div>
            <Header />
            <IncidentList />
        </div>
    )
}

export default HomeView;