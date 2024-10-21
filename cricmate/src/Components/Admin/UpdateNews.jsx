import React,{useState} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";


function UpdateNews() {
  const [data, setData] = useState({
    title: "",
    content: "",
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Update news form submitted", data);
    try {
      const response = await axios.post("http://localhost:4000/api/v1/updateNews", {
        title: data.title,
        content: data.content
      });
      console.log("Updated news", response.data);
    } catch (error) {
      console.error("Error updating news:", error);
    }
  }
  return (
    <div>
      <Navbar />
      <div>
        <form action="submit">
          <input type="text" placeholder="Enter Title" value={data.title} onChange={(e) => setData({...data, title: e.target.value})}/>
          <input type="text" placeholder="Enter Content" value={data.content} onChange={(e) => setData({...data, content: e.target.value})}/>
          <button type="submit" onClick={handleSubmit} >Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default UpdateNews;
