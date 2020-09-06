const express= require('express');
const app= express()
const mongodbclient=require('mongodb').MongoClient
const url="mongodb://localhost:27017"
    app.use(express.json())
    app.listen(3000,()=>
    {

console.log("Listening...");
    })



    mongodbclient.connect(url,(err,db)=>{

        if(err)
        {
            console.log("Error")

        }
        else
        {
            const mydb=db.db("mydb")
            const collection=mydb.collection('mytable')
            
            app.post('/signup',(req,res)=>{
                const newUser={
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                }
                const query={email:newUser.email}
                collection.findOne(query,(err,result)=>{
                    if(result==null)
                    {
                        collection.insertOne(newUser,(err,result)=>{
                            res.status(200).send()
                        })
                    }
                    else{
                        res.send(200).send()
                    }

                })
            })

            app.post('/login', (req, res) => {

                const query = {
                    email: req.body.email, 
                    password: req.body.password
                }
    
                collection.findOne(query, (err, result) => {
    
                    if (result != null) {
    
                        const objToSend = {
                            name: result.name,
                            email: result.email
                        }
    
                        res.status(200).send(JSON.stringify(objToSend))
    
                    } else {
                        res.status(404).send()
                    }
    
                })
    
            })
    

        }
    })



    

