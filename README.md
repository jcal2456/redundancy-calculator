# Redundancy Calculator README
## App link
The app can be accessed using the following link: **[Redundancy Calculator](https://jcal2456.github.io/redundancy-calculator/redundancyCalculator.html)**

## Project Overview
XXX, referred to as XXX for confidentiality purposes, is one of the leading media companies in the UK. However, due to automation being implemented more and more within XXX, many employee roles are no longer needed. Therefore, in order to help downsize the workforce, XXX has started offering voluntary redundancy. This initiative helps XXX to effectively restructure the organisation, while providing a financial incentive for employees, who are considering leaving XXX.

To help XXX increase the awareness of voluntary redundancy among employees, I was given the task of building an app that calculates an employee’s redundancy payout. This app helps employees understand their redundancy pay based on company rules as well as legal rules. The app also helps the HR department of XXX due to it reducing the number of enquiries they get about voluntary redundancy, thus improving the department’s efficiency. 

The technology stack used in this project included CSS for styling, HTML for structure, JavaScript for functionality, GitHub for version control and project management, Figma for design, and more.

## Project plan
When building the app, an agile approach was used and work wascompleted through sprints. With a redundancy calculator being a relatively simple app to design and implement, I didn't require a long project to fulfil its requirements. Therefore, I implemented this app in 3 two week sprints. 

Sprint 1 focussed on setting up the basic HTML structure and CSS styling as well as gathering the requirements of the app and UI design. The second sprint focussed on writing the rest of the HTML and implementing the calculation logic in JavaScript, and the final sprint focussed on optimising app styling, and conducting final testing.

Each sprint included sprint planning at the start of a sprint, where the work during the sprint was decided, a sprint review, where work was reviewed and tested, and a sprint retrospective, where a reflection on what went well and what can be improved was conducted.

## Project management tools
During the project GitHub Projects was used to manage the project and work done. This is because GitHub Projects enables users to manage tasks via a Kanban board, containing columns, where tasks are set as tickets. This project’s Kanban board will have 3 columns which are, to-do, in progress, and done. 

## Requirements
At the start of the project, requirements of the app were gathered. These requirements were split into functional and non-functional requirements. The requirements were captured and then tickets were created based on them.

The functional requirements of the app included:
* Having an input field for "Full Years of Service"
* Having an input field for "Salary"
* Having a title at the top called “Redundancy Calculator”
* Having a button that when clicked automatically calculates the voluntary redundancy payout using the two inputs
* Having a JavaScript function to calculate redundancy pay - formula should be (fullYearsOfService / 2) * (salary / 5)
* Having a no redundancy entitlement message displaying if the "Full Years of Service" input is less than 2
* Having the redundancy pay capped at £90,000
* Having the input fields only allowing numbers to be inputted

The non-functional requirements of the app included:
 * Having an app that is visually appealing and user-friendly 
 * The calculator should return a calculation or answer within 1 second of clicking the "Calculate" button 
 * Meeting XXX’s accessibility guidelines

As mentioned previously, tickets of work were created based on the requirements. The tickets follow a structure of a title, followed by a description, followed by acceptance criteria. Below is an example of one of the tickets in the GitHub Project’s Kanban board.

![Ticket Example](https://github.com/user-attachments/assets/d856dbad-b912-4def-840a-2ba736905bd9)

Below is a screenshot of my Kanban board, which shows how the tickets were organised.

![Project Board Picture](https://github.com/user-attachments/assets/0db4b9d6-6d79-4ee2-98f5-0f3ad6f3fbdf)

## Design
From the requirements, the designs of the app were made. These were done in Figma. Below is a screenshot of the designs.

![Screenshot of designs](https://github.com/user-attachments/assets/37841e5f-cd59-453c-bf56-5192da76f2b5)


The design on the left shows the app design without a user inputting anything. At the top is a title and below that is two input fields, along with their labels, where a user would input their "full years of service" and "salary". The inputs are designed so only numerical data can be entered. Below that is the button, which calculates the payout, and this is in a blue, rectangular shape with rounded edges. Below that is the text of, “Estimated Redundancy Payment:”, where the result of the calculation, done when clicking the button, will be next to. The design to the right is almost identical however, it shows what the design would look like if an employee inputted their data. 

## MVP development
After the design of the application was completed and the requirements were captured, the MVP of the redundancy calculator was developed which achieved all the app’s current requirements and looked like the designs created on Figma.

The first step in developing the MVP was starting to build the basic HTML structure. <meta charset="UTF-8"> was used to specify the character encoding, <meta name="viewport" content="width=device-width, initial-scale=1.0"> was used to ensure the app fits the screen size as well as set the initial zoom level, and <title> Redundancy Calculator </title> was used to set the title. <link …> was used to link the HTML file to a CSS file and "<h1>" was used to display the page title. The first part of the CSS code was then completed which, set the text style to Courier New, to give it a clean appearance, formatted the table, that was used to help structure the input fields and labels, and format the input fields, including setting the padding.

Next the table and input fields were created in the HTML file, which included the “Years of Service” input field and label as well as the “Salary” input field and label. type="number" was used to ensure the input fields only allowed numeric values. After that, the button styling was configured, using CSS, where the colour of the button, its text , its size, its corners and its padding was defined. During development CSS helped the app look professional and visually appealing.

HTML was then used to create the “calculate” button which, when pressed, triggered the redundancy calculation, based on the input fields, and displayed the result below the button. <script src="redundancyCalculator.js"></script> was used to link the HTML to a JavaScript file that contained the logic of the redundancy calculation. Overall HTML helped build the structure of the app.

The final part of the MVP development was to use JavaScript to create the functionality of the app, including the logic for the “calculate” button. This was created using a test-driven development approach, which will be expanded on in the next section.

## Test driven development (TTD)
As mentioned previously, a test-driven development approach was used to create the app calculation, which was done using JavaScript. The first step was creating the unit tests, using Jest. Due to XXX’s rules and guidelines I was only able to conduct TTD on an IDE locally. 

Therefore, on a local version of VS code, Jest was first installed, added to the json script, and unit tests were then created. Three unit tests were created which tested whether the calculation formula was correct, whether the maximum redundancy payment displayed was no more than £90,000, and whether a message telling employee not eligible for redundancy pay popped up if full years of service is less than 2. These tests were stored in a JavaScript file separate to the JavaScript file containing the redundancy formula and was connected to the formula via, “const calculateRedundancy = require('../src/redundancuCalculator.js');”. 

Next the calculateRedundancy() function was created, but due to it being incorrect, when the tests were ran, using “npm test”,  they failed. The calculateRedundancy() function was then refactored and improved iteratively until the unit tests passed. Below is a screenshot showing the unit tests failing.

![Screenshot of failing tests](https://github.com/jcal2456/redundancy-calculator/blob/main/Failing%20Tests.png)

The code that made the tests pass, first defined the function, “calculateRedundancy()” and took the parameters of “full years of service” and “salary”. Then it used the variable of “redundancyFormula”, to store the calculation result. It used if statements to display a message telling employees they’re ineligible for redundancy pay if their full years of service is less than 2 and to ensure the payment displayed was no more than £90,000. The function also calculated the pay using, “redundancyFormula = (fullYearsOfService / 2) * (salary / 5);” if the payout doesn’t exceed £90,000 and the employer has worked for at least 2 years at XXX. Ultimately the TTD approach helped to ensure the functionality of the code worked as expected. Below shows evidence of the tests passing.

![Screenshot of passing tests](https://github.com/jcal2456/redundancy-calculator/blob/main/Passing%20Tests.png)

## Testing
Other than using unit tests to test the redundancy formula, there were other ways the Redundancy Calculator was tested. Manual testing was used to test the app. Lighthouse was used to test the app’s accessibility.

![Screenshot of accessibility test](https://github.com/jcal2456/redundancy-calculator/blob/main/Accessibility%20Score.png)

And Debug JavaScript was used to test for issues.

## User documentation
The Redundancy Calculator app was designed to allow employees to understand easily what their redundancy payout would be if they did choose to take redundancy. The app is based on XXX’s rules on voluntary redundancy.
The app works on mobile, desktop, and laptop devices and is compatible with most browsers like Google Chrome and Microsoft Edge. 

The app can be accessed using the following link: **[Redundancy Calculator](https://jcal2456.github.io/redundancy-calculator/redundancyCalculator.html)**

The app when opened should look like this:

![Screenshot of app](https://github.com/jcal2456/redundancy-calculator/blob/main/App%20Picture.png)

To use the app, users must click into the “Full Years of Service” and “Salary” fields and enter the corresponding data. To calculate the payout users must click the “Calculate” button and then the estimated redundancy payment will be displayed below the button. Alternatively, the app can be interacted with using a keyboard only. This is by using the tab and enter buttons to move between the fields and the button. 

## Technical documentation
As mentioned previously, the app allows employees to understand what their redundancy payout would be if they did choose to take redundancy. It works by users inputting their “Full Years of Service” and “Salary”, and then clicking the “Calculate” button.

The technical stack includes using HTML and CSS to create input fields for "Years Worked" and "Salary" and displaying results, JavaScript to calculate redundancy pay, using Jest for unit testing, and using Git and GitHub for version control and project management.

The files used for this project, stored in GitHub, include a JavaScript file, used for JavaScript logic, a HTML file, used for the app’s structure, a CSS file, used for app styling, a JavaScript test file, where all the unit tests were stored, a README, where documentation is stored, a licence document as well as png files that were used in the README. 

## Evaluation
All in all, the development of the Redundancy Calculator app was a success. It fulfilled all the requirements including performing accurate calculations and having a user-friendly interface. Other strengths of the app included preventing users from inputting non-numeric values and ensuring the payout displayed didn’t exceed £90,000. However, there were challenges along the way, the main one being implementing the JavaScript logic. Using a TTD approach and unit tests really helped with the writing of this code, and resolving this challenge, as it helped ensure accurate calculations were being made.

When giving users a chance to try the app, there was a lot of positive feedback and overall, they felt that the app achieved its main goal of making it easier for users to understand what their redundancy payout would be. They also mentioned that the app was easy to use and intuitive. However, they did say that they would like better input validation from the input fields as it did allow decimals, meaning that it allowed users to enter their years worked as not full years, which gives inaccurate results as XXX’s payout is based on full years worked in the company. Therefore, in future iterations of this app, more thorough input validation would be developed. Also, in future iterations of the app, it is planned to automatically adjust the “Salary” input field with commas to make it easier for users to know what salary they have inputted. For example, rather than displaying 90000, it would display 90,000.

## Conclusion
In conclusion, this README should have demonstrated why it was decided to build a Redundancy Calculator app, how it was decided to be built and what project management tools were involved. The README should have highlighted the requirements of the app, the design of the app, and what the process of developing the app looked like, including how a TTD approach was implemented. The README should have also demonstrated how different types of testing was used in this project, how to use the app, and should have provided an evaluation of the app and project including highlighting the strengths and challenges, user feedback, and future iteration plans.
