# express-note-taker

https://n2thefray.github.io/express-note-taker/

** Installation Instructions
</br> -npm install 
</br> -npm install nanoid

** Technologies Used
Express
Node.js
Insomnia

** App description
</br> When a user clicks on the landing page take notes button it is taken to a secondary page that has an active notes section. The user is able to create, delete, and view previously created notes. The user is NOT able to edit notes as it was not required by the project details

** Musings
</br> This project was mainly focused on cementing the concept of route building using express modules. It had an additional extra credit opportunity to add in the capability to delete posts as well. As this was out of the scope of the lessons for this week it was a little challenging, however the following week dealt with database delete capabilities so it wasn't too bad. I did run into a few snags that were mainly due to me, but refactoring the code to narrow my scope of breakage coupled with judicious use of console.log finally narrowed down the problems that i did have. In order to use the delete capability one had to generate a unique id per note. I considered a math.random type solution, but Node.js had a pretty unique module called Nanoid that did that for me. I narrowed the scope of nanoid from the full possiblity of 21 characters to a self-imposed 8 character limiter as i felt the possiblity of creating to unique 8 character ids within the scope of this were astronomically low. 

