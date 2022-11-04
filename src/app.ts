import express from 'express';

import productsRouter from './router/products.router';
import usersRouter from './router/users.router';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
