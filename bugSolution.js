const express = require('express');
const app = express();

app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello, world!');
    })
    .catch(err => {
      // Proper error handling in the route itself.      console.error('An error occurred:', err);
      res.status(500).send('Internal Server Error');
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler caught an error:', err);
  res.status(500).send('Internal Server Error');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});