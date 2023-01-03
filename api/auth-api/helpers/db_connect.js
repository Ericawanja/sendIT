const mssql = require("mssql");
const sqlConfig = require("./Config");

class Connection {
  constructor() {
    this.connectToDB();
  }
  connectToDB = async () => {
    this.pool = await mssql.connect(sqlConfig);
  };
  createRequestObj = async (data = {}) => {
    
  };
  executeRequest = async (storedProcedure, data = {}) => {
    const request = this.createRequestObj(data);
    const response = this.pool.request.execute(storedProcedure).recordset;
  };
}
