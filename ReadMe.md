imagine 1 machine and only 1 user can login at a time
1. user
//login as admin, security or visitor

2. visitor
//CR their own data
//cannot edit blacklist data
//cannot update their data(need to go through admin or security)
 
3. security
//(can register itself as visitor)(keep record on the people who enter the residential area)
//RU all visitor data(not user data)
//can update visitor data:
//1. blacklist,2. detail,3. visitation
//cannot edit user collection
//cannot edit visitor personal info
//cannot delete user data

4. admin
//RUD all data
//(can register itself as visitor since he is the boss)(keep record on the people who enter the residential area)
//blacklist visitor
//delete user data(including security and visitor),must delete visitor data first before user account can be deleted

//one user one visitor
//try do for doc, etc but cannot work


//redo crows'foot notation, ERD