import { dataSource } from "./db/config";
import { apolloServer } from "./app";
import "reflect-metadata";
import { app } from "./db/Firebase/config";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
dataSource
  .initialize()
  .then(() => console.log("Conexión establecida con db SQL"))
  .catch((error) => console.log("Error conexion SQL ", error));
const db = getFirestore(app);
apolloServer.listen().then(({ url }) => {
  console.log(`Server ready alt ${url}`);
});
