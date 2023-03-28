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


// fetch products by user (postedBy)
 export const getProjectsByUser = async (req, res) => {
  const {postedBy} = req.params;
  try {
    const projects = await Project.find({postedBy}).sort({ createdAt: -1 });
    if( !projects || projects.length === 0){
      return res.status(404).json({ error: "No product posted by this user yet!" });
    }
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json(error);
  }
};

// export const getProjectsByUser = async (req, res) => {
//   try {
//     const { postedBy } = req.params;
//     const projects = await Project.find({ postedBy:postedBy });
//     res.status(200).json(projects);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };


//delete product
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  console.log("project",id)
  try {

    if (!Project) {
      return res.status(404).json({ error: "Product not found!" });
    }

    await Project.deleteOne({_id: id})

    res.status(200).json({message: "Product deleted successfully!",data:Project});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

// update a project by id
export const updateProject =  async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  console.log(updates)

  try {
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    Object.assign(project, updates);

    const updatedProject = await project.save();

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//Read on Project by it's ID
export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    
    if (!project) {
      return res.status(404).json({ error: "Project not found!" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: "Error finding Project!" });
  }
};