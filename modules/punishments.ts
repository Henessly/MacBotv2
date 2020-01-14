import * as databasejs from "database-js"
import * as Discord from "discord.js"

import {client} from "../Discord-Bot-Core/bot";

// import * as dbConfig from "../dbConfig.json";

let connection : databasejs.Connection;

//Describes a rule 
export class rule
{
    //The rowID of the database item
    readonly _rowID : number;



    get rowID() : number
    {
        return this._rowID;
    }
    set rowID() : number
    {
        this._rowID
    }

    ruleTitle : string;
    ruleBody : string;
    defaultPoints : number;
    minPoints : number;
    maxPoints : number;
    ruleActive : boolean;

    //The userID of the user who created the rule
    createdBy : string;
    //The userID of the user who last modified the rule
    modifiedBy : string;

    //The time at which the rule was created
    createdAt : Date;
    //The time at which the rule was last modified
    modifiedAt : Date;

    async refresh() : Promise<boolean>
    {
        return false;
    }

    async save() : Promise<boolean>
    {
        return false;
    }
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
