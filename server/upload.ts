import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import config from 'config';

const s3 = new AWS.S3({
  accessKeyId: config.get('AWSAccessKeyId'),
  secretAccessKey: config.get('AWSSecretKey'),
});

export const uploadFile = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.get('AWSBucket'),
    // eslint-disable-next-line @typescript-eslint/unbound-method
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (_req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (_req, _file, cb) {
      cb(null, Date.now().toString() + '-profileImage.png');
    },
  }),
}).single('image');

export const deleteFile = async (fileLocation: string): Promise<void> => {
  const Bucket: string = config.get('AWSBucket');
  const Key: string = fileLocation;
  const params = {
    Bucket,
    Key,
  };
  //1594122313729-profileImage.png this is the previos name. remember to check if deleted
  //1594122420180-profileImage.png new version
  await s3.deleteObject(params).promise();
  console.log('Deleted!');
};
