import React, { useState, useEffect } from "react";
import { DescriptionList } from "@shopify/polaris";
import axios from "axios";

export default function History(props) {
  const [history, setHistory] = useState([]);

  const smsHistory = () => {
    axios.get("/api/history/").then(res => {
      console.log("history", res.data);
      setHistory(res.data);
    });
  };

  useEffect(() => {
    smsHistory();
  }, []);

  return <DescriptionList items={history} />;
}
