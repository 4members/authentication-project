# Authentication-project

This application will store sensitive information securely **Ex: hash passwords with bcrypt**, use validation in sign-in and sign-up forms, use sessions to let the use back to his Profiles without sign-in again and host an OAuth2 service for third-party applications

## Run the code
First you need to install the Libraries by typing this code
```js
npm i
```
After installing it run this code

```js
npm start
```
## Run the test
First you need to create new database with **test** name and password **1121993** then run this
```js
npm test
```

# User Stories
### sign-up
As a user, i can
- sign up with an email, username, and password
- sign up with an UNIQUE email
- sign up with a UNIQUE USERNAME
- sign up with a strong password

![alt text](https://scontent.fjrs2-1.fna.fbcdn.net/v/t34.0-12/17409750_795041983984298_142113614_n.png?oh=3d6aa9cf25a99faddfff274693d2312a&oe=58D46938)

### sign-in

As a user, I can:
- log in using email/username, and password
- return to the site without needing to sign in again, using sessions/cookies

![alt text](https://scontent.fjrs2-1.fna.fbcdn.net/v/t34.0-12/17474869_795042837317546_1115852499_n.png?oh=0a9a4f59f3b5686b1414c2c0cedfafe1&oe=58D5A1DE)

### sign-out:
As a user, I can:
- log out of the app, and if I return, I must log in again

### View Profile
As a user, I can:
- view all my user information, but not my password

### Edit Profile
As a user, I can:
- change my email, username, and password
- add a personal bio
- change my personal bio
