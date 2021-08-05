import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import stripe from 'stripe';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const stripeFunc = stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
    if (error) throw error;
    console.log('server running on port: ' + port);
});

app.post('/payment', (request, response) => {
    const body = {
        source: request.body.token.id,
        amount: request.body.amount,
        currency: 'usd',
    };

    stripeFunc.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            response.status(500).send({ error: stripeErr });
        } else {
            response.status(200).send({ error: stripeRes });
        }
    });
});