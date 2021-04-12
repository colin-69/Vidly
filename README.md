
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


