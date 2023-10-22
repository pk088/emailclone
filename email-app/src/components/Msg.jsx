import React, { useEffect, useState } from "react";
import "./Msg.css";
import axios from "axios";

const Msg = (prop) => {
  //   console.log(prop.data);

  const [wid, setWid] = useState("90");
  const [emaildata, setEmailData] = useState("90");
  const [iid, setIid] = useState(1);

  const timestamp = prop.data.date;

  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

  // console.log(formattedDate);
  // const url = "https://flipkart-email-mock.now.sh/?id=1"
  const openMail = (id) => {
    setWid(40);
    setIid(id)
  };

  const initial = prop.data.from.name.charAt(0).toUpperCase();

//   useEffect(
//     axios
//       .get(`https://flipkart-email-mock.now.sh/?id=3`)
//     //   .then((response) => setEmailData(response.data.list))
//       .then((response) => console.log(response))
//       .catch((error) => console.error("Error fetching data:", error)),
//     []
//   );

  return (
    <div>
      <div
        className="mail_msg"
        style={{ width: `${wid}%` }}
        // onClick={openMail(prop.data.id)}
      >
        <div className="logo">{initial}</div>
        <div className="msg_content">
          <p>From: {prop.data.from.email}</p>
          <p>Subject: {prop.data.subject}</p>
          <p>{prop.data.short_description} </p>
          <p>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Msg;
