# EmailClientProject

This project was built using `NodeJs`, `Express` on the Back-End and `Angular`, `Material` on the Font-End

## Requirement
Installed `NodeJs 11.10.0` <br>
Installed `Angular CLI 7.3.1`

## Development server
Npm install dependences: `npm install` <br>
Back-End: Run `node server.js` to start NodeJs server. (The server.js file is in the `backend` folder)<br>
Font-End: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. <br>

## Quick live preview without having to install any package
I am running the app at an online IDE which can be preview here https://email-client-project-phandaika94.c9users.io:8081/ <br>
The online IDE does not run all the time. Therefore, I may need to start the IDE again in order for the above link to work. Please let me know if there is any problem. Thank you!

## Side notes
When sending a new email, the email is actually saved in the server. <br>
However, when deleting emails, they are only deleted on the font-end. They are not deleted on the serve side. Therefore, when we reload the webpage, all emails are fetched and show up again. The reason was that I didn't implement the `delete` api for the sake of time.




