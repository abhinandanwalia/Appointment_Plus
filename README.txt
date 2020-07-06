# Assignment Four


## AppointmentPlus
The main purpose of the web application “AppointmentPlus” is to ease the patient experience in making appointments with doctors. The users can easily find a doctor in a particular hospital and book an appointment online at their desired time based on the specific doctor's availability. The patients are free to cancel their appointments within a stipulated time which benefits other patients to get that particular time slot. The application will provide email reminders to users before a day of their doctor appointment.
The application facilitates the doctors by providing them with the upcoming schedule of consultations for the following week. It also enables them to create a new schedule with their available time period.  Each doctor will have a customized profile of their own along with their list of patient’s medical records whom they treated. Hence the application will provide a hassle-free appointment system which will streamline the workflow for both doctors and patients in many ways.

## Features

#### (Aishwarya Narayanan  - B00820313)
The two features that are mentioned in Assignment-3 are: -
1. Create New Appointment Schedule
2. Upcoming Schedule of Appointments

Assignment 4 submission focuses on one of the two features for the doctor user base:- "Create New Appointment Schedule"
1. Feature - "Create New Appointment Schedule" [Completed fully]
Filenames:
    * Server/createSchedule.js
    * src/app/createappointment
    * src/app/getdata.service.ts

    This feature enables the doctors to create a new schedule for the specific time period mentioning their availability, location, and additional message. Once the required details are given, the form will be validated to check if the details are in the correct format, if not appropriate error messages will be displayed to the user. After successful validation, the schedule details will be stored in the database. This schedule of available slots created by doctors will be displayed to the patients when they are booking an appointment with a specific doctor.

* A user can navigate to this page by logging in as doctor and by clicking the "plus" icon in the "Appointments" page of a doctor.
 *  Create appointment schedule page allows the doctors to create appointment timeslots for themselves for a particular date.
* The user can fill in the required details and the validation is done for every field in the page.
* Multiple timeslots can be added by clicking the "plus" icon near the timeslot field.
* For every dynamic div, the validations are done to check if the time format is correct and if it is not null.
* On successful validation, the appointment schedule will be created and the details will be stored in the database.


2. Feature - "Upcoming Schedule of Appointments" [Completed partially]
Filenames:
    * Server/getAppointments.js
    * src/app/doctor
    * src/app/getdata.service.ts

    This feature enables the doctors to view/update/cancel the list of upcoming appointments with patients for the week. It shows the appointment details such as date, location, timing and status of the appointment. The user will be allowed to filter the list of appointments based on the status of the appointment (current/upcoming/completed). On selecting the desired filter, the user can view the specific appointments according to the filtered attribute. It also helps new users with helpful tips to get familiarized with the application

  * A user can navigate to this page by logging in as doctor.
  * This page displays the list of upcoming appointments for a specific doctor from the "Appointment" database in the backend
  * Each record has a "Status" field which shows the status of a particular appointment.
  * On clicking the specific status, a modal window appears where in a user can mark the appointment as "Cancel/Completed"
 * When an appointment is marked as cancelled or completed, the status field is changed accordingly and changes are stored in database [Yet to be completed]

#### (Varsha Sridhar - B00791643)
The two features that are mentioned in Assignment-3 are: -
1. Booking Appointment
2. Canceling Appointment

Assignment 4 submission focuses on one of the two features for the patients' user base and an additional page for viewing the appointments:- "Cancelling doctor's Appointment" and "Manage Appointment"
1. Feature - "Cancelling Appointment" [Completed fully]
Filenames:
    * Server/canceldocAppointment.js
    * src/app/updateorcancelappointment
    * src/app/getdata.service.ts
    
    This feature enables the patients to cancel booked appointments in case of emergency, to cancel an appointment the user has to provide the appointment date, appointment time and the doctor's name. Once the required details are provided, the form will be validated to check if the details are provided in the correct format, if its not appropriate error message will be displayed. After validation, the patient's appointment details will be validated with the ones in the database. If appointment details are valid the appointment will be cancelled else an error message will be displayed asking the users to enter valid appointment details.

* A user has to navigate to this page by logging in as a patient and navigating to Manage Appointments page 
* Clicking on the **status** of the appointment navigates the user to the cancel appointment page
* The user can fill in the required details and the validation is done for every field on the page.
* On successful validation, the appointment will be cancelled and the status of the appointment will be changed to canceled. 

2. Manage Booking [Completed fully]
Filenames:
    * Server/manageappointment.js
    * src/app/managebooking
    * src/app/getdata.service.ts

    This feature enables the patients to view their history of appointments. They can view their doctor details, appointment date, time and status of the appointment. Status specifies whether that appointment has been scheduled, cancelled or completed.
    
* User has to log in as a patient and navigate to Manage Appointment page
* The Manage Appointment page displays the doctor's name, appointment date, time and status of the appointment.
* The "Status" field  shows the status of a particular appointment, completed, scheduled or cancelled 
*  Clicking on the status navigates the user to the cancel appointment page, where the user can cancel the appointment.
* Once an appointment is canceled, it will automatically update the status to **cancelled** in the manage appointment page.
#### (Dharmambal Sureshkumar - B00824492)
The two features mentioned in Assignment 3 are
1.Book Appointment
2.E-mail and text notification

Assignment 4 submission focuses on one of the two features for the patients' user base which is the book appointment feature. Where the patients will be able to book appointments with the doctors of their choice in the available date and time of the doctor.

1. Feature - "Book Appointment" [Completed fully]
Filenames:
    * Server/bookappointment.js
    * Server/dateandtime.js
    * src/app/getdata.service.ts

This feature enables the user that is the patients to book appointment with the doctors. The patients will have to specify their names,e-mail and phone number. They will have to select the doctors from the drop down. Once they select the doctor, the dates in which the particular doctor is available is populated in the date drop down. When the user selects the specific date then the time slots that are available for the day are populated in the time dropdown. The patient can also enter the reason for visit and click the book appointment button. Once the button is clicked an alert message pop's up notifiying the confirmation of appointment.

* A user has to navigate to this page by logging in as a patient and navigating to Book Appointment page
* The user can fill in the required details and the validation is done for every field on the page.
* Once the user clicks the book appointment button an alert pop's up to notify the user about the appointment confirmation.


#### (Abhinandan Walia - B00820613)
The two features that are mentioned in Assignment-3 are: -
1. Registration/Signup
2. Edit Profile

Assignment 4 submission focuses on one of the two features for the doctor and patient user base. Following section provides the details for both features.

1. Feature - "Registration/SignUp" [Completed fully]
Filenames:
    * Server/doctor/registerUser.js
    * Server/user/registerUser.js
    * src/app/signup [component]
    * src/app/getdata.service.ts

This feature is one of the core features that allow users to use the application as only the registered users can access the services provided by AppointmentPlus. Any guest user can navigate to the signup page and fill out the basic details to register. On successful registration, an email notification is sent specifying that the registration was successful.
* A new user upon landing on the home page can find the signup link on the banner section. They can also navigate to either of the login pages (for Doctor or Patient) to find a link to the signup page.
* On the signup page, they are asked to fill in basic details like name, email, phone, etc.
* With a click on the register button, the process begins with validation the inputs provided by the user. Any validation failure is conveyed to the user with an appropriate message.
* Successful validation triggers a service to begin data save to the database.
* A success prompt is provided and the user is redirected to the Login page. Along with this process, an email notification is sent to the user confirming the registration success [8].

2. Feature - "Edit Profile" [Completed partially]
Filenames:
    * src/app/Profile [component]
    * src/app/Edit [component]

This feature is partially complete with front-end fully developed and backend in progress. This feature is the profile management section. Once a registered users login to the account they can update the information provided at the time of registration. This feature has some restrictions over the information that the user can update. Name, Email, Date of Birth and License Number are somewhat information that does not change, therefore they are resticted not to update. 
* After login, the user can navigate to the profile section from a dropdown list on the right top corner.
* On click to the profile section the user is directed to the profile page displaying the information provided during the registration.
* A click on the edit button takes the user to an edit page where they can update the information. This page allows updated only to the non-restricted field as mentioned above.
* Similar to the registration page on update button click will start validating the user inputs and trigger database save on successful validation.
* On process completion user is redirect to the profile page with newly updated information.

## Frontend technologies used:

* Angular 7 – MVC framework for creating single page application
* Bootstrap – Framework used for designing and building the responsive UI
* TypeScript - Scripting Language used for functionalities
* HTML and CSS - Used for basic designing of webpage


## Database used:

* MySQL (Database)(Deployed in Cloud- Microsoft Azure) - Relational database used for storing AppointmentPlus records.


## Back End Framework

* Express - Routing and Middleware framework used for retrieving data from the database to the client application.
* Node.js - Open source, a cross-platform runtime environment for developing server-side applications.


## Setup Instructions
### Front end setup


1. The application can be tested in the local machine by cloning or downloading the FCS git repository with the command: -
git clone https://git.cs.dal.ca/narayanan/webprojectgroup12.git
2. After cloning the repository navigate to the folder which has the boilerplate files and run the command “npm install”.
3. Install Angular : npm install -g @angular/cli


### Connecting to Back-end Server


1. Go into the server folder in the root folder of the application : cd server
2. Install all dependencies from the back-end folder where the boilerplate files are located: npm install
3. Within the server folder, run the server : npm start


### Running the Front-end


1.  Navigate to the root folder of the project.
2. Start the front end by running the command "ng serve" in the command prompt
Launch the browser and navigate to http://localhost:4200/



## Folder Structure
### Back-end folder structure : -
* app.js Bootstrap file of the server application which redirects the incoming requests to appropriate routes
* Database (subfolder under server folder)-Database configuration is made in this folder in dbconfig.js file
* Routes (subfolder under server folder)-All the routes to handle the incoming requests from client, is placed here.

### Front-end folder structure: -
* Src folder specifies each component of the application
* It Contains three main folders app, assets and environment
* GetDataService specifies the routing information 

## References

[1] Tutorialspoint.com. (n.d.). JavaScript Form Validation. Retrieved from https://www.tutorialspoint.com/javascript/javascript_form_validations.htm


[2] Otto, M., & Thornton, J. (n.d.). Introduction. Retrieved from https://getbootstrap.com/docs/4.1/getting-started/introduction/


[3] The first Regular Expression Library on the Web! (n.d.). Retrieved from http://regexlib.com/


[4] (n.d.). Retrieved from https://angular.io/docs

[5]Krunal. (2019, January 06). Angular 7 CRUD Example: MEAN Stack Tutorial From Scratch. Retrieved from https://appdividend.com/2018/11/04/angular-7-crud-example-mean-stack-tutorial/.

[6]./@daouda.diallo.cisse. (2019, June 13). Creation of Web Application with Node JS and Angular V6 - Part 2 (FRONTEND). Retrieved from https://medium.com/code-divoire/creation-of-web-application-with-node-js-and-angular-v6-part-2-frontend-2de5eba06b5a

[7]./@aniansson. (2017, June 22). Connecting an API to an Angular 4 front-end application. Retrieved from https://medium.com/craft-academy/connecting-an-api-to-an-angular-4-front-end-application-e0fc9ea33202

[8]. /@nickroach_50526. (2019, June 04). Sending Emails with Node.js Using SMTP, Gmail, and OAuth2. Retrieved from https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1

[9]"Lodash Documentation", Lodash.com, 2019. [Online]. Available:https://lodash.com/docs/4.17.14#uniq. [Accessed: 17- Jul- 2019].
