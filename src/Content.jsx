import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import axios from "axios";
import { useState, useEffect } from "react";


  export function Content() {
    
    const [posts, setPosts] = useState([]);
    const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

    const handleIndexPosts = () => {
      console.log("handleIndexPosts");
      axios.get("http://localhost:3000/posts.json").then((response) => {
        console.log(response.data);
        setPosts(response.data);
        
      });
    };

    useEffect(handleIndexPosts, []);

    const handleShowPost = (myPost) => {
      setIsPostsShowVisible(true);
      setCurrentPost(myPost);
    };

    const handleClose = () => {
      setIsPostsShowVisible(false);
    };

    return (
      <div className="container">
        <PostsNew />
        <PostsIndex posts={posts} onShowPost={handleShowPost} />
        <Modal show={isPostsShowVisible} onClose={handleClose}>
          <PostsShow post={currentPost} />
        </Modal>
      </div>
    );
  }
