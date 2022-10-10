import { S3 } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";
import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";

const REGION = "ca-central-1";
const s3Client = new S3Client({ region: REGION });
const params = {
  Bucket: "BUCKET_NAME", // The name of the bucket. For example, 'sample_bucket_101'.
  Key: "KEY", // The name of the object. For example, 'sample_upload.txt'.
  Body: "BODY", // The content of the object. For example, 'Hello world!".
};

// Create an object and upload it to the Amazon S3 bucket.
try {
  const results = await s3Client.send(new PutObjectCommand(params));
  console.log(
    "Successfully created " +
      params.Key +
      " and uploaded it to " +
      params.Bucket +
      "/" +
      params.Key
  );
  return results; // For unit tests.
} catch (err) {
  console.log("Error", err);
}

export { s3Client };
