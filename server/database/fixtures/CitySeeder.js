const cities = require("../data/city.json");
const AbstractSeeder = require("./AbstractSeeder");

class CitySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "city", truncate: true });
  }

  run() {
    cities.forEach((city, index) => {
      this.insert({
        name: city.name,
        address: city.address,
        latitude: city.latitude,
        longitude: city.longitude,
        refName: `city${index + 1}`,
      });
    });
  }
}

module.exports = CitySeeder;
