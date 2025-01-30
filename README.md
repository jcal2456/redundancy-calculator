# Redundancy Calculator README
## Project Overview
XXX, referred to as XXX for confidentiality purposes, is one of the leading media companies in the UK. However, due to automation being implemented more and more within XXX,  many employee roles are no longer needed. Therefore, in order to help downsize the workforce, XXX has started offering voluntary redundancy. This initiative helps XXX to effectively restructure the organisation, while providing a financial incentive for employees who are considering leaving XXX.

To help XXX increase the awareness of voluntary redundancy among employees, I have been given the task of building an app that calculates an employee’s redundancy payout if they do agree to voluntary redundancy. This app will help employees understand their redundancy pay based on company rules as well as legal rules. The app will also help the HR department of XXX as it will reduce the amount of enquiries they get about voluntary redundancy, thus improving the department’s efficiency. 

The technology stack used in this project will include CSS for styling, HTML for structure, JavaScript for functionality, GitHub for version control and project management, Figma for design, and more.

## Project plan
When building the app I aim to use an agile approach where my work will be completed through sprints. With a redundancy calculator being a relatively simple app to design and implement, I won’t require a long project to fulfil its requirements. Therefore I feel I can implement this app in 3 two week sprints. 

Sprint 1 will focus on setting up the basic HTML structure and CSS styling as well as gathering the requirements of the app and UI design. Sprint 2 will focus on writing the rest of the HTML and implementing the calculation logic in JavaScript, and Sprint 3 will focus on optimising the styling of the app, and conducting final testing.

Each sprint will include sprint planning at the start of a sprint, where the work during the sprint will be decided, a sprint review, where work is reviewed and tested, and a sprint retrospective, where a reflection on what went well and what can be improved is conducted.

## Project management tools
During the project GitHub Projects will be used to manage the project and work done. This is because GitHub Projects enables users to manage tasks via a Kanban board, containing columns, where tasks are set as tickets. This project’s Kanban board will have 3 columns which are, to-do, in progress, and done. 

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

Below is a screenshot of my Kanban board, which shows how the tickets are organised.

![Project Board Picture](https://github.com/user-attachments/assets/0db4b9d6-6d79-4ee2-98f5-0f3ad6f3fbdf)

##Design

From the requirements, the designs of the app were made. These were done in Figma. Below is a screenshot of the designs.

![Screenshot of designs](https://github.com/user-attachments/assets/3afb3b7d-f528-4524-b347-4704fa363f41)


The design on the left shows the app design without a user putting anything. At the top is a title and below that is two input fields, along with their labels, where a user would input their full years of service and salary. The inputs are designed so only numbers can be entered. Below that is the button, which calculates the payout, and this is in a blue, rectangular shape with rounded edges. Below that is the text of, “Estimated Redundancy Payment:”, where the result of the calculation, done when clicking the button, will be next to. The design to the right is almost identical however, it shows what the design would look like if an employee inputted their data. 
