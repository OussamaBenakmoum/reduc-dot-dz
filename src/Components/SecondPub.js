import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { FiActivity } from "react-icons/fi";
import { FiAirplay } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaUsers, FaPercent } from "react-icons/fa";

const SecondPub = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "10px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Nombreuses façon d’éconimisez votre argent
      </h1>
      <Card
        style={{
          display: "flex",
          margin: "auto",
          height: "200px",
          color: "#009791",

          width: "1270px",
        }}
      >
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <FaUsers size={100} />
            <h5 style={{ color: "black", fontWeight: "bold" }}>
              3 millions d'utilisateurs
            </h5>
          </div>
          <div>
            <FaPercent size={100} />

            <h5 style={{ color: "black", fontWeight: "bold" }}>
              150,000 codes partagés par an{" "}
            </h5>
          </div>
          <div>
            <AiOutlineCheckCircle size={100} />

            <h5 style={{ color: "black", fontWeight: "bold" }}>
              100 testés par la communauté{" "}
            </h5>
          </div>
          <div>
            <BsFillBagFill size={100} />

            <h5 style={{ color: "black", fontWeight: "bold" }}>
              1,000 marques référencées{" "}
            </h5>
          </div>
          <div>
            <FiAlertCircle size={100} />

            <h5 style={{ color: "black", fontWeight: "bold" }}>
              10 ans d'existence{" "}
            </h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SecondPub;
