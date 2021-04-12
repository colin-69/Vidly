
# Vidly

Welcome to Vidly, a movie rental service created in Node.Js. This appliation was my first exposure to creating API's along with using Postman, Mongodb, Google Cloud Services, and Heroku.
In this application I leanred about GET, POST, PUT, and DELETE. API's were created for the users, returns, rentals, movies, customers, and authentication. 
I also learned about middleware and created cusotm middleware that is used. 

## API

![V1](https://user-images.githubusercontent.com/61571857/114423154-8421f500-9b7c-11eb-8b8a-8bf2c2b79bfe.JPG)

Above you can see the get, post, put, and delete requests for the Genres API. In delete you can see that there are two custom middleware fuctions for authorization that require the user to have certain requirements to delete a genre. Threre is also error handeling which I learned when/why to send certain errors and how to properly implement.   

![V2](https://user-images.githubusercontent.com/61571857/114424303-951f3600-9b7d-11eb-925c-921860ac324c.JPG)

Above is the get and post requests for the movies API. Again you can see the custom middleware for authorization and the error handeling. 

## Model

![V3](https://user-images.githubusercontent.com/61571857/114424649-f2b38280-9b7d-11eb-8964-ccd90c05f320.JPG)

Above is the model for the genres. Along with creating a new genre there is validation to make sure the given information is valid. 

## Middleware

![V4](https://user-images.githubusercontent.com/61571857/114425221-7a00f600-9b7e-11eb-9e6f-9820b4d5e6c1.JPG)

This is a middleware function that checks the user to make sure they are authorized to perform a certain request using Json Web Tokens.

![V5](https://user-images.githubusercontent.com/61571857/114425476-b9c7dd80-9b7e-11eb-8ca8-057f10399acb.JPG)

Another middleware function that checks if the user is an admin. 

##  Database

![V6](https://user-images.githubusercontent.com/61571857/114426923-2abbc500-9b80-11eb-9afd-8799f3890208.JPG)

Here is what the database looks in the genres section. 

![V7](https://user-images.githubusercontent.com/61571857/114427038-4d4dde00-9b80-11eb-8382-7d72dbfb0401.JPG)

Here is the movies section and you can see each movie has its own objectId and the genre is an object that is mapped using the genres objectId.

![V8](https://user-images.githubusercontent.com/61571857/114427291-90a84c80-9b80-11eb-98e8-3fdd2f5c75f9.JPG)

Displayed is the users and currently there is only one. For the password there is hash encryption to hide the password. 

## Postman 

![V9](https://user-images.githubusercontent.com/61571857/114427672-ef6dc600-9b80-11eb-97af-eb1df5dfe3c6.JPG)

Here is the output in Postman when a get request is sent the the genres API.

![V10](https://user-images.githubusercontent.com/61571857/114428359-b5e98a80-9b81-11eb-8431-883a1676a6cd.JPG)

Here is the output of renting a movie with a valid customerId and movieId.


**Curently there is a bug in the returns API I am working on fixing it but at this time is does not work. 




