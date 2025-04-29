import cloudinary from '../config/cloud.config.js';

// This handles all the fileUpload logic for uploading files to Cloudinary
// It uses the Cloudinary SDK to upload files and return the URL and public ID of the uploaded file

const uploadToCloudinary = async (filePath, folder = 'posts') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: 'image'
    });

    return {
      url: result.secure_url,
      public_id: result.public_id
    };
  } catch (error) {
    throw new Error('Cloudinary upload failed: ' + error.message);
  }
};

export default uploadToCloudinary;
