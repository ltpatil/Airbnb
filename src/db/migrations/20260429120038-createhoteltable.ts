import { QueryInterface } from "sequelize";
export default{
  async up (queryInterface : QueryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    /**
     * if you are reading this and feel like i should have used sequelize query so that if somebody tries to use it for PGSQL
     * i could its just its e learning so my code my rules ..
     */

    await queryInterface.sequelize.query(
      `
        CREATE TABLE IF NOT EXISTS hotels(
          id INT AUTO_INCREMENT PRIMARY KEY,
          name  VARCHAR(255) NOT NULL,
          address VARCHAR(255) NOT NULL,
          location VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
      ` 
    )
    
  },

  async down (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(
      `
        DROP TABLE  IF EXISTS hotels;
      `
    )
  }
};
