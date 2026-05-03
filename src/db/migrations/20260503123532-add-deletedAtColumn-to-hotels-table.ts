import { QueryInterface } from "sequelize";

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(
      `
        ALTER TABLE hotels 
        ADD COLUMN deleted_At TIMESTAMP DEFAULT NULL; 
      `
    )
  },

  async down (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(
      `
        ALTER TABLE hotels 
        DROP COLUMN deleted_At;
      `
    )
  }
};
