export abstract class DatabaseBackedObject
{
    //The state of the object, can be await'd 
    protected _ready : Promise<void>;

    //The rowID of the database item
    protected _rowID : number;

    

    //The userID of the user who created the rule
    protected _createdBy : string;
    //The userID of the user who last modified the rule
    protected _modifiedBy : string;

    //The time at which the rule was created
    protected _createdAt : Date;
    //The time at which the rule was last modified
    protected _modifiedAt : Date;

    get rowID() : number {
        return this._rowID;
    }

    get ready() : Promise<void> {
        return this._ready;
    }

    get createdBy() : string {
        return this._createdBy;
    }
    
    get modifiedBy() : string {
        return this._modifiedBy;
    }

    DatabaseBackedObject(rowID : number)
    {
        this._rowID = rowID;

        this.refresh();
    }

    //Executes a query to retrieve the item from the DB with rowID (number)
    protected abstract async loadFromDatabase();

    //Refreshes the current item from the DB
    async refresh() : Promise<void>
    {
        this._ready = this.loadFromDatabase();
        return this.ready;
    }
    
    //Executes a query to save the item to the DB (based on rowID)
    protected abstract async saveToDatabase();

    //Saves any changes to the item to the DB
    async save(modifiedBy : string) : Promise<void>
    {
        //TODO: Preform some check to validate 'modifiedBy'
        this.
        return this.saveToDatabase();
    }
}