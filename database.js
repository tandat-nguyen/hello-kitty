const mongoose = require('mongoose');


module.exports = class Database {
  static async init() {
    await mongoose.connect('mongodb://root:Admin123@ds149433.mlab.com:49433/heroku_kmrs92s3',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    const Cat = mongoose.model('Cat', { name: String });

    const kitty = new Cat({ name: 'Zildjian' });
    const newKitty = await kitty.save();
    console.log(newKitty.name + ': meow');
  }
}