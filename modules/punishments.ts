import * as databasejs from "database-js"
import * as Discord from "discord.js"

import {client} from "../Discord-Bot-Core/bot";

import * as dbConfig from "../dbConfig.json";

let connection : databasejs.Connection;

//Describes a rule 
export class rule
{
    ruleID : number;
    rule : string;
    points : number;
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