import * as databasejs from "database-js"
import * as Discord from "discord.js"

import * as types from "../src/types";
import {client} from "../Discord-Bot-Core/bot";

import * as dbConfig from "../dbConfig.json";

let connection : databasejs.Connection;

//Describes a rule 
export class rule extends types.DatabaseLinkedObject
{
    constructor()
    {
        super(
            "punishmentpoints",
            [
                "ruleTitle",
                "ruleBody",
                "defaultPoints",
                "minPoints",
                "maxPoints",
                "ruleActive"
            ]
        );


    }

    ruleTitle : string;
    ruleBody : string;
    defaultPoints : number;
    minPoints : number;
    maxPoints : number;
    ruleActive : boolean;

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
