

const picnic = [

      {
         id         : 01 ,
         name       : 'Sharmin Sultana',
         age        : 20,
         location   : 'Dhaka',
         free       : 500,


      },
      {
        id         : 02 ,
        name       : 'Musfiq',
        age        : 21,
        location   : 'Uttora',
        free       : 500,


     },
     {
        id         : 03 ,
        name       : 'Manik',
        age        : 22,
        location   : 'Hajigong',
        free       : 500,


     },
     {
        id         : 04 ,
        name       : 'abul hossain',
        age        : 30,
        location   : 'Chandpur',
        free       : 500,


     },
     {
        id         : 05 ,
        name       : 'Sajidul',
        age        : 25,
        location   : 'Hajigong',
        free       : 500,


     },
     {
        id         : 06 ,
        name       : 'Sohel',
        age        : 28,
        location   : 'gazigong',
        free       : 500,


     },
     {
        id         : 07 ,
        name       : 'Sirin sultana',
        age        : 35,
        location   : 'cumilla',
        free       : 500,


     },
     {
        id         : 08 ,
        name       : 'Jidan',
        age        : 18,
        location   : 'cumilla',
        free       : 500,


     },
     {
        id         : 09 ,
        name       : 'Rubel',
        age        : 40,
        location   : 'chittagong',
        free       : 500,


     },
     {
        id         : 10 ,
        name       : 'Saimon',
        age        : 16,
        location   : 'Chittagong',
        free       : 500,


     },


];

let total = 0;

picnic.map(data =>{

    if (data.location == 'Hajigong'){
        console.log(`
            id       : ${data.id}
            name     : ${data.name}
            age      : ${data.age}
            location : ${data.location}
            free     : ${data.free}
 
        
        
        `);
        total = total + data.free ; 
 
 
    }
 
 });
 console.log (`Total Free  : ${total}`);
