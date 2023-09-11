import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import "./Notification.css";

const Notification = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [show, onClose]);
  return (
    <Alert
      className="Notification"
      show={show}
      variant="light"
      style={{
        position: "fixed",
        bottom: 30,
        right: 25,
        textAlign: "center",
        zIndex: 1000,
        width: "25%",
        boxShadow: "#726f6f36 0px 11px 11px 0px",
      }}
    >
      <CheckCircleFill size={30} color="green" className="me-3" />
      {message}
    </Alert>
  );
};

export default Notification;
