require("dotenv").config();
const express = require('express');
const app = express();
const logger = require('morgan');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// Connection
const mongoose = require('mongoose');


//

// const http = require('http')
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World! NodeJS \n');
// });



// added from https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#install-the-application

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// getting DB and URI from process.env by destructuring
const { MONGODB_URI } = process.env;

// Connection
const url = `${MONGODB_URI}`;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to the Mongo database`))
  .catch((err) => console.log(`Issues connecting to the Mongo database`));

app.use(logger('dev'));
// const bodyParser = require('body-parser');


app.use(express.static('public'));
const axios = require('axios');



const formSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  companyName: String,
  email: String,
  phone: Number,
  textBox: String,
});

// and Model
const FormModel = new mongoose.model("forms", formSchema);

app.get('/', (req, res) => {
  res.redirect('/home')
})
app.get('/home', (req, res) => {
  res.render('home.ejs')
})

app.get('/about', (req, res) => {
  res.render('about.ejs')
})

app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio.ejs')
})

app.get('/blog', (req, res) => {
  res.render('blog.ejs')
})

app.get('/projects', (req, res) => {
  res.render('projects.ejs')
})
app.get('/signin', (req, res) => {
  res.render('signin.ejs')
})

app.get('/checkout', (req, res) => {
  res.render('checkout.ejs')
})

app.get('/developments/frontend', (req, res) => {
  res.render('frontend.ejs')
});

app.get('/developments/backend', (req, res) => {
  res.render('backend.ejs')
});

// Beginning of Southpark Characters
//Bring in our data - How we bring it out object? - Destructure
const { characters } = require('./fakeData')
//console.log(characters)

// Use our public folder
app.use(express.static('public'))
// Set view engine
app.set("view engine", "ejs")

// With more than one / in route
app.use('/character', express.static(__dirname + '/public'))



// Routes
app.get('/', (req, res) => {
    // modify when building req.query to send data
    // will use this to build our form
    res.render("home", {data: characters})
})

// Display all characters
app.get('/SPCharacters', (req, res) => {
    res.render("SPCharacters", {data: characters})
})

// Display a character 
app.get('/SPCharacter/:id', (req, res) => {
    // Could say req.params.id - again destructure
    const { id } = req.params
    //console.log(characters[id])
    res.render("SPCharacter", { data: characters[id]})
})


// Display a character using req.query through form
app.get("/id", (req, res) => {
    const { id } = req.query
    res.render("SPCharacter", {data: characters[id]})
})
// End of Southpark Characters

app.get('/json', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      const posts = response.data;
      res.render('json', { posts });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
});

app.get('/', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      const posts = response.data;
      res.render('json', { posts });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
});

app.get('/post/:id', (req, res) => {
  const postId = req.params.id;
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  axios.get(url)
    .then(response => {
      const post = response.data;
      res.render('single-post', { post });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
});
//const port = process.env.PORT || 3000
//app.listen(port, ()=> console.log(`web host on port ${port}`))

// end of added from https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#install-the-application
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.post("/sendData", (req, res) => {
  let tempObj = {};
  for (doggy in req.body) {
    tempObj[doggy] = req.body[doggy];
  }

  FormModel.create(tempObj, (error, result) => {
    if (error) res.send(error.message);
    // res.send(result);
    res.redirect("/postContact");
  });

  // FormModel.create(tempObj, (result, error) 
  // .then((result) => {
  //   res.redirect("/postContact");
  //   console.log(result)
    
  // })
  // .catch((error) => {
  //   res.send(error.message);
  //   console.log(error.message)
  // }))
});

app.get("/postContact", (req, res) => {
  FormModel.find({}, (err, results) => {
    if (err) res.send(err);
    res.render("postContacts.ejs", { data: results });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`phillipmagos.net is listening on port ${port}`));
// end of app.js