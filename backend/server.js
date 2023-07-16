
import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { uploadFileToFirebase } from './firebase.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.fields([{name: 'file'}, {name: 'json'}]), async (req, res) => {
  try {
        console.log(req.files['file'][0]);
        // const renamedFile = await renameFile(req.file);
        const downloadURL = await uploadFileToFirebase(req.files['file'][0]);
        return res.status(201).json({message: 'File uploaded successfully. Download URL: ' + downloadURL});
  } catch (error) {
        return res.status(500).json({message: 'Error uploading file: ' + error});
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});