# Express Note Taker

The purpose of this project was to build an application that can write, save, and delete notes using an express backend to save and retrieve note data from a JSON file. The project user story is below.

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
The criteria for a successful project are below:

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Getting Started
The deployed project should look like this. Click the image to see a video of the deployed project.

##  Deployed Project

</br></br></br> <img width="1307" alt="Screen Shot 2021-05-09 at 12 52 25 PM" src="https://user-images.githubusercontent.com/78673754/117567617-7bfa9e00-b0c5-11eb-8f9b-3c4d66b7a62b.png">

Below is the link to the project repository, a link to the deployed application on Heroku, and a link to the video of how the application works.


https://whispering-dawn-78598.herokuapp.com/


##  Development
Below are the steps I took to create the application as it is so far. The most difficult aspect of this application for me was using a constructor to cover all aspects of the notes (writing, reading, saving, deleting).

Created and linked the initial files (JS files, HTML files, JSON files).

Downloaded all dependecies using npm.

Created all routes and verified them with small tests using Postman.

Created a constructor which contained functions for each element of the notes (writing, reading, saving, deleting).

Verify the functionality of the application, then deploy to Heroku.

##  Testing
This application was not developed using Test Driven Development. However, at numerous points throughout development, console.log's were used to test the results of new elements.


##  Musings
</br> This project was mainly focused on cementing the concept of route building using express modules. It had an additional extra credit opportunity to add in the capability to delete posts as well. As this was out of the scope of the lessons for this week it was a little challenging, however the following week dealt with database delete capabilities so it wasn't too bad. I did run into a few snags that were mainly due to me, but refactoring the code to narrow my scope of breakage coupled with judicious use of console.log finally narrowed down the problems that i did have. In order to use the delete capability one had to generate a unique id per note. I considered a math.random type solution, but Node.js had a pretty unique module called Nanoid that did that for me. I narrowed the scope of nanoid from the full possiblity of 21 characters to a self-imposed 8 character limiter as i felt the possiblity of creating to unique 8 character ids within the scope of this were astronomically low. 

