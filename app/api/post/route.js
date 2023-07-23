
import Post from "../../../models/Post";
import { connectToDB } from "../../../utils/db";

export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new Post(body);
  
    try {
      await connectToDB();
  
      await newPost.save();
  
      return new Response("Post has been created", { status: 201 });
    } catch (err) {
        return new Response(console.log(err), { status: 500 })
       
    }
  };