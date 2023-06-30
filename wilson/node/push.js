let lenguaje=["python","java scripts"];

lenguaje.pop(1)
console.log(lenguaje);
let personas= [
    {
        'identificacion':'123456',
    'nombre':'juan davidad',
    'telefono':'3123504833',
    'notas':{'nota1':4.0,'nota2':5.0,'nota3':4.0}
},
    {    
        'identificacion':'123456455',
    'nombre':'juan ',
    'telefono':'3123504833',
    'notas':{'nota1':2.0,'nota2':5.0,'nota3':4.0}
}
    ,
    {    
        'identificacion':'1007587074',
    'nombre':'jairo alvarez',
    'telefono':'3123504',
    'notas':{'nota1':3.0,'nota2':5.0,'nota3':4.0}
}
,
{    
    'identificacion':'1007587074',
'nombre':'juan peres',
'telefono':'3123504',
'notas':{'nota1':3.0,'nota2':5.0,'nota3':4.0}
}
,
{    
    'identificacion':'1007587074',
'nombre':'miguel angel',
'telefono':'3123504',
'notas':{'nota1':4.0,'nota2':3.0,'nota3':4.0}
}
,
{    
    'identificacion':'1007587074',
'nombre':'vanesa chaves',
'telefono':'3123504',
'notas':{'nota1':2.0,'nota2':5.0,'nota3':4.0}
}
,
{    
    'identificacion':'1007587074',
'nombre':'monica ramires',
'telefono':'3123504',
'notas':{'nota1':1.0,'nota2':5.0,'nota3':4.0}
}
,
{    
    'identificacion':'1007587074',
'nombre':'anderson muños',
'telefono':'3123504',
'notas':{'nota1':3.0,'nota2':4.0,'nota3':4.0}
}
,
{    
    'identificacion':'1007587074',
'nombre':'juan monje',
'telefono':'3123504',
'notas':{'nota1':3.0,'nota2':3.0,'nota3':4.0}
}
,
{    
    'identificacion':'1007587074',
'nombre':'kevin alejanbro ',
'telefono':'3123504',
'notas':{'nota1':3.0,'nota2':4.0,'nota3':4.0}
}

];
for( let i =0 ; i<personas.length;i++){
   let n1= personas[1].notas.nota1;
   let n2= personas[1].notas.nota1;
   let n3= personas[1].notas.nota1;
   let promedio=(n1+n2+n3/3);
   console.log(promedio);

}