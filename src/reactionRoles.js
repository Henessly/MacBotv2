const global = require("./../global.js");

//TODO: Save reaction handlers to a file/database/etc. to persist between reboots

exports.getRoleIDsByName = function(serverID, roleList)
{
    let server = global.client.guilds.get(serverID);

    let listOut = [];

    roleList.forEach( roleName => {
        let role = server.roles.find( r => r.name == roleName);
        if(!role) throw new Error("Role \"" + roleName + "\" not found!");
        listOut.push(role.id);
    });

    return listOut;
}

exports.getEmojiIdentifiersByName = function(emojiList)
{
    let listOut = [];

    global.client.emojis.tap( e => {
        console.log(e);
    })

    emojiList.forEach( emojiName => {
        let emoji = global.client.emojis.find( e => e.name == emojiName);
        if(!emoji) throw new Error("Emoji \"" + emojiName + "\" not found!");
        listOut.push(emoji.identifier);
    });

    return listOut;
}

//Manages a set of reactions that users can use to sign up for roles
exports.ReactionRolesHandler = function()
{
    //The emoji identifiers the bot uses - blue numbers 1-9 and A-K
    let emojiButtonIdentifiers = ["1%E2%83%A3", "2%E2%83%A3", "3%E2%83%A3", "4%E2%83%A3", "5%E2%83%A3", "6%E2%83%A3", "7%E2%83%A3", "8%E2%83%A3", "9%E2%83%A3", "%F0%9F%87%A6", "%F0%9F%87%A7", "%F0%9F%87%A8", "%F0%9F%87%A9", "%F0%9F%87%AA", "%F0%9F%87%AB", "%F0%9F%87%AC", "%F0%9F%87%AD", "%F0%9F%87%AE", "%F0%9F%87%AF", "%F0%9F%87%B0"];    //A list of emoji used as reacts, used to map buttons to roles and vice versa

    let message;    //The message to watch for reacts on
    let collector;  //The reaction collecto
    let roles = [];      //The roles to assign

    //Sets up the reaction handler
    // `messageToWatch` is the message that people will react to, and the bot will listen to
    // `roleIDs` is an array of roles 
    async function init(messageToWatch, roleIDs, emojiIdentifiers)
    {
        if(emojiIdentifiers != null) emojiButtonIdentifiers = emojiIdentifiers;

        message = messageToWatch;

        //Translate the roleIDs into role objects
        for(let i = 0; i < roleIDs.length; i++)
        {
            let role = message.channel.guild.roles.get(roleIDs[i]);

            if(role == undefined) throw new Error("Unable to find role with ID \"" + roleIDs[i] + "\"");

            roles.push(role);
        }

        let tapPromises = [];

        //Clear any existing reactions
        message.reactions.tap( async r => {
            tapPromises.push(new Promise( async (resolve, reject) => {
                //"seed" our user list
                await r.fetchUsers();
                //Clear all users per-reaction (Loops bc we may need to fetch reacts in some cases)
                while(r.users.size > 0)
                {
                    let reactClearPromises = [];
                    await r.fetchUsers();
                    
                    //Clear out the users we just got
                    r.users.tap( async u => {
                        //If it's one of our reactions, make sure it's within the range we expect
                        if(u.id == global.client.id)
                        {
                            let reactID = emojiButtonIdentifiers.indexOf(r.emoji.identifier);

                            if(reactID == -1)
                            {   //If the reaction is not present in the list
                                //Do nothing, continue and let the reaction be removed
                            }
                            else
                            {
                                if(reactID < roles.length)
                                {
                                    return; //Exit without removing the react if it's one of the ones that should be there
                                }
                            }
                        }
                        reactClearPromises.push(r.remove(u));
                    });

                    //Make sure all the reacts we got were cleared before we start fetching more
                    await Promise.all(reactClearPromises);
                }
                resolve();
            }));
        });

        //Wait for all 'taps' to finish running
        await Promise.all(tapPromises);
        console.log("Done removing reactions");

        //Returns true if the reaction identified by `identifier` is present on the message
        function isReactionPresent(identifier)
        {
            let present = false;
            message.reactions.tap( r => {
                if(r.emoji.identifier == identifier) present = true;
            });

            return present;
        }

        //Make sure the reaction 'buttons' exist for each item
        for(let i = 0; i < roles.length; i++)
        {
            if(! isReactionPresent(emojiButtonIdentifiers[i]))
            {
                await message.react(emojiButtonIdentifiers[i]);
            }
        }

        //Setup a reaction collector to handle new reacts
        collector = await message.createReactionCollector( () => true);
        collector.on('collect', handleReact);
        console.log("Collector created");
    }

    //Handles a event from the collector
    async function handleReact(reactEvent)
    {
        //TODO: do spam-detection here to cut people off if they interact too much
        reactEvent.users.tap( u => {
            handleReactForUser(reactEvent, u);
        });
    }

    //Handles the reaction for a given user, toggling the role they clicked as necessary
    async function handleReactForUser(reactEvent, user)
    {
        if(user.id == global.client.user.id) return; //Don't handle the bot's reactions

        let id = emojiButtonIdentifiers.indexOf(reactEvent.emoji.identifier);

        if(
            id != -1                //Make sure the reaction corresponds to an ID
            && id < roles.length     //Make sure the reaction corresponds to a role that exists
        )
        {
            console.log("Accepted reaction");
            //The role that corresponds to that reaction
            let role = roles[id];
            let guildMember = message.channel.guild.members.get(user.id);  //Convert our user into a guild-member
            if(guildMember == undefined) throw new Error("The user who reacted could not be found in the guild's member list!");

            if(guildMember.roles.get(role.id) == undefined)
            {
                //If the user does not have the role, add it
                guildMember.addRole(role);
            }
            else
            {
                //If they have the role, remove it
                guildMember.removeRole(role);
            }

        }
        else console.log("Rejected reaction");

        reactEvent.remove(user);
    }
    
    //Sends a new message and creates the prompt for it
    // 
    this.createNew = async function(prompt, channel, roles, emojiIdentifiers)
    {
        throw new Error("Not yet implemented"); //TODO: Implimented
    }

    //Starts a reaction-role handler from an existing message (i.e. starting one after a reboot)
    this.createFromExisting = async function(messageToWatch, roleIDs, emojiIdentifiers)
    {
        await init(messageToWatch, roleIDs, emojiIdentifiers);
    }

    return this;
}