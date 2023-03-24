import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Projectchema = new Schema(
  {
    ProjectName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postedBy: {
      type: String,
      required: false,
    },
   
   
  },
  { timestamps: true }
);
const Project = mongoose.model('Project',Projectchema )
export default Project;