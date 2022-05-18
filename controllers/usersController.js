import pool from "../database/pg.js";

export const getAllUsers = (req, res) => {
    pool.query("SELECT * FROM users")
    .then(data => res.status(200).json({users: data.rows}))
    .catch(err => res.status(500).json(err))
};


export const getSingleUser = (req, res) => {
    const { id } = req.params
    pool.query("SELECT * FROM users WHERE id=$1", [id])
    .then(data => {
        if (data.rowCount == 0) {
            res.status(404).send("No user found matching this id.")
        } else {
            res.status(200).json(data.rows[0])
        }
    })
    .catch(err => res.status(500).json(err));
};