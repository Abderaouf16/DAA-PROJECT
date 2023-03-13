import Project from '../models/projects.js'
import mongoose from "mongoose";

// create projects
 export const createProject = async (req, res) => {
    console.log(req.user);
    const { title, postedBy, scholarYear, description} = req.body;
    const {_id} = req.user;
    console.log(_id)
    //add to a database
    try {
      const product = await Project.create({
        title,
        description,
        postedBy : _id,
        scholarYear
      });
  
      res.status(201).json(Project);
      console.log(req.body)
    } catch (error) {
      res.status(400).json({ error: true, message: error.message });
    }
  };
