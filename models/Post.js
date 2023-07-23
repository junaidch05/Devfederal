import mongoose, { Schema } from 'mongoose';


const postSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);