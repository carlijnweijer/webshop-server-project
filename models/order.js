"use strict";
const { Model } = require("sequelize");
const orderitem = require("./orderitem");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.user);
      order.belongsToMany(models.product, {
        through: "orderItem",
        foreignKey: "orderId",
      });
    }
  }
  order.init(
    {
      totalEuroCents: DataTypes.INTEGER,
      orderStatus: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
