import Project from '../models/projects.js'
import User from '../models/User.js'
import mongoose from "mongoose";

// create projects
export const createProject = async (req, res) => {
  try {
    const { postedBy, description,ProjectName } = req.body;
    const user = await User.findById(postedBy);
    const newProject = new Project({
      postedBy,
      ProjectName: ProjectName,
      description:description
      
    });
    console.log(newProject)
    await newProject.save();

    const project = await Project.find();
    console.log(project)
    res.status(201).json(Project);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
  try {
    // ...
  } catch (error) {
    if (error.response.status === 409) {
      alert('A project with this name or image already exists');
    } else {
      console.error(error);
      alert('Error adding project');
    }
  }

};



/* READ  */
export const getProjects = async (req, res) => {
  try {
    const post = await Project.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
