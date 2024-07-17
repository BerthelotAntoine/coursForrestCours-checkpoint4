const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async create(category) {
    const { course, triathlon } = category;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (course, triathlon) values (?, ?)`,
      [course, triathlon]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.course, u.triathlon from ${this.table} AS u`
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

  async update(id, category) {
    const { course, triathlon } = category;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET
      course = ?,
      triathlon = ?,
      WHERE id = ?`,
      [course, triathlon, id]
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

module.exports = CategoryRepository;
