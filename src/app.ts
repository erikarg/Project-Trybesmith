import express from 'express';

import productsRoute from './routes/products.route';
import usersRoute from './routes/users.route';
import ordersRoute from './routes/orders.route';
import authRoute from './routes/auth.route';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);
app.use('/login', authRoute);

export default app;
