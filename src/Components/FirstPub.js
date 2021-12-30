import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import { FiAirplay } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import {
  AiOutlineExclamationCircle,
  AiOutlineShoppingCart,
  AiOutlineShareAlt,
} from "react-icons/ai";

const FirstPub = () => {
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
          marginTop: "10px",
          display: "flex",
          margin: "auto",
          height: "200px",
          color: "#009791",
          width: "1270px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <BsFillPatchExclamationFill size={100} />
            <h3>Code Promo</h3>
            <p style={{ color: "black", fontWeight: "bold" }}>
              Profitez en utilisant les codes promo sur les services: VTC,
              shopping...,
            </p>
          </div>
          <div>
            <AiOutlineShoppingCart size={100} />
            <h3>offres</h3>
            <p style={{ color: "black", fontWeight: "bold" }}>
              Trouvez des offres près de chez vous dans vos magasins préférés
            </p>
          </div>
          <div>
            <AiOutlineShareAlt size={100} />
            <h3>Partage</h3>
            <p style={{ color: "black", fontWeight: "bold" }}>
              Invitez vos amis d'essayer Reduc.dz, vous obtenez des récompenses
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FirstPub;
