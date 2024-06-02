const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());
// cors
app.use(cors());


// database connections
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.auajn7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let recipeCollection;
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const productDB = client.db("productDB");
    recipeCollection = productDB.collection("recipeCollection");
    console.log("connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process if the connection fails
  }
}
run().catch(console.dir);


//api endpoints

app.post('/recipe', async(req, res) => {
try {
  const recipe = await req.body;
  const result = await recipeCollection.insertOne({recipe})
  console.log(result)
  res.send(result)
} catch (error) {
  console.log(error)
}
})

app.get('/', (req, res) => {
  res.send("Server running on web page")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})