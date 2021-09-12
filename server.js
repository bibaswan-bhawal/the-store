import express from 'express';
import path from 'path';
import stripe from 'stripe';
import admin from 'firebase-admin';
import { ApolloServer } from 'apollo-server';

import './env.js'

import { typeDefs } from './schema.js';
import { resolvers } from './resolver.js';

const __dirname = path.resolve();
const port = process.env.PORT || 5000;

const stripeFunc = stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (_, response) => {
        response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

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

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

app.listen(port, error => {
    if (error) throw error;
    console.log('server running on port: ' + port);
});

