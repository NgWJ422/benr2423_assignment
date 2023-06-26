###
//register as visitor
post http://localhost:3000/register/visitor
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ5OTI2M2FmN2UwNDdmYjZiMWZiODhiIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3NzU4NDYzfQ.VF7TJPddlRzIiFSPr-dnPPmY_sUbWBqNJWW4XQ7kjQs
Content-Type: application/json

{
    "name":"Ng Wei Jie",
    "gender":"Male",
    "age":"22",
    "date_of_birth":"22 April 2001",
    "ethnicity":"chinese",
    "citizenship":"malaysia",
    "license_number":"111"
}


//the following are the insert of visitor doc
###
//doc expiry date means need to update doc before the date comes
post http://localhost:3000/register/visitor/doc
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "doc_expiry_date":"25 March 2027",
    "job_id":"111111",
    "Mykad":"011111-10-1111"
}

###

post http://localhost:3000/register/visitor/address
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "address":"1,jalan 1,taman 1, 11111 klang,selangor",
    "town":"taman 1",
    "postcode":"11111",
    "state":"selangor",
    "country":"malaysia"
}

###
post http://localhost:3000/register/visitor/other
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "visitor_category":"admin as visitor",
    "telephone_number":"111111111",
    "vehicle_type":"honda",
    "vehicle_number":"bnr1111",
    "pre_register_pass_no":"1111"
}

###
post http://localhost:3000/register/visitor/additional
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "fever":"no",
    "Sore_throat":"no",
    "dry_cough":"no",
    "runny_nose":"no",
    "shortness_of_breath":"no",
    "body_ache":"no",
    "travelled_overseas_last14days":"no",
    "contact_with_person_with_covid":"no",
    "recovered_from_covid":"no",
    "covid_test":"no"
}



###
post http://localhost:3000/register/visitor/detail
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "no_of_visitor":"1",
    "purpose_of_visit":"rent collecting",
    "To_meet_host":"Han",
    "host_info":"nothing",
    "location_department":"A-1",
    "unit_no":"1",
    "location_info":" ",
    "permit_no":"001",
    "remarks":"rent"
}

###

post http://localhost:3000/register/visitor/visitation
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "visit_date":"13 June 2023",
    "checkin_time":"10:00",
    "visit_expiry_time":"no limit",
    "checkout_time":"12:00",
    "overtime_status":"not overtime",
    "detail_id":"648bbe47b5a82ab58731e22c"

}


//admin and security read data from database based on criteria they insert
//if admin or security wants to read all doc from a collection,just put an empty json file
###
post http://localhost:3000/security/user/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ5NGNkYmY3NDI5NDE1YjU0OWEyMGNkIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3NjQ0MTM0fQ.mHOEdbnwCxLayVTPUaiCgoCH6D_OVlrZ76yj8D89El4
Content-Type: application/json

{

}


###
post http://localhost:3000/security/user/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ5NGNkYmY3NDI5NDE1YjU0OWEyMGNkIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3NDc1MTQwfQ.QTKMIkvTiRruReKq3wQBkYMzwJjwrdBBIZ3k3uDUofI
Content-Type: application/json

{
    "age":"22"
}

###
post http://localhost:3000/security/visitor/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ5NGNkYmY3NDI5NDE1YjU0OWEyMGNkIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3NjQ0MTM0fQ.mHOEdbnwCxLayVTPUaiCgoCH6D_OVlrZ76yj8D89El4
Content-Type: application/json

{
   
}

###
post http://localhost:3000/security/doc/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "job_id":"111111"
}

###
post http://localhost:3000/security/address/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "town":"taman 1"
}

###
post http://localhost:3000/security/other/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "vehicle_type":"honda"
}

###
post http://localhost:3000/security/additional/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "fever":"no"
}

###
post http://localhost:3000/security/blacklist/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "blacklist_status":"no"
}

###
post http://localhost:3000/security/detail/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "host_info":"nothing"
}

###
post http://localhost:3000/security/visitation/read
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
   
}


//update(id of specific document is required)
###
patch http://localhost:3000/security/visitor/update/648bbd2ed68d20872668ee69
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "name":"tan"
}

###
patch http://localhost:3000/security/user/update/6494cd8b7429415b549a20c4
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ5NGNkOGI3NDI5NDE1YjU0OWEyMGM0Iiwicm9sZSI6InNlY3VyaXR5IiwiaWF0IjoxNjg3NDc1NTg3fQ.yG78-qcqtUnbu99H8C8BOcjw9WCUsjKphy3lrPtq5wg
Content-Type: application/json

{
    "age":"1000"
}

###
patch http://localhost:3000/security/doc/update/6487f9a3928a56a3b437c71c
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "Mykad":"000000000"
}

###
patch http://localhost:3000/security/address/update/6487f9d1928a56a3b437c723
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "town":"taman 22222"
}

###
patch http://localhost:3000/security/other/update/6487fa08928a56a3b437c72a
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "vehicle_number":"urr777"
}

###
patch http://localhost:3000/security/additional/update/6487fa11928a56a3b437c731
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "fever":"yes"
}


//the following can be used by both admin and security
###
patch http://localhost:3000/security/blacklist/update/648911ed915427926468a299
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "blacklist_status":"yes",
    "reason":"overtime on visitation",
    "remark":"nothing"
}

###
patch http://localhost:3000/security/detail/update/6487fa4c928a56a3b437c73f
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ5OTI3OWYxYWQ5YTI1YmVlYjQxZmMxIiwicm9sZSI6InZpc2l0b3IiLCJpYXQiOjE2ODc3NTg3Njl9.9DcIXWyHB2nw2xNHWbuKBs1TVVcjtPOvB_koniwDvlc
Content-Type: application/json

{
    "To_meet_host":"Chua"
}

###
patch http://localhost:3000/security/visitation/update/648bbe74b5a82ab58731e233
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ4ZDI5YzQ1MGJmMWRlODZiMTMyZGMyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg2OTczMDg3fQ.JSKenw7HXJZH6puYnUns09FcGiM3KWXtX7N3xKQyGWY
Content-Type: application/json

{
    "checkout_time":"23:00"
}

//admin wanst to delete a visitor
//enter visitor's id in url
###
delete http://localhost:3000/admin/visitor/deleteall/649926dcf7e047fb6b1fb8bb
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ5OTI3OWYxYWQ5YTI1YmVlYjQxZmMxIiwicm9sZSI6InZpc2l0b3IiLCJpYXQiOjE2ODc3NTg3Njl9.9DcIXWyHB2nw2xNHWbuKBs1TVVcjtPOvB_koniwDvlc

//admin wants to delete a user account
###
delete http://localhost:3000/admin/user/delete/6499263df7e047fb6b1fb88e
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ5OTI2M2FmN2UwNDdmYjZiMWZiODhiIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3NzU4NDYzfQ.VF7TJPddlRzIiFSPr-dnPPmY_sUbWBqNJWW4XQ7kjQs




