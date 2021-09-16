// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import { Container, Row, Col } from "react-bootstrap";
// import "./Manger.css";
// import Dateicon from "../../assets/img/Date-icon.svg";
// const ManagerPanel = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <div>
//       <div className="conatiner">
//         <div className="row manger-panel-shadow mt-5">
//           <p className="heading-stock d-none d-sm-block">Add New News</p>
//           <p className="heading-stock d-block d-sm-none">Add News</p>
//           <div className="col-12 col-lg-6 mb-3">
//             <input
//               className="form-control  small-paragraph inputs-border p_16_20"
//               type=""
//               placeholder="Title"
//             />
//           </div>
//           <div className="col-12 col-lg-6 mb-3 ">
//             <div className=" inputs-border p_16_20 w-100 d-flex justify-content-between">
//               <DatePicker
//                 value=" Date"
//                 id="my-date"
//                 className="small-paragraph border-0 "
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//               />
//               <img for="my-date" src={Dateicon} alt="" />
//             </div>
//           </div>
//           <div className="col-12 col-lg-6 mb-3 ">
//             <div className="inputs-border   d-flex justify-content-between align-items-center py-1 ps-1 pe_12">
//               <span className="small-paragraph d-none d-sm-block">
//                 YouTube Video/ Image Link
//               </span>
//               <span className="small-paragraph d-block d-sm-none">
//                 {" "}
//                 Video/ Image Link
//               </span>
//               <input type="file" id="my-file" hidden />
//               <button className="upload-img-btn d-none d-sm-block">
//                 <label for="my-file">Upload Image</label>
//               </button>
//               <button className="upload-img-btn d-block d-sm-none">
//                 <label for="my-file">Upload</label>
//               </button>
//             </div>
//           </div>
//           <div className="col-12 col-lg-6 mb-3">
//             <select
//               className=" w-100 selection-field h-100 inputs-border padding-select pb-12 small-paragraph"
//               name=""
//               id=" "
//             >
//               <option className="small-paragraph">Tags</option>
//               <option className="small-paragraph" value="1">
//                 One
//               </option>
//               <option className="small-paragraph" value="2">
//                 Two
//               </option>
//               <option className="small-paragraph" value="3">
//                 Three
//               </option>
//             </select>
//           </div>
//           <div className="col-12 col-lg-6 mb-3">
//             <select
//               className=" w-100 selection-field   inputs-border padding-select pb-3 small-paragraph"
//               name=""
//               id=""
//             >
//               <option className="small-paragraph">Select Stock</option>
//               <option className="small-paragraph" value="1">
//                 One
//               </option>
//               <option className="small-paragraph" value="2">
//                 Two
//               </option>
//               <option className="small-paragraph" value="3">
//                 Three
//               </option>
//             </select>
//           </div>
//           <div className="col-12 col-lg-6 mb-3">
//             <select
//               className=" w-100 selection-field  inputs-border padding-select pb-3 small-paragraph"
//               name=""
//               id=""
//             >
//               <option className="small-paragraph">Select Exchange</option>
//               <option className="small-paragraph" value="1">
//                 One
//               </option>
//               <option className="small-paragraph" value="2">
//                 Two
//               </option>
//               <option className="small-paragraph" value="3">
//                 Three
//               </option>
//             </select>
//           </div>
//           <div className="col-12 col-lg-6 mb-3">
//             <input
//               className="form-control small-paragraph inputs-border p_16_20"
//               type=""
//               placeholder="Updated By"
//             />
//           </div>
//           <div className="col-12 col-lg-6 mb-3">
//             <input
//               className="form-control small-paragraph inputs-border p_16_20"
//               type=""
//               placeholder="Wrote By"
//             />
//           </div>
//           <div className="col-12 col-lg-6 mb-3 d-none d-lg-block"></div>
//           <div className="col-12 col-lg-6 mb-3">
//             <select
//               className=" w-100 selection-field  inputs-border padding-select pb-3 small-paragraph"
//               name=""
//               id=""
//             >
//               <option className="small-paragraph ">Select Portfolios</option>
//               <option className="small-paragraph" value="1">
//                 One
//               </option>
//               <option className="small-paragraph" value="2">
//                 Two
//               </option>
//               <option className="small-paragraph" value="3">
//                 Three
//               </option>
//             </select>
//           </div>
//           <div className="col-12 mb-3">
//             <textarea
//               className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
//               name=""
//               id=""
//               cols=""
//               rows="6"
//               placeholder="Text "
//             ></textarea>
//           </div>
//           <div className="col-auto mb-3">
//             <div class="form-check">
//               <input
//                 class="form-check-input"
//                 type="checkbox"
//                 value=""
//                 id="flexCheckDefault"
//               />
//               <label
//                 class="form-check-label check-box-text "
//                 for="flexCheckDefault"
//               >
//                 Feature on homepage
//               </label>
//             </div>
//           </div>
//           <div className=" ">
//             <button className="add-btn">Add</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManagerPanel;
