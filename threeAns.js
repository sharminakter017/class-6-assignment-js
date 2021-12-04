

const age =[

       {
         id       : 01 ,
         name     : 'Asraful',
         age      : 17,
         location : 'dubai',
         gender   : 'Male',


       },
       {
        id       : 02 ,
        name     : 'Miraj',
        age      : 21,
        location : 'canada',
        gender   : 'Male',


      },
      {
        id       : 03 ,
        name     : 'Arif',
        age      : 25,
        location : 'soudi',
        gender   : 'Male',


      },
      {
        id       : 04 ,
        name     : 'Manik',
        age      : 22,
        location : 'dubai',
        gender   : 'Male',


      },
      {
        id       : 05 ,
        name     : 'robi',
        age      : 45,
        location : 'America',
        gender   : 'Male',


      },
      {
        id       : 06 ,
        name     : 'hasan',
        age      : 20,
        location : 'switzarland',
        gender   : 'Male',


      },
      {
        id       : 07 ,
        name     : 'Tamjid',
        age      : 40,
        location : 'oman',
        gender   : 'Male',


      },
      {
        id       : 08 ,
        name     : 'Akas',
        age      : 35,
        location : 'Bangladesh',
        gender   : 'Male',


      },
      {
        id       : 09,
        name     : 'Pakhi',
        age      : 36,
        location : 'dubai',
        gender   : 'Male',


      },
      {
        id       : 10 ,
        name     : 'Moven de silver',
        age      : 19,
        location : 'Africa',
        gender   : 'Male',


      },

    ];


      age.map (data => {

        if (data.age >=0 && data.age < 18 ){
            console.log('apnar boyos hoyni...akhane probesh korar onumoti nei..');
        }else if (data.age >= 18 && data.age < 40){
            console.log('Welcome....ladies and gentleman....apnader jonnoi to ato ayojon');
        }else{
            console.log('sorry...your age is over this condition..so do not permission you get in the hall');
        }
      });







