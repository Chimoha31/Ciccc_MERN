import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { db } from "./firebase/Firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const App = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const photosCollectionRef = collection(db, "photos");
  const [images, setImages] = useState([]);
  const [wasImageUploaded, setImageUploaded] = useState(false);

  const {
    REACT_APP_CLOUDINARY_PRESET,
    REACT_APP_CLOUDINARY_NAME,
  } = process.env;

  // Get All images
  const getImages = async () => {
    const imageList = await getDocs(photosCollectionRef);
    const data = imageList.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setImages(data);
  };

  useEffect(() => {
    getImages();
    // eslint-disable-next-line
  }, [wasImageUploaded]);

  // Post Image
  const handleUpload = async () => {
    const formData = new FormData();
    // step1
    const a = formData.append("file", selectedImage);
    console.log(a);
    // step2
    formData.append("upload_preset", REACT_APP_CLOUDINARY_PRESET);

    try {
      const data = await axios.post(
        `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_NAME}/upload`,
        formData
      );
      const info = await addDoc(photosCollectionRef, {
        image: data.data.url,
      });
      console.log(info, "INFO");
      setImageUploaded(!wasImageUploaded);
      alert("Successfylly uploaded photo!");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(selectedImage);

  return (
    <div className="App">
      <div className="upload-container">
        <input
          type="file"
          className="inputButton"
          onChange={(event) => setSelectedImage(event.target.files[0])}
        />
        <button onClick={handleUpload}>Upload Image</button>
      </div>

      <section className="image-container">
        {images.map((data, index) => {
          return (
            <div key={index} className="image">
              <img src={data.image} alt={data.id} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default App;
