const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadStreamToCloudinary = stream => {
  return new Promise((resolve, reject) => {
    const upload_stream = cloudinary.uploader.upload_stream(
      { tags: "buhu_sales" },
      function(err, image) {
        if (err) {
          reject(err);
        } else {
          resolve(image);
        }
      }
    );
    stream.pipe(upload_stream).on("error", error => error);
  });
};

module.exports = { cloudinary, uploadStreamToCloudinary };
