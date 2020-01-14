// import React, { useState, useContext, Fragment } from "react";
// import { LoadTheme } from "../theme/LoadTheme";
// import axios from "axios";

// export const PicUploadForm = ({ recipe, setRecipe }) => {

//   const activeTheme = LoadTheme();
//   const { uiColor, secondaryTextColor } = activeTheme;



//   const handleUpload = e => {
//     console.log("Picture being uploaded...")
//     sendPicToBackend(pic).then(picLocation => {
//       setRecipe({
//         ...recipe,
//         picLocation: picLocation
//       });
//       setFilePath(picLocation)
//     });
//   };

//   const sendPicToBackend = async pic => {
//     const formData = new FormData();
//     formData.append("file", pic);

//     try {
//       const res = await axios.post("/api/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });
//       return res.data;
//     } catch (err) {
//       // setAlert('Uploading photo failed.', 'fail');
//       console.log(err.message);
//     }
//   };

//   const uploadFormOrPicture = filePath === '' ? (<Fragment>
//     {pic.name && (
//         <div className="btn" onClick={handleUpload} style={{cursor: "pointer"}}>
//           <span>Upload</span>
//         </div>
//       )}

//   </Fragment>) : <img src={filePath} width="200"/>

//   return uploadFormOrPicture;
// };

// export default PicUploadForm;
