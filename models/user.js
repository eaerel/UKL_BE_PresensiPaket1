'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Menandai kolom 'id' sebagai primary key
        autoIncrement: true, // Menambahkan auto increment
        allowNull: false, // Tidak boleh null
      },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  })
  return user;
}