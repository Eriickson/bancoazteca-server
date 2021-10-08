import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

export function startMongoose(uri: string): void {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('Conectada');
    })
    .catch((err) => {
      console.log('Error al conectar: ', err);
    });
}
