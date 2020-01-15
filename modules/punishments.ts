import * as databasejs from "database-js"
import * as Discord from "discord.js"

import {client} from "../Discord-Bot-Core/bot";
import { DatabaseBackedObject } from "../src/types";

// import * as dbConfig from "../dbConfig.json";

let connection : databasejs.Connection;

//Describes a rule 
export class rule extends DatabaseBackedObject
{
    protected _rowID : number;

    get rowID() : number {
        return this._rowID;
    }

    ruleTitle : string;
    ruleBody : string;
    defaultPoints : number;
    minPoints : number;
    maxPoints : number;
    ruleActive : boolean;
}

export class punishmentInstance //extends punishment
{

}

// export async function connectDB()
// {
//     connection = new databasejs.Connection(
//         "mysql://"
//         + dbConfig.user
//         + ":" 
//         + dbConfig.password 
//         + "@"
//         + dbConfig.host
//         + "/"
//         + dbConfig.dbName
//     );
// }

export async function getUserPoints()
{

}
