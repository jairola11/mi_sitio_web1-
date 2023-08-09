db.banks= {
    '_id':Object(),
        'code':string,
        'home':string,
    }

db.judges={
    '_id':Object(),
        'interkey': number,
        'name':'string',
        'serviceTime':number,
    }

db.criminals={
    '_id':Object(),
    'criminalscode':number,
    'name':string,
    'detention':string,
    'criminalband':string,
}

db.watchmen= {
    '_id':Object(),
    'code':number,
    'name':string,
    'age':number,
    'weapon':string,
}
db.judge={ 
    '_id':Object(),
    'criminals':{
        '_id':Object(),
        'references':'criminals'
    },
    'watchemen':{  
        '_id':Object(),
        'references':'watchmen'

    },
    'condeine':string

    }

db.rob={
    '_id':Object(),
 'criminals':[{
        '_id':Object(),
        'references':'criminals'
    }],
   'branch': {
  '_id':Object(),
  'references':'branch'
    },
    'fecha':date
}
db.branch={
    '_id':Object(),
'branchcode':string,
'backcode':{
    '_id':Object(),
    'references':'banks'
},
'domicile':String,
'numberemployes':number
}
db.contracts={
    '_id':Object(),
    'branch':{
        '_id':Object(),
        'references':'branch' 
    },
    'watchemencode':{
        '_id':Object(),
        'references':'watchemen' 
    }
}


// insertar datos 

db.bank.insertOne(
    {
        'code':12,
        'home':'leon13'

    }
)
db.judges.insertOne(
    {
        'interkey':1245,
        'name':'jairo',
        'serviceTime':20
    }
)

db.criminals.insertOne(
    {
        'criminalscode':145,
        'name':'jaider',
        'detention':'steal',
    'criminalband':'loLindos',
    }
)

db.watchmen.insertOne(
    {
        'code':789,
        'name':'perez',
        'age':15,
    'weapon':'AK-47',
    }
)

watchmen= {
    '_id':Object(),
    'code':number,
    'name':string,
    'age':number,
    'weapon':string,
}

db.judge.insertOne(
    {
'criminalcode':{
    '_id': ObjectId("64cd29363a914e21e95ac6d9"),
    'ref':'criminals'
},
'watchmencode':{
    '_id': ObjectId("64cd29373a914e21e95ac6da"),
'ref':'watchmen'
}, 'condeine':'8 años'
}
    )
    db.rob.insertOne(
        {
            'criminal':[
                {
                    '_id': ObjectId("64cd29363a914e21e95ac6d9"),
                    'references':'criminals'
                }
            ],
            'branch':{
                '_id': ObjectId("64d39c5bb5a9f6a07bd56374"),
                'references':'branch'
            },
            'date':new Date('2023-05-12')
        }
    )
    db.branch.insertOne(
        {
            'branchcode':'4',
            'branchcode':{
                '_id': ObjectId("64cd27963a914e21e95ac6d7"),
                'references':'bank' 
            }
        }
    )
db.contracts.insertOne(
    {
        'branchcode':{
            '_id':ObjectId("64d39c5bb5a9f6a07bd56374"),
            'references':'branch'
        },
        
        'watchemencode':{
            '_id': ObjectId("64cd29373a914e21e95ac6da"),
            'references':'watchemen'
        
        }
    }
)