import { Router } from "express";
import { activeCheck } from "../controllers/post.controller.js";


const routes = Router();
routes.route("/active").get(activeCheck);
export default routes;

