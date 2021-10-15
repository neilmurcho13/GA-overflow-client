import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getToken } from "../../api/authFunctions";
import { motion } from "framer-motion";

const BlogNew = () => {

  const [header, setHeader] = useState('')
  const [headerImgUrl, setHeaderImgUrl] = useState('')
  const [para1, setPara1] = useState('')
  const [para2, setPara2] = useState('')
  const [para3, setPara3] = useState('')
  const [para4, setPara4] = useState('')
  const [para5, setPara5] = useState('')
  const [summary, setSummary] = useState('')
  const [bodyImgUrl, setBodyImgUrl] = useState('')



  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {

    e.preventDefault()
    const blog = {
      header,
      headerImgUrl,
      para1,
      para2,
      para3,
      para4,
      para5,
      summary,
      bodyImgUrl
    }


    setIsPending(true);

    fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
    });
    history.push("/");
    location.reload();
  };

  return (
    <motion.div
      className="create-container"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <h2>Create a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Header*</label>
        <input
          type="text"
          required
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          placeholder="..."
        />
        <label>Header Image*</label>
        <input
          type="text"
          required
          value={headerImgUrl}
          onChange={(e) => setHeaderImgUrl(e.target.value)}
          placeholder="copy + paste image address url"
        />
        <label>Blog paragraph 1* </label>
        <textarea
          required

          value={para1}
          onChange={(e) => setPara1(e.target.value)}
          placeholder='...'
        ></textarea>
        <label>Blog paragraph 2 </label>
        <textarea
          value={para2}
          onChange={(e) => setPara2(e.target.value)}
          placeholder='...'
        ></textarea>
        <label>Blog paragraph 3 </label>
        <textarea
          value={para3}
          onChange={(e) => setPara3(e.target.value)}
          placeholder='...'
        ></textarea>
        <label>Blog paragraph 4</label>
        <textarea
          value={para4}
          onChange={(e) => setPara4(e.target.value)}
          placeholder='...'
        ></textarea>
        <label>Blog paragraph 5</label>
        <textarea
          value={para5}
          onChange={(e) => setPara5(e.target.value)}
          placeholder='...'

 
        ></textarea>
        <label>Blog sub-header* </label>
        <textarea
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="..."
        ></textarea>
        <label>Body Image*</label>
        <input
          type="text"
          required
          value={bodyImgUrl}
          onChange={(e) => setBodyImgUrl(e.target.value)}
          placeholder="copy + paste image address url"
        />
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Creating blog</button>}
      </form>
    </motion.div>
  );
};

export default BlogNew;
