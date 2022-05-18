import pool from "../database/pg.js";

export const getAllOrders = (req, res) => {
    pool.query("SELECT * FROM orders")
    .then(data => res.status(200).json({orders: data.rows}))
    .catch(err => res.status(500).json(err))
}