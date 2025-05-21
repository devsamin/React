import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { DNA } from "react-loader-spinner";
const Phones = () => {
  const [phones, setphones] = useState([]);
  const [lodaing, setloading] = useState(true)
  // useEffect(()=>{
  //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  //     .then(res=>res.json())
  //     .then(data=>setphones(data.data))
  // },[])

  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => {
      const phonedata = data.data.data;
      const phoneWithfakedata = phonedata.map((phone) => {
        const obj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("-")[1]),
        };
        return obj;
      });
      console.log(phoneWithfakedata);
      setphones(phoneWithfakedata);
      setloading(false)
    });
  return (
    <div>
      
      {lodaing && <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />}
      <h3 className="text-3xl">Total phone in my shop : {phones.length}</h3>
      <BarChart width={700} height={300} data={phones}>
        <XAxis dataKey="name"> </XAxis>
        <YAxis dataKey="price"></YAxis>
        <Bar dataKey="price" fill="#8884d8" />
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
