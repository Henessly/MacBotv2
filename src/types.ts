export abstract class DatabaseLinkedObject
{
    

    //The rowID of the database item
    readonly rowID : number;
    
    //Refreshes the current item from the DB
    abstract refresh() : Promise<boolean>;
    
    //Saves any changes to the item to the DB
    abstract save() : Promise<boolean>;

    //The userID of the user who created the rule
    createdBy : string;
    //The userID of the user who last modified the rule
    modifiedBy : string;

    //The time at which the rule was created
    createdAt : Date;
    //The time at which the rule was last modified
    modifiedAt : Date;
}