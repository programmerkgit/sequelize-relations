export = {
  'development': {
    'username': 'root',
    'password': null,
    'database': 'sequelize_relations',
    'host': '127.0.0.1',
    'dialect': 'mysql',
  },
  // 'development': {
  //   'username': 'sqladmin',
  //   'password': '<pass>',
  //   'database': 'azure-function-test',
  //   'host': 'azure-function-test.database.windows.net',
  //   'dialect': 'mssql',
  //   'dialectOptions': {
  //     'encrypt': true
  //   }
  // },
  'test': {
    'username': '',
    'password': '',
    'database': '',
    'host': '',
    'dialect': 'mysql',
  },
  'production': {
    'username': 'root',
    'password': null,
    'database': 'sequelize_relations',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorsAliases': false,
  },
}
