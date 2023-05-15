import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
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

    const handleShowPost = (myPost) => {
      setIsPostsShowVisible(true);
      setCurrentPost(myPost)
    };

    return (
      <div className="container">
        <PostsNew />
        <PostsIndex posts={posts} onShowPost={handleShowPost} />
        
        <h4>
          <PostsIndex posts={posts} />
        </h4>
      </div>
    );
  }
