import React from "react";
import "../App.css";
import Logo from "../assets/boginooLogo.png";
import { Link, useParams } from "react-router-dom";
import History from "../components/history";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
function LoggedIn({}) {
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "63104c3120f6e665ecf628ba",
    },
  });
  const params = useParams();
  const [history, setHistory] = useState();
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState();
  const [data, setData] = useState([]);
  const [role, setRole] = useState();
  const handleDelete = async () => {
    const res = await axios.get(`http://localhost:8000/users/${params.id}`);
    console.log(res.data.data.links[0]._id);
    if (res.data.data.role === "admin") {
      await instance
        .delete(`links/${res.data.data.links[0]._id}`)
        .then((res) => {
          setData((prev) =>
            prev.filter((el) => el._id !== res.data.data.links[0]._id)
          );
          window.location.reload();
        })
        .catch((error) => {
          // alert("admin l ustganaa");
        });
    } else {
      toast.error("admin l ustgana");
    }
  };
  const getUser = async () => {
    const res = await axios.get(`http://localhost:8000/users/${params.id}`);
    // console.log(res);
    setEmail(res.data.data.email);
    setRole(res.data.data.role);
  };
  const createPost = async () => {
    const res = await axios.post("http://localhost:8000/links", {
      Longlink: url,
      user_id: params.id,
    });
    setId(res.data.data);
  };

  const getHistory = async () => {
    const res = await instance.get(`/users/${params.id}`);
    console.log(res);
    setHistory(
      res.data.data.links.map((el) => {
        return <History data={el} setData={el} />;
      })
    );
  };
  useEffect(() => {
    getUser();
    getHistory();
  }, []);

  return (
    <>
      <div className="header">
        <div className="topHeader">
          <p className="topHeaderShit" style={{ marginRight: "60px" }}>
            Хэрхэн ажилладаг вэ?
          </p>

          <Link to={"/"}>
            <button
              className="button"
              style={{
                width: "200px",
                height: "40px",
                marginRight: 150,
                marginTop: 80,
              }}
            >
              {email}
            </button>
            <button
              className="button"
              style={{
                width: "200px",
                height: "40px",
                marginRight: 150,
                marginTop: 80,
              }}
            >
              {role}
            </button>
            <br />
            <button
              className="button"
              style={{
                width: "200px",
                height: "40px",
                marginRight: 150,
                marginTop: 10,
              }}
            >
              Гарах
            </button>
          </Link>
        </div>
        <div
          className="bottomHeader"
          style={{ marginTop: "160px", marginBottom: 40 }}
        >
          <Link to={"/"}>
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="input">
          <input
            type="text"
            className="inputs"
            placeholder="https://www.web-huudas.mn"
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: "700px", height: "35px" }}
          />
          <button
            className="button"
            style={{ width: "200px", height: "45px", marginLeft: 40 }}
            onClick={() => createPost()}
          >
            Богиносгох
          </button>
        </div>
      </div>
      <div className="historyContainer">
        <div className="history">
          {history}
          {id && <div>{<History data={id} setData={setId} />};</div>}
          {data &&
            data.map((data) => {
              return (
                <div>
                  <History data={data} setData={setData} />;
                </div>
              );
            })}
          <button style={{ marginLeft: 100 }} onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="texts" style={{ marginTop: "410px" }}>
          <p className="secondMainShit" style={{ color: "black" }}>
            Made with ❤️ by Nest Academy
          </p>
          <p
            className="secondMainShit"
            style={{ color: "gray", fontSize: "13px", marginLeft: "60px" }}
          >
            ©boginoo.io 2023
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default LoggedIn;
