import React from "react";
import "../App.css";
import axios from "axios";
function history({ data, setData }) {
  // const handleDelete = async (req, res) => {
  //   const id = req.params.id;
  //   const response = await axios
  //     .delete(`http://localhost:8000/${id}`)
  //     .then((res) => {
  //       console.log("DELETED SUCCESS", res.data);
  //       setData((prev) => prev.filter((el) => el.id !== res.data.id));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="coogi">
      <span className="letter">Өгөгдсөн холбоос:</span>
      <p className="url One">{data.Longlink}</p>
      <span className="letter">Богино холбоос:</span> <br />
      <a
        href={data.Shortlink}
        className="url Two"
        style={{ marginBottom: "4px" }}
      >
        http://localhost:3000/{data.Shortlink}
      </a>{" "}
      <span
        className="secondMainShit"
        style={{ textDecorationLine: "underline", marginLeft: 20 }}
      >
        Хуулж авах
      </span>
    </div>
  );
}

export default history;
