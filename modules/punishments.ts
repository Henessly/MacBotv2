import * as databasejs from "database-js"
import * as Discord from "discord.js"

import * as types from "../src/types";
import {client} from "../Discord-Bot-Core/bot";

import * as dbConfig from "../dbConfig.json";

let connection : databasejs.Connection;

//Describes a rule 
export class rule extends types.DatabaseLinkedObject
{
    ruleTitle : string;
    ruleBody : string;
    defaultPoints : number;
    minPoints : number;
    maxPoints : number;
    ruleActive : boolean;

    async refresh() : Promise<boolean>
    {
        return false;
    }

    async save() : Promise<boolean>
    {
        return false;
    }
}

export class punishmentInstance extends punishment
{

}

export async function connectDB()
{
    connection = new databasejs.Connection(
        "mysql://"
        + dbConfig.user
        + ":" 
        + dbConfig.password 
        + "@"
        + dbConfig.host
        + "/"
        + dbConfig.dbName
    );
}

export async function getUserPoints()
{

}
