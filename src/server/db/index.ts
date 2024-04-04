

// connect the db

import { connect , connection  } from 'mongoose'


// mongodb connection 

async function connectToDB (){
    
    // connected connect event 
    connection.on('connected',()=>{
        console.log('connected to db');
    });

    // error connect event 
    connection.on('error',()=>{
        console.log('something went wrong in db connection');
    });

    // disconnected connect event 
    connection.on('disconnected',()=>{
        console.log('db disconnected');
    })

    const dbName = process.env.MONGODB_DB_Name as string || 'FileMeDev'
    try{
        await connect(process.env.MONGODB_URI as string,{dbName:"prechattest"});
    }catch(err){
        console.log('something went wrong in db connection');
        process.exit(0);
    }
}

export {connectToDB} ;