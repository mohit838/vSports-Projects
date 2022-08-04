const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middlewire
app.use(cors());

// We want JSON data from frontend
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.${process.env.DB_ID}.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const databaseName = client.db("gSports");

    // New Player Collection
    const newPlayerCollections = databaseName.collection("Players");

    // New Team Collection
    const newTeamCollections = databaseName.collection("Teams");

    // User Collection
    const userInfoCollections = databaseName.collection("userProfiles");

    // ======================================
    // Users Data
    // ======================================

    // Get User Admin Role Info
    app.get("/api/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await userInfoCollections.findOne(query);

      let isAdmin = false;
      let isMod = false;

      if (user?.role === "admin") {
        isAdmin = true;
      }

      if (user?.role === "moderator") {
        isMod = true;
      }

      // Sending Acknowledgement to Frontend
      res.send({ admin: isAdmin, moderator: isMod });
    });

    // Get User Moderator Role Info
    app.get("/api/mod-list", async (req, res) => {
      const query = { role: "moderator" };
      const allMod = userInfoCollections.find(query);
      const allModsData = await allMod.toArray();

      // Sending Acknowledgement to Frontend
      res.send(allModsData);
    });

    // Post User Info
    app.post("/api/user", async (req, res) => {
      const newUserInfo = req.body;
      const result = await userInfoCollections.insertOne(newUserInfo);

      // Sending Acknowledgement to Frontend
      res.json(result);
    });

    // ======================================
    // Creating Role
    // ======================================

    // Create Admin
    app.put("/api/user/admin", async (req, res) => {
      const user = req.body;
      const filter = { vid: user.getGId };
      const updateDoc = { $set: { role: "admin" } };
      const result = await userInfoCollections.updateOne(filter, updateDoc);

      // Sending Acknowledgement to Frontend
      res.json(result);
    });

    // Create Moderator
    app.put("/api/user/moderator", async (req, res) => {
      const user = req.body;
      const filter = { vid: user.getGId };
      const updateDoc = { $set: { role: "moderator" } };
      const result = await userInfoCollections.updateOne(filter, updateDoc);

      // Sending Acknowledgement to Frontend
      res.json(result);
    });

    // ======================================
    // New Players
    // ======================================

    // Get All Players
    app.get("/api/players", async (req, res) => {
      const allPlayers = newPlayerCollections.find({});
      const allPlayersData = await allPlayers.toArray();
      res.send(allPlayersData);
    });

    // Create new player
    app.post("/api/new-player", async (req, res) => {
      const newPlayerData = req.body;
      const result = await newPlayerCollections.insertOne(newPlayerData);

      // Sending Acknowledgement to Frontend
      res.json(result);
    });

    // ======================================
    // New Teams
    // ======================================

    // Get All Teams
    app.get("/api/teams", async (req, res) => {
      const allTeams = newTeamCollections.find({});
      const allTeamsData = await allTeams.toArray();
      res.send(allTeamsData);
    });

    // Create new Teams
    app.post("/api/new-team", async (req, res) => {
      const newTeamsData = req.body;
      const result = await newTeamCollections.insertOne(newTeamsData);

      // Sending Acknowledgement to Frontend
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// To Check Get API
app.get("/", (req, res) => {
  res.send("vSports Tutorial Server!");
});

// Listening Port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
