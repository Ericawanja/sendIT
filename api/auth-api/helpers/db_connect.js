const mssql = require("mssql");
const sqlConfig = require("./Config");

class Connection {
  constructor() {
    this.connectToDB();
  }
  connectToDB = async () => {
    this.pool = await mssql.connect(sqlConfig);
  };
  createRequestObj = async (requestObj, data = {}) => {
    const keys = Object.keys(data);
    keys.map((name) => {
      
      let value = data[name];
      console.log(name, value);
      requestObj.input(name, value);
    });
    return requestObj;
  };
  executeRequest = async (storedProcedure, data = {}) => {
    const requestObj = await this.pool.request();
    const request = await this.createRequestObj(requestObj, data);
    const response = await (await request.execute(storedProcedure)).recordset;
    return response
  };
}

module.exports = {
  exec: new Connection().executeRequest,
};
