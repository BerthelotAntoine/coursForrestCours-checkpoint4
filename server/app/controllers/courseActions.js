const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const course = req.body;

  try {
    const insertId = await tables.course.create(course);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const course = await tables.course.readAll();

    res.json(course);
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const course = await tables.course.readOneById(req.params.id);

    if (course == null) {
      res.sendStatus(404);
    } else {
      res.json(course);
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const course = req.body;

  try {
    const updated = await tables.course.update(req.params.id, course);

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
    const destroyed = await tables.course.destroy(req.params.id);

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
