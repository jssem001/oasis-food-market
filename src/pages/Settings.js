import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {ref, uploadBytes, getDownloadURL, listAll} from "firebase/storage";
import { storage } from "../config/firebase";
import { v4 } from "uuid";

function Settings(){
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
  
    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    };
  
    useEffect(() => {
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });// eslint-disable-next-line
    }, []);

    return(
        <div>
            <Navbar />
            <h1>Settings Page (Trying out image upload for now) </h1>
            <div>
                <input
                    type="file"
                    onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                    }}
                />
                <button onClick={uploadFile}> Upload Image</button>
                {imageUrls.map((url) => {
                    return <img src={url} alt="product" style={{ width: '300px', height: '300px' }} />;
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Settings;