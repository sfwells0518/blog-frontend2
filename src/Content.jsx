import { PostsIndex } from "./PostsIndex";
import axios from "axios";
import { useState, useEffect } from "react";


  export function Content() {
    
    const [posts, setPosts] = useState([]);

    const handleIndexPosts = () => {
      console.log("handleIndexPosts");
      axios.get("http://localhost:3000/posts.json").then((response) => {
        console.log(response.data);
        setPosts(response.data);
        
      });
    }

    useEffect(handleIndexPosts, []);

    return (
      <div>
        <h4>
          <PostsIndex posts={posts} />
        </h4>
      </div>
    );
  }
