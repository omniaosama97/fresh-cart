import React from 'react'

import "./Loader.module.css"
// import { Bars } from 'react-loader-spinner'
import { PulseLoader } from "react-spinners"; 
export default function Loader() {
  return (
  //   <Bars
  // height="80"
  // width="80"
  // color="#4fa94d"
  // ariaLabel="bars-loading"
  // wrapperStyle={{}}
  // wrapperClass="h-screen flex justify-center items-center "
  // visible={true}
  // />
  <PulseLoader color={"#123abc"} loading={true} size={50} /> 
  )
}
