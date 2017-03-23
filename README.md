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

![alt text](https://scontent.fjrs2-1.fna.fbcdn.net/v/t35.0-12/17430833_795522130602950_193631736_o.png?oh=ddae97bb6959330590c88ebf1c8e5fe9&oe=58D5E282)

### sign-in

As a user, I can:
- log in using email/username, and password
- return to the site without needing to sign in again, using sessions/cookies

![alt text](https://scontent.fjrs2-1.fna.fbcdn.net/v/t34.0-12/17467953_795524423936054_1603941318_n.png?oh=48384b5a843f993a4b573311f2b5febc&oe=58D5D2C2)

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
