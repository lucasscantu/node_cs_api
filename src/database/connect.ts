/*import { createConnection } from "typeorm"
createConnection().then(() => console.log("banco de dados conectado")).catch(() => console.log("NÃO conectou no banco de dados... :("))*/
import { createConnection } from 'typeorm';
export async function setup() {
    //console.log(__dirname);
    await createConnection().then(() => console.log('Conexão com banco de dados inicializada!!!'))
}