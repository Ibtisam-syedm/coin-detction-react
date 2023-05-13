import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [coins, setCoins] = useState(null);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0]; // Get the selected file

        // Validate file type (optional)
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedTypes.includes(file.type)) {
            alert('Please select a JPEG, JPG or PNG image.');
            return;
        }

        setSelectedImage(file);

        // Create form data
        const formData = new FormData();
        formData.append('image', file);
        console.log(formData);

        // Send POST request to Flask API
        try {
            const response = await axios.post('https://coin-detection.onrender.com/process-image', formData);
            setCoins(response.data)
            console.log(response);
            // Handle the response
            // ...
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
          {selectedImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          )}
          <h2>Answer : {JSON.stringify(coins)}</h2>
        </div>
    );
};

export default ImageUpload;
