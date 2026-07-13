import dns from "dns";
import { MongoClient, ServerApiVersion } from "mongodb";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connect = (collection) => {
  const dbName = process.env.DB_NAME;
  return client.db(dbName).collection(collection);
};
