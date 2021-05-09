# express-note-taker

https://whispering-dawn-78598.herokuapp.com/

</br></br></br> <img width="1307" alt="Screen Shot 2021-05-09 at 12 52 25 PM" src="https://user-images.githubusercontent.com/78673754/117567617-7bfa9e00-b0c5-11eb-8f9b-3c4d66b7a62b.png">
</br> <img width="1303" alt="Screen Shot 2021-05-09 at 12 51 57 PM" src="https://user-images.githubusercontent.com/78673754/117567626-86b53300-b0c5-11eb-9a10-d55d871dc417.png">

** Installation Instructions
</br> -npm install 
</br> -npm install nanoid

** Technologies Used
</br>Express
</br>Node.js
</br>Insomnia

** App description
</br> When a user clicks on the landing page take notes button it is taken to a secondary page that has an active notes section. The user is able to create, delete, and view previously created notes. The user is NOT able to edit notes as it was not required by the project details

** Musings
</br> This project was mainly focused on cementing the concept of route building using express modules. It had an additional extra credit opportunity to add in the capability to delete posts as well. As this was out of the scope of the lessons for this week it was a little challenging, however the following week dealt with database delete capabilities so it wasn't too bad. I did run into a few snags that were mainly due to me, but refactoring the code to narrow my scope of breakage coupled with judicious use of console.log finally narrowed down the problems that i did have. In order to use the delete capability one had to generate a unique id per note. I considered a math.random type solution, but Node.js had a pretty unique module called Nanoid that did that for me. I narrowed the scope of nanoid from the full possiblity of 21 characters to a self-imposed 8 character limiter as i felt the possiblity of creating to unique 8 character ids within the scope of this were astronomically low. 

