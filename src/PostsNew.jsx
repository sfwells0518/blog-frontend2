export function PostsNew() {
  return (
    <div id="posts-new">
      <h3>New Post</h3>
      <form>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingTitle" placeholder="Title" />
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control form-control-large" id="floatingBody" placeholder="Body" />
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingImage" placeholder="ImageURL" />
        </div>

        <br></br>

        <button type="submit">Create Post</button>
      </form>
      <br></br>
    </div>
  );

}