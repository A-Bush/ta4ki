var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var USERS_COLLECTION = "users";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
// ***WARNING*** do not change MONGODB_URI in case of death from anal destruction
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});


function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}


// USERS API ROUTES HANDLING


/*
* User DB proto
* {
*   "_id": <ObjectID>,   auto
*   "name": <string>,   required
*   "email" <string>,
*   "phone": <string>,   required
*   "dateCreate": <date>,       auto
*   "dateUpdate" <date>,    auto
*   "ads": [
*      ad_id_0 <string>,
*      ad_id_1 <string>
*   ]
* }
* */


// Get all users from DB
app.get("/api/users", function (req, res) {
  db.collection(USERS_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get users.");
    } else {
      res.status(200).json(docs);
    }
  });
});


// Post users in DB
app.post("/api/users", function (req, res) {
  var newUser = req.body;

  newUser.date = new Date();


  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }
  // if (!req.body.phone) {
  //   handleError(res, "Invalid user input", "Must provide a phone.", 400);
  // }

  //TODO: add another required fields


  db.collection(USERS_COLLECTION).insertOne(newUser, function (err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new user.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/users/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */



// Get ONE user by ID
app.get("/api/users/:id", function (req, res) {
  db.collection(USERS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get user");
    } else {
      res.status(200).json(doc);
    }
  });
});


// Update ONE user by ID
app.put("/api/users/:id", function (req, res) {
  var updateUser = req.body;
  delete updateUser._id;

  db.collection(USERS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateUser, function(err, user) {
    if (err) {
      handleError(res, err.message, "Failed to update user");
    } else {
      updateUser._id = req.params.id;
      res.status(200).json(updateUser);
    }
  });
});


// Delete ONE user
app.delete("/api/users/:id", function (req, res) {
  db.collection(USERS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete user");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});
