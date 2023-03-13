import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Projectchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    scholarYear: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Schema.ObjectId,
      required: false,
    },
    
  
   
  },
  { timestamps: true }
);
const Project = mongoose.model('Project',Projectchema )
export default Project;