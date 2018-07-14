var express = require("express");
var bodyParser = require("body-parser");
 
// express application
var app = express();
 
// add body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
// set routing.
app.use("/api/", (function () {
    var router = express.Router();
 
    // GET: /api/user/:id
    router.get("/user/:id", (request, response) => {
        var user = {
            id: request.params.id,
            name: "tanaka",
            role: "group1"
        }
        response.json(user);
    });
 
    // POST: /api/user
    router.post("/user", (request, response) => {
        var body = request.body;
        if (!body.name || !body.role) {
            return response.json(false);
        }
        var user = {
            id: 0,
            name: body.name,
            role: body.role
        };
        response.json(true);
    });
 
    return router;
})());
 
// start web applicaiton.
app.listen(3000);
