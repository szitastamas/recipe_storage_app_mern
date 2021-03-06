const mongoose = require('mongoose');
const config = require('config');
const connectionString = process.env.NODE_ENV === 'production' ? process.env.mongoURI : config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err);
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
