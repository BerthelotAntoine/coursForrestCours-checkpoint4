/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const { firstname, lastname, email, password, role_id } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, password , role_id) values (?, ?, ?, ?, ?)`,
      [firstname, lastname, email, password, role_id]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.firstname, u.lastname, u.email, u.password, u.role_id from ${this.table} AS u`
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
    const { firstname, lastname, email, password, role_id } = user;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      firstname = ?,
      lastname = ?,
      email = ?,
      password = ?,
      role_id = ? WHERE id = ?`,
      [firstname, lastname, email, password, role_id, id]
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

module.exports = UserRepository;
