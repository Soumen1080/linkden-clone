import { Router } from "express";


const routes = Router();
routes.route("/active").get(activeCheck);
export default routes;