// const express = require("express");
// const multer = require("multer");
// const { protectRoutes } = require("../Middleware/authMiddleware");
// const { uploadFile } = require("../Controllers/uploadController");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log("file Is Upload", file);
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);

//     // console.log("file Name", file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// const router = express.Router();
// router.use(protectRoutes);

// router.post("/file", upload.single("file"), uploadFile);

// module.exports = {
//   uploadRouter: router,
// };

// const express = require("express");
// const { imageHandler } = require("../Controllers/uploadController");
// const { protectRoutes } = require("../Middleware/authMiddleware");
// const router = express.Router();

// router.use(protectRoutes);

// router.post("/file", async (req, res) => {
//   try {
//     const { secure_url, public_id } = await imageHandler(req, res);

//     res.status(200).json({ success: true, url: secure_url, public_id });
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     res.status(500).json({ success: false, error: "Image upload failed" });
//   }
// });
// module.exports = {
//   uploadRouter: router,
// };

const express = require("express");
const { imageHandler } = require("../Controllers/uploadController");
const { protectRoutes } = require("../Middleware/authMiddleware");
const router = express.Router();

router.use(protectRoutes);

router.post("/file", async (req, res) => {
  try {
    const result = await imageHandler(req, res);

    // Log the result to see its structure
    console.log("Cloudinary upload result:", result);

    // Check if secure_url is defined
    if (!result || !result.secure_url) {
      console.error("Secure URL is undefined in Cloudinary response:", result);
      return res.status(500).json({ success: false, error: "Image upload failed" });
    }

    // Destructure the response
    const { secure_url, public_id } = result;

    res.status(200).json({ success: true, url: secure_url, public_id });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, error: "Image upload failed" });
  }
});

module.exports = {
  uploadRouter: router,
};
