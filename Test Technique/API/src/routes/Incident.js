const cors = require('cors');
const { asyncMiddleware } = require('middleware-async');
const bp = require('body-parser');

const Incident = require('../../src/gateway/Incident');

module.exports = function (app) {
    app.use(bp.json());
    app.use(bp.urlencoded({ extended: true }));

    app.get('/oneincident', cors(), asyncMiddleware(async (req, res) => { 
        var result = await Incident.GetOne_Incident(req.body);

        res.status(200).json({ status: "OK", incident: result });
    }))

    app.get('/incident', cors(), asyncMiddleware(async (req, res) => { 
        var result = await Incident.Get_Incident();

        res.status(200).json({ status: "OK", incident: result });
    }))

    app.post('/incident', cors(), asyncMiddleware(async (req, res) => {
        var status = await Incident.Create_Incident(req.body);

        switch (status) {
            case 0:
                res.status(200).json({ status: "OK", message: "Create" });
                break;
            case -1:
                res.status(400).json({ status: "KO", message: "Error" });
                break;
        }
    }))

    app.put('/incident', cors(), asyncMiddleware(async (req, res) => {
        var status = await Incident.Update_Incident(req.body);

        switch (status) {
            case 0:
                res.status(200).json({ status: "OK", message: "Updated" });
                break;
            case -1:
                res.status(400).json({ status: "KO", message: "Error" });
                break;
        }
    }))

    app.delete('/incident', cors(), asyncMiddleware(async (req, res) => {
        var status = await Incident.Delete_Incident(req.body);

        res.status(200).json({ status: "OK", message: "Deleted" });
    }))

};