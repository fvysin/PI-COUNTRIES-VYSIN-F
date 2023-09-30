const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Activity', {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
       },
       name: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
          is: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/,
       },},
       difficulty: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 1,
         validate: {
           min: 1,
           max: 5,
         },
       },
       duration: {
         type: DataTypes.INTEGER,
         defaultValue: 1,
         validate: {
           min: 1,
           max: 24,
         },
       },
       season: {
         type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
         allowNull: false,
         defaultValue: "Summer",
       },
      //  image: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      //   validate: {
      //       isUrl: true
      //   }
      // }
   },
      { timestamps: false });
};
