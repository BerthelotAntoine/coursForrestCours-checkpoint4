const AbstractRepository = require("./AbstractRepository");

class CityRepository extends AbstractRepository {
  constructor() {
    super({ table: "city" });
  }

  async create(city) {
    const { name, adress, latitude, longitude } = city;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, adress, latitude, longitude) values (?, ?, ?, ?, ?)`,
      [name, adress, latitude, longitude]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.name, u.adress, u.latitude, u.longitude from ${this.table} AS u`
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

  async update(id, city) {
    const { name, adress, latitude, longitude } = city;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      name = ?,
      adress = ?,
      latitude = ?,
      longitude = ?,
      category_id = ?
      WHERE id = ?`,
      [name, adress, latitude, longitude, id]
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

module.exports = CityRepository;
