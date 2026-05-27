import {Router} from "express";
import {healthChek } from "../controllers/healthcheck.controller.js";


const router = Router()

router.route("/").get(healthChek)


export default router; 