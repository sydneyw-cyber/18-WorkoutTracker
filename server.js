const mongoose =  require("mongoose");
const express = require("express");
const logger = require("morgan");
const PORT = 3000;

const app= express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


//Routes

app.use(reqiure("./routes/apiRoutes.js"));

app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {

    console.log (`App running on port ${PORT}!`);
});