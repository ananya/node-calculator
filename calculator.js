const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = 'Invalid operator';
  }

  res.send(`Result: ${result}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});

module.exports = app;