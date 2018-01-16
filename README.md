# How Are my Coins Doing?
- [How Are my Coins Doing?](#how-are-my-coins-doing)
  - [What does it do?](#what-does-it-do)
    - [Backend Application:](#backend-application)
      - [Developing:](#developing)
    - [Front End Applicaiton:](#front-end-applicaiton)
      - [Developing:](#developing)
      
> The web app that seeks to tell yo how your coins are doing

## What does it do?

> Though the App is currently in development, the road map contians two key features.

1) To allow the user to create a user account
  - This functionality is just so that  `How Are My Coins` can remember whom created which Altfolio.
2) Allow users to create a sample Altfolio by specifing: 
  - Which curriencies should be in the Altfolio
  - How much of each currency should be in there

The idea behind building something this simple is to accomplish two things:

1) Allow me to go to **one** place to get an idea of how my +20 crypto currencies are doing
2) Allow me to play around with and build experiemental ALtfolios without having to sign up for anything or use real money,

### Backend Application:

Can be found at: https://secure-citadel-52378.herokuapp.com

Right now the API has two endpoints:

1) `/users` 
  - GET: Will return two collections:
    - Users
    - Altfolios
2) `/coins`
  - GET: Will return one collection:
    - Coin Market Cap, coin data

#### Developing:

```sh
$ cd hamc-express
$ yarn start or nodemon (whichever you prefer)
```

### Front End Applicaiton:

Can be found at: https://howaremycoins.firebaseapp.com/

#### Developing:

```sh
$ cd hamc-client
$ yarn start 
```

Happy hacking!
-- Alex