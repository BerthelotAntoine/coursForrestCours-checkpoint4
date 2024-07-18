/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class CourseRepository extends AbstractRepository {
  constructor() {
    super({ table: "course" });
  }

  async create(course) {
    const { name, descriptif, distance, date, user_id, city_id, category_id } =
      course;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, descriptif, distance, date, user_id, city_id, category_id) values (?, ?, ?, ?, ?, ?)`,
      [name, descriptif, distance, date, user_id, city_id, category_id]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.name, u.descriptif, u.distance u.date, u.user_id, u.city_id, u.category_id from ${this.table} AS u`
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, user) {
    const { name, descriptif, distance, date, user_id, city_id, category_id } =
      user;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      name = ?,
      descriptif = ?,
      distance = ?,
      date = ?,
      user_id = ?,
      city_id = ?,
      category_id = ?
      WHERE id = ?`,
      [name, descriptif, distance, date, user_id, city_id, category_id, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = CourseRepository;
