import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.get("/about", (req, res) => (
    res.send("This is the About page.");
));

app.get("/contact", (req, res) => {
    res.send("Contact: david@example.com")
})























// import express from "express";

// const app = express();

// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello David!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });