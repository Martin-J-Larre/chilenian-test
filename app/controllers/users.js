const { httpError } = require('../../utils/helpers/handleError');
const userModel = require('../models/users');

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (er) {
        httpError(res, er)
    }

};

const getItem = () => {


};

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name, age, email
        })
        res.send({ data: resDetail })
    } catch (er) {
        httpError(res, er)
    }

};

const updateItem = () => {};

const deleteItem = () => {};

module.exports = { getItem, getItems, createItem, updateItem, deleteItem }