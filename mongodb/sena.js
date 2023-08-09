db.productionunits={
'_id':object(),
'pkcodeup':number,
'nameup':String,
'descriptionup':String,
'sede':{
    type:String,
    enum:['yamnboro','sena centro']
}
}
db.users={
'pkid':number,
'name':String,
'addres':String,
'phone':String,
'userstype':{
    type:String,
    enum:['aprendiz','intructor']
}
}
db.products={
    'pkidpdto':number,
    'namepdto':String,
    'descriptionpdto':String,
    'valuepdto':number,
    'stock':number,
    'fkup':{
        '_id':object(),
        'references':'productiveunits'
    }
}
db.prochase={
    'pkidprochase':number,
    'date':new Date,
    'quantity':number,
    'value':number,
    'fkuser':{
        '_id':object(),
        'references':'users'
    },
    'fkproduct':{
        '_id':object(),
        'references':'products'
    }
}

db.createCollection('productiveunits');
 db.createCollection('users');
 db.createCollection('products');
 db.createCollection('prochase');

db.prodctiveunits.insertMany([
    {
        'pkcodeup':1,
        'nameup':'Agrícola',
        'description':'Producción Productos del campo orgánicos',
        'sede':'Yamboro'
    },
    {
        'pkcodeup':2    ,
        'nameup':'Agroindustria',
        'description':'Proceso de productos lácteos y cárnicos',
        'sede':'Yamboro'
    },
    {
        'pkcodeup':3,
        'nameup':'Gastronomía',
        'description':'Venta de almuerzos especiales',
        'sede':'Yamboro'
    },
    {
        'pkcodeup':4,
        'nameup':'	Pecuaria',
        'sede':'Yamboro'
    },
    {
        'pkcodeup':5,
        'nameup':'Escuela Nacional de la Calidad del Café',
        'sede':'Yamboro'
    },
    {
        'pkcodeup':6,
        'nameup':'Ambiental_Recursos Naturales	 	',
        'sede':'Yamboro'
    },
    {
        'pkcodeup':7,
        'nameup':'Empresa de Servicios Públicos',
        'sede':'Yamboro'
    },
    {
        'pkcodeup':8,
        'nameup':'Moda_Comercio y Servicios',
        'sede':'centro'
    },
]
)
db.users.insertMany(
    [
        {
            'pkid':100426973,
            'name':'ELIAN CANDIL',
            'userstype':'Aprendiz'
        },
        {
            'pkid':119355841,
            'name':'LINA TATIANA SAMBONI',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1002337863,
            'name':'JERSON SMITH',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1004248797,
            'name':'LEIDY DAYANA INCHIMA',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1004269672,
            'name':'NATALIA ROJAS ROJAS',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1004402263,
            'name':'MANUEL CAMILO OME',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1004418839,
            'name':'OSWALDO SAMBONI BOLAÃ‘OS',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1004492751,
            'name':'DANA ARTUNDUAGA',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1004492861,
            'name':'LAURA VANESSA',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1006410046,
            'name':'FERNANDO SARREAS',
            'userstype':'Aprendiz'
        }, {
            'pkid':1007269672,
            'name':'ARMANDO CUELLAR',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1007308252,
            'name':'JHONARY LOSADA',
            'userstype':'Aprendiz'
        },

        {
            'pkid':1007308344,
            'name':'JERSON STERLING',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1007308354,
            'name':'DIEGO ALEGANDRO LOPEZ',
            'userstype':'Aprendiz'
        },
        {
            'pkid':1007388140,
            'name':'KAREN DANIELA ROJAS',
            'userstype':'Aprendiz',
        },
        {
            'pkid':96361787,
            'name':'WILSON MARTINEZ SALDARRIAGA',
            'addres':'CRA 19-CLL2',
            'phone':'3167512637',
            'userstype':'Instructor',
         
        },
        {
            'pkid':125345343,
            'name':'JESUS DAVID CALDERON',
            'addres':'CLL 3- CRA 12',
            'phone':'3122874654',
            'userstype':'Instructor',
        
        }
        
    ]
)

db.products.insertMany([
    {
        'pkidpdto':1,
        'namepdto':'yogurth',
        'descriptionpdto':'Chorizo',
        'valuepdto':500,
        'stock':120,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a3"),
            'references':'prodctiveunits'
        }
    },
    {
        'pkidpdto':2,
        'namepdto':'Chorizo',
        'descriptionpdto':'Chorizo de pollo',
        'valuepdto':1000,
        'stock':500,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a3"),
            'references':'prodctiveunits'
        }
    },
    {
        'pkidpdto':3,
        'namepdto':'Avena',
        'descriptionpdto':'Avena en vaso',
        'valuepdto':2000,
        'stock':600,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a3"),
            'references':'prodctiveunits'
        }
    },
    {
        'pkidpdto':4,
        'namepdto':'Cilantro',
        'descriptionpdto':'Hortalizas y verduras x Manojo',
        'valuepdto':500,
        'stock':300,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a2"),
            'references':'prodctiveunits'
        }
    },
    {
        'pkidpdto':5,
        'namepdto':'Cebolla',
        'descriptionpdto':'Cebolla Larga X Libra',
        'valuepdto':800,
        'stock':100,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a2"),
            'references':'prodctiveunits'
        }
    },
    {
        'pkidpdto':6,
        'namepdto':'Tomate',
        'descriptionpdto':'Tomate Cerry X Libra',
        'valuepdto':1500,
        'stock':200,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a2"),
            'references':'prodctiveunits'
        }
    },
    {
        'pkidpdto':7,
        'namepdto':'Almuerzos',
        'descriptionpdto':'Almuerzos especiales',
        'valuepdto':5000,
        'stock':500,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a4"),
            'references':'prodctiveunits'
        }
    },
    {
        'pkidpdto':8,
        'namepdto':'Cachama',
        'descriptionpdto':'Cachama Roja X Libra',
        'valuepdto':4500,
        'stock':300,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a5"),
            'references':'prodctiveunits'
        }
    },
    {
        'pkidpdto':9,
        'namepdto':'Trucha',
        'descriptionpdto':'Truca arreglada X Libra',
        'valuepdto':6000,
        'stock':140,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a5"),
            'references':'prodctiveunits'
        }
    },
    {
        'pkidpdto':10,
        'namepdto':'Café',
        'descriptionpdto':'Café especial X Libra',
        'valuepdto':15000,
        'stock':700,
        'fkup':{
            '_id':ObjectId("64d3b8dfb5a9f6a07bd563a6"),
            'references':'prodctiveunits'
        }
    }
])