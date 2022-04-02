const express = require('express')
const app = express()
const port = 3000

// For parsing application/json
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

let tasks = [
    {
        "id": 1,
        "description": "Read graph"
    },
    {
        "id": 2,
        "description": "Read 2hrs"
    },
    {
        "id": 3,
        "description": "Read books"
    }
];

// {
//     'id' : 1,
//     'content' : "Todo Content"
// }
let id = 4;
app.get('/',(req,res)=>{
    res.status(200).send(tasks)
})

app.post('/addNewTask',(req,res)=>{
    console.log(req.body)
    if(req.body.content){
        tasks.push({
            // id:id,
            id,
            description: req.body.content
        })
        id++;
        res.status(200).send(tasks)
    }else{
        res.status(400).send({errMsg: "Please send content of task....."})
    }
})
// params => :NAME
app.put('/updateTask/:id',(req,res)=>{
    console.log(req.body)
    if(req.body.content){
        
        // req.params.id
        let f=0;
        for(var i=0;i<tasks.length;i++)
        {
            if(tasks[i].id == req.params.id)
            {
                tasks[i].description = req.body.content
                f=1;
                break;
            }
        }
        if(f){
            res.status(200).send(tasks)
        }else{
            res.status(404).send({errMsg: "ID is not valid!"})
        }

        
    }else{
        res.status(400).send({errMsg: "Please send content of task....."})
    }
})

app.delete('/deleteTask/:id',(req,res)=>{
        
        let f=0,ind=-1;
        for(var i=0;i<tasks.length;i++)
        {
            if(tasks[i].id == req.params.id)
            {
                ind = i;
                f=1;
                break;
            }
        }
        if(f){
            tasks.splice(ind,1); 
            res.status(200).send(tasks)
        }else{
            res.status(404).send({errMsg: "ID is not valid!"})
        }
        
})


app.listen(port, () => {
  console.log(`TODO API is listening on port ${port}`)
})