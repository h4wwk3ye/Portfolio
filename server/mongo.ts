import mongoose from 'mongoose';
import config from 'config';
const mongoURI: string = config.get('mongoURI');

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connectd to mongoDB');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
