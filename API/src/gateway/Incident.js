const IncidentSchema = require('../schema/IncidentSchema');

async function GetOne_Incident(req) {
    var requestdb = IncidentSchema.IncidentSchema;

    var result = await requestdb.findOne({ _id: req.id });
    return result;
}

async function Get_Incident() {
    var requestdb = IncidentSchema.IncidentSchema;

    var result = await requestdb.find();
    return result;
}

async function Create_Incident(req) {
    var requestdb = IncidentSchema.IncidentSchema;
    var result = 0;

    if (req.title == null || req.description == null) {
        return -1;
    }
    if (req.title == "" || req.description == "") {
        return -1;
    }

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '/' + mm + '/' + yyyy;

    await requestdb.create({
        title: req.title,
        description: req.description,
        created: formattedToday,
        modified: formattedToday,
    })
    return result;
}

async function Update_Incident(req) {
    var requestdb = IncidentSchema.IncidentSchema;
    var result = 0;

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '/' + mm + '/' + yyyy;

    if (req.title == null || req.description == null) {
        return -1;
    }
    if (req.title == "" || req.description == "") {
        return -1;
    }

    await requestdb.updateOne({ _id: req.id }, { $set: { "title": req.title, "description": req.description, "modified": formattedToday } });
    return result;
}


async function Delete_Incident(req) {
    var requestdb = IncidentSchema.IncidentSchema;

    await requestdb.deleteOne({ "_id": req.id });
    return 0;
}

module.exports = {
    GetOne_Incident,
    Get_Incident,
    Create_Incident,
    Update_Incident,
    Delete_Incident
};