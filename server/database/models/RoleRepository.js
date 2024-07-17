/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class RoleRepository extends AbstractRepository {
  constructor() {
    super({ table: "role" });
  }

  async create(role) {
    const rolename = role;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (role) values (?)`,
      [rolename]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * from ${this.table} `);
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, role) {
    const { role_id } = role;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      role = ? WHERE id = ?`,
      [role_id, id]
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

module.exports = RoleRepository;
