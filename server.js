require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const axios = require("axios");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const profile = {
  login: "adityabisht02",
  id: 89146189,
  node_id: "MDQ6VXNlcjg5MTQ2MTg5",
  avatar_url: "https://avatars.githubusercontent.com/u/89146189?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/adityabisht02",
  html_url: "https://github.com/adityabisht02",
  followers_url: "https://api.github.com/users/adityabisht02/followers",
  following_url:
    "https://api.github.com/users/adityabisht02/following{/other_user}",
  gists_url: "https://api.github.com/users/adityabisht02/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/adityabisht02/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/adityabisht02/subscriptions",
  organizations_url: "https://api.github.com/users/adityabisht02/orgs",
  repos_url: "https://api.github.com/users/adityabisht02/repos",
  events_url: "https://api.github.com/users/adityabisht02/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/adityabisht02/received_events",
  type: "User",
  site_admin: false,
  name: "Aditya Bisht",
  company: "BML Munjal University",
  blog: "https://adityabisht.netlify.app/",
  location: "Gurugram,Haryana",
  email: null,
  hireable: null,
  bio: "I love building projects and collaborating with other people. I am skilled in fullstack and native android development. Am currently studying blockchain.",
  twitter_username: "AdityaB35550332",
  public_repos: 40,
  public_gists: 0,
  followers: 9,
  following: 8,
  created_at: "2021-08-18T14:17:58Z",
  updated_at: "2023-03-31T20:49:26Z",
};

var githubprofile = {};

function getProfile() {
  axios
    .get("https://api.github.com/users/adityabisht02/starred")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

app.get("/", function (req, res) {
  res.render("index", profile);
});

app.post("/", function (req, res) {
  const username = req.body.username;
  const url = "https://api.github.com/users/" + username;
  // axios
  //   .get(url)
  //   .then(function (response) {
  //     // handle success
  //     githubprofile = response.data;
  //     console.log(githubprofile);

  //     res.render("resume1", githubprofile);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });

  res.render("resume1", profile);
});

app.get("/resume", function (req, res) {
  res.render("resume1", profile);
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
