import * as databasejs from "database-js";

export abstract class DatabaseLinkedObject
{
    private readonly tableName : string;
    protected readonly connection : databasejs.Connection;
    private readonly getQuery_str : string;
    private readonly updateQuery_str : string;

    private readonly getQuery_prep : databasejs.PreparedStatement;
    private readonly updateQuery_prep : databasejs.PreparedStatement;

    //The rowID of the database item
    readonly rowID : number;
    
    //Refreshes the current item from the DB
    async refresh() : Promise<void>
    {

    }
    
    //Saves any changes to the item to the DB
    async save() : Promise<void>
    {

    }

    //The userID of the user who created the rule
    private _createdBy : string;
    //The userID of the user who last modified the rule
    private _modifiedBy : string;

    //The time at which the rule was created
    private _createdAt : Date;
    //The time at which the rule was last modified
    private _modifiedAt : Date;

    constructor(tableName : string, fieldList : string[])
    {
        this.tableName = tableName;
        
    }

    get createdBy() : string
    {

    }
}