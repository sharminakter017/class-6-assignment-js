

const devs = [

    {

        id       : 01,
        name     : 'Asraful',
        age      : 45,
        skill    : 'Mearn-stack',
        location : 'uttora',
        income   : 50000,
        
    },

    {

        id       : 02,
        name     : 'karim',
        age      : 40,
        skill    : 'Laraval',
        location : 'Dhaka',
        income   : 50000,
        
        
    },
    {

        id       : 03,
        name     : 'Rahim',
        age      : 35,
        skill    : 'Django',
        location : 'gazipur',
        income   : 10000,
        
    },
    {

        id       : 04,
        name     : 'Minhaj',
        age      : 30,
        skill    : 'Golan',
        location : 'Chandpur',
        income   : 25000,
        
    },
    {

        id       : 05,
        name     : 'Sharif',
        age      : 25,
        skill    : 'Wordpress',
        location : 'bokulroad',
        income   : 20000,
        
    },
    {

        id       : 06,
        name     : 'Sharmin',
        age      : 20,
        skill    : 'java',
        location : 'Hajaribag',
        income   : 15000,
        
    },





];

let total = 0;

devs.map(data =>{

   if (data.skill == 'Mearn-stack'){
       console.log(`
           id       : ${data.id}
           name     : ${data.name}
           age      : ${data.age}
           location : ${data.location}
           income   : ${data.income}

       
       
       `);
       total = total + data.income ; 


   }

});
console.log (`Total Income  : ${total}`);