import pool from "../database/pg.js";

export const getAllOrders = (req, res) => {
    pool.query("SELECT * FROM orders")
    .then(data => res.status(200).json({orders: data.rows}))
    .catch(err => res.status(500).json(err))
}

export const getSingleOrder = (req, res) => {
    const { id } = req.params
    pool.query("SELECT * FROM orders WHERE id=$1", [id])
    .then(data => {
        if (data.rowCount == 0) {
            res.status(404).send("No order found matching this id.")
        } else {
            res.status(200).json(data.rows[0])
        }
    })
    .catch(err => res.status(500).json(err));
};