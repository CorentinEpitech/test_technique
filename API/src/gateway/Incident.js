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
    
    let date_ob = new Date();

    await requestdb.create({
        title: req.title,
        description: req.description,
        created: date_ob,
        modified: date_ob,
    })
    return result;
}

async function Update_Incident(req) {
    var requestdb = IncidentSchema.IncidentSchema;
    var result = 0;

    if (req.title == null || req.description == null) {
        return -1;
    }
    if (req.title == "" || req.description == "") {
        return -1;
    }

    let date_ob = new Date();

    await requestdb.updateOne({ _id: req.id }, { $set: { "title": req.title, "description": req.description, "modified": date_ob } });
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