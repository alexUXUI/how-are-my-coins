# How Are my Coins Doing?

> The web app that seeks to tell you how your coins are doing 🚀

- [How Are my Coins Doing?](#how-are-my-coins-doing)
  - [What does it do? 🤔](#what-does-it-do-%F0%9F%A4%94)
        - [Idea: 💡](#idea-%F0%9F%92%A1)
    - [Backend Application:](#backend-application)
      - [Developing: 🔨](#developing-%F0%9F%94%A8)
    - [Front End Applicaiton:](#front-end-applicaiton)
      - [Developing: 🔨](#developing-%F0%9F%94%A8)

## What does it do? 🤔

> Though the App is currently in development, the road map contians two 🔑 features.

* To allow the user to create a user account
  - This functionality is just so that  `How Are My Coins` can remember whom created which Altfolio.

* Allow users to create a sample Altfolio by specifing: 
  - Which curriencies should be in the Altfolio
  - How much of each currency should be in there

##### Idea: 💡
> To accomplish two things:

* Allow me to go to **one** place to get an idea of how my +20 crypto currencies are doing
* Allow me to play around with and build experiemental ALtfolios without having to sign up for anything or use real money,

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

#### Developing: 🔨

```sh
$ cd hamc-express
$ yarn start or nodemon (whichever you prefer)
```

### Front End Applicaiton:

Can be found at: https://howaremycoins.firebaseapp.com/

#### Developing: 🔨

```sh
$ cd hamc-client
$ yarn start 
```

Happy hacking!
-- Alex