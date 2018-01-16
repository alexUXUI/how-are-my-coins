/**
 * 
 * @param {*} knex 
 * @param {*} Promise 
 * 
 * When using .json data type for a column, you must stringify it before you give it to knex
 * 
 * knex.table('users')
 * .where({id: 1})
 * .update({json_data: JSON.stringify(mightBeAnArray)});
 */

exports.up = (knex, Promise) => {  
  return Promise.all([
  ]);
};

exports.down = (knex, Promise) => {  
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('altfolios')
  ]);
};

/**
 * 
 * @param {*} knex 
 * @param {*} Promise 
 * 
 * When using .json data type for a column, you must stringify it before you give it to knex
 * 
 * knex.table('users')
 * .where({id: 1})
 * .update({json_data: JSON.stringify(mightBeAnArray)});
 */

// exports.up = (knex, Promise) => {  
//   return Promise.all([
//     knex.schema.createTableIfNotExists('users', table => {
//       table.increments('id').primary();
//       table.string('username');
//       table.timestamps();
//     }),
//     knex.schema.createTableIfNotExists('altfolios', table => {
//       table.increments('id').primary();
//       table.integer('username').references('id').inTable('users').onDelete('CASCADE');
//       table.json('currencies');
//       table.timestamps();
//     })
//   ]);
// };

// exports.down = (knex, Promise) => {  
//   return Promise.all([
//     knex.schema.dropTable('users'),
//     knex.schema.dropTable('altfolios')
//   ]);
// };