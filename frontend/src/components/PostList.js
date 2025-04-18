import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/notes`);
      setPosts(response.data);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/notes/${id}`);
      getPosts();
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  return (
    <div
      className="columns is-centered"
      style={{ backgroundColor: "#A9B5DF", minHeight: "100vh", padding: "2rem" }}
    >
      <div className="column is-three-quarters">
        <div
          className="box"
          style={{
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#EAE2C6",
          }}
        >
          <h1
            className="title has-text-centered is-size-1"
            style={{ color: "#27445D", fontWeight: "bold" }}
          >
            NOTES LIST
          </h1>
          <div className="has-text-right mb-4">
            <Link
              to={`/add`}
              className="button"
              style={{
                backgroundColor: "#27445D",
                color: "#ffffff",
                padding: "12px 18px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                borderRadius: "8px",
                transition: "0.3s",
                border: "none",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1F354A")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#27445D")}
            >
              + Add New
            </Link>
          </div>
          
          <div style={{ overflowX: "auto" }}>
            <table
              className="table is-fullwidth"
              style={{
                borderCollapse: "separate",
                borderSpacing: "0",
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#27445D" }}>
                  <th className="has-text-centered" style={{ padding: "15px", color: "white" }}>No</th>
                  <th style={{ padding: "15px", color: "white" }}>Title</th>
                  <th style={{ padding: "15px", color: "white" }}>Content</th>
                  <th className="has-text-centered" style={{ padding: "15px", color: "white" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr
                    key={post.id}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#EAEAEA",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#D9E4EC")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#F5F5F5" : "#EAEAEA")}
                  >
                    <td className="has-text-centered" style={{ padding: "12px", fontWeight: "bold" }}>{index + 1}</td>
                    <td style={{ padding: "12px" }}>{post.title}</td>
                    <td style={{ padding: "12px" }}>{post.content}</td>
                    <td className="has-text-centered" style={{ padding: "12px" }}>
                      <Link
                        to={`/edit/${post.id}`}
                        className="button is-small"
                        style={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          marginRight: "5px",
                          transition: "0.3s",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#3E8E41")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="button is-small"
                        style={{
                          backgroundColor: "#D9534F",
                          color: "white",
                          transition: "0.3s",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#C9302C")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#D9534F")}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
