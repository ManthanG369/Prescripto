import express from "express";
const doctorRouter = express.Router();
import {
  appointmentCancel,
  appointmentComplete,
  appointmentsDoctor,
  doctorList,
  doctorLogin,
} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

// all doctor api
doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", doctorLogin);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);
export default doctorRouter;
