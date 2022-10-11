// import React , {useState} from 'react';
// import S3 from 'aws-s3';
// import {Buffer} from 'buffer'


// const config = {
//     bucketName: process.env.AWS_BUCKET_NAME,
//     // dirName: 'photos', /* optional */
//     region: 'ca-central-1',
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     s3Url: 'https://s3.ca-central-1.amazonaws.com/', /* optional */
// }
// const S3Client = new S3(config)
// const newFileName = 'testfile';

// export default function ImageUpload(){
    
//     const [selectedFile, setSelectedFile] = useState('');
    
//     const handleFileInput = (e) => {
//         setSelectedFile(e.target.files[0]);
//     }
    
//     const handleUpload = async (file) => {
//         window.Buffer = window.Buffer || require("buffer").Buffer;
      
//     await S3Client.uploadFile(file, newFileName)
//     .then(data => console.log(data)).catch(err => console.error(err))}


//     return <div>
//         <div>React S3 File Upload</div>
//         <input type="file" onChange={handleFileInput}/>
//         <button onClick={() => handleUpload(selectedFile)}> Upload Image</button>
//     </div>
// }