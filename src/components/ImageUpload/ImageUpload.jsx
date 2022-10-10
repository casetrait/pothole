import React ,{useState, useRef} from 'react';
import {S3} from "@aws-sdk/client-s3";

export default function ImageUpload(props) {
    

const S3_BUCKET ='routeticket';
const REGION ='ca-central-1';
const S3_BASE_URL='s3.ca-central-1.amazonaws.com'

const s3Client = new S3({
    region:REGION,    
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket:S3_BUCKET,

})


const [file, setFile] = useState(null)


const onChangeHandler=(e)=>{

    setFile(e.target.files[0])

}

const handleClick=()=>{}

// ///Other code here
// S3.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// })

// const myBucket = new S3({
//     params: { Bucket: S3_BUCKET},
//     region: REGION,
// })

// const UploadImageToS3WithNativeSdk = () => {

//     const [progress , setProgress] = useState(0);
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileInput = (e) => {
//         setSelectedFile(e.target.files[0]);
//     }

//     const uploadFile = (file) => {

//         const params = {
//             ACL: 'public-read',
//             Body: file,
//             Bucket: S3_BUCKET,
//             Key: file.name
//         };

//         myBucket.putObject(params)
//             .on('httpUploadProgress', (evt) => {
//                 setProgress(Math.round((evt.loaded / evt.total) * 100))
//             })
//             .send((err) => {
//                 if (err) console.log(err)
//             })
//     }
    return (<div>
        <input type="file" name="file" onChange={onChangeHandler}/>
        <button OnClick={handleClick}>Upload Image</button>
    </div>
    );
}