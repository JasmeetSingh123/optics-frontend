import React, { useState } from "react";
import axios from "axios";

export default function PostFrames() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [shape, setShape] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("shape", shape);
        formData.append("gender", gender);
        formData.append("price", price);

        // Make a POST request to your backend upload endpoint
        const response = await axios.post(
          "https://pothiwalopticals.onrender.com/api/admin/product",formData,{
            withCredentials: true
          }
          
        );

        console.log("Image uploaded:", response.data);
        // Handle the response data as needed (e.g., store image URL in state)
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle the error gracefully
      }
    }
  };

  // const handleUpload = async () => {
  //   if (selectedFile) {
  //     try {
  //       const formData = new FormData();
  //       formData.append("image", selectedFile);
  //       formData.append("category", category);
  //       formData.append("description", description);
  //       formData.append("shape", shape);
  //       formData.append("gender", gender);
  //       formData.append("price", price);
  
  //       // Make a POST request to your backend upload endpoint
  //       const response = await fetch("http://localhost:8001/api/admin/product", {
  //         method: "POST",
  //         body: formData,
  //         credentials: "same-origin" // Include credentials (cookies) in the request
  //       });
  
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  
  //       const responseData = await response.json();
  //       console.log("Image uploaded:", responseData);
  //       // Handle the response data as needed (e.g., store image URL in state)
  //     } catch (error) {
  //       console.error("Error uploading image:", error);
  //       // Handle the error gracefully
  //     }
  //   }
  // };
  

  return (
    <div className="bg-gray-500 p-4">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Pothiwal Opticals
        </h1>
        <h2 className="text-lg text-gray-800 mt-2">
          Add Products
        </h2>
      </div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md bg-gray-300">
        <form onSubmit={handleUpload}>
          {/* Image Upload Field */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Image Upload
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="border rounded-md py-2 px-3 w-full"
              onChange={handleFileChange}
            />
          </div>

          {/* Category Selection Field */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="shape"
              name="shape"
              className="border rounded-md py-2 px-3 w-full"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border rounded-md py-2 px-3 w-full"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>

          {/* Shape Field */}
          <div className="mb-4">
            <label
              htmlFor="shape"
              className="block text-gray-700 font-bold mb-2"
            >
              Shape
            </label>
            <input
              type="text"
              id="shape"
              name="shape"
              className="border rounded-md py-2 px-3 w-full"
              value={shape}
              onChange={(event) => setShape(event.target.value)}
            />
          </div>

          {/* Gender Field */}
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-bold mb-2"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className="border rounded-md py-2 px-3 w-full"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            />
          </div>

          {/* Price Field */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="border rounded-md py-2 px-3 w-full"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
