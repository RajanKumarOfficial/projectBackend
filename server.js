const app = require("./app.js");

const port = 4003 || process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on Port ${port}`);
});
