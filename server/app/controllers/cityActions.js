const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const city = req.body;

  try {
    const insertId = await tables.city.create(city);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const city = await tables.city.readAll();

    res.json(city);
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const city = await tables.city.readOneById(req.params.id);

    if (city == null) {
      res.sendStatus(404);
    } else {
      res.json(city);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const city = req.body;

  try {
    const updated = await tables.city.update(req.params.id, city);

    if (updated) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const destroyed = await tables.city.destroy(req.params.id);

    if (destroyed) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  readAll,
  readOneById,
  update,
  destroy,
};
