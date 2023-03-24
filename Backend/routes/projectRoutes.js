import express from "express";
import {verify} from '../middleWares/verifyToken.js'
import{createProject,getProjects} from "../controllers/projectsSection.js"
const router = express.Router();
// const upload = multer({ dest: 'uploads/' })
// import multer from 'multer'


// create a project route
router.post("/", createProject);
// GET all Product
router.get("/", getProjects);


export default router