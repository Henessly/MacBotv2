export interface DatabaseLinkedObject
{
    //The rowID of the database item
    readonly rowID : number;
    
    //Refreshes the current item from the DB
    refresh() : Promise<void>;
    
    //Saves any changes to the item to the DB
    save() : Promise<void>;
}