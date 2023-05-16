import mongoose from 'mongoose';

const connectDB = async () => {

  mongoose.set('strictQuery', true);
  
  try {
    
    const connection = await mongoose.connect( process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });

    const url = `${connection.connection.host}: ${connection.connection.port}`;
    console.log('MongoDB conectando en: ',url);

  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }

};

export default connectDB;
