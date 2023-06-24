1. user
//login as admin, security or visitor

2. visitor
//CR their own data
//multiple user can login at a time
//cannot edit blacklist data
//cannot update their data(need to go through admin or security)
 
3. security
//(can register itself as visitor)(keep record on the people who enter the residential area)
//RU all visitor data(not user data)
//check visitor's data(overtime, blacklist)
//can update visitor data:
//1. blacklist,2. detail,3. visitation
//cannot edit user collection
//cannot edit visitor personal info
//cannot delete user data

4. admin
//governs all the things
//RUD all data
//(can register itself as visitor since he is the boss)(keep record on the people who enter the residential area)
//blacklist visitor
//delete user data(including security and visitor)
//after delete user can create new visitor profile

//one user one visitor
//multiple user can login at a time

//to use this code
remember to download mongoose,jsonwebtoken,express and dotenv

//to make it become secure
admin need to change Access_token_secret(secret token for jsonwebtoken)
refresh token

//to improve this code
bcrypt can be implemented to store password in database