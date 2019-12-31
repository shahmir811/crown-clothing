const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // it is a native module path

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// =========================== middlewares below ===========================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// =========================== PORT below ===========================
app.listen(port, error => {
  if (error) throw error;
  console.log(`Server is runnign on port: ${port}`);
});

// =========================== Routes below ===========================

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeError, stripeResponse) => {
    if (stripeError) {
      res.status(500).json({ error: stripeError });
    } else {
      res.send(200).json({ success: stripeResponse });
    }
  });
});
