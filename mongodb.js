const mongodb = require('mongodb')
const MonngoClient = mongodb.MongoClient
const connectionURL = 'mongodb+srv://osongo:Don33671449@cluster0.bwnow.mongodb.net/taskapp?retryWrites=true&w=majority'

MonngoClient.connect(connectionURL,{useNewUrlParser:true, useUnifiedTopology:true},
	(error,client) => {
		if (error) {
			return console.log('unable to connect to database')
		}
		const db = client.db();
		db.collection("users").insertOne({
			name:"Don",
			age:25,
		});
	})
