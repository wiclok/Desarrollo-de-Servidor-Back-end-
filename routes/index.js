const {Router} = require("express");

const {rutaDelete,rutaGet,rutaPost,rutaPut} = require("../controllers/index.js");
const routes = Router();

routes.get("/rutaget", rutaGet);

routes.post("/rutapost", rutaPost);

routes.put("/rutaput", rutaPut);

routes.delete("/rutadelete", rutaDelete);

module.exports = routes;