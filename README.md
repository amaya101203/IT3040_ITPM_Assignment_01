##  Automated Testing Suite for Swift Translator

## Project Overview
This repository contains the automated functional and UI test suite for the **Swift Translator** (Singlish to Sinhala) web application. The testing was conducted as part of the Year 3, Semester 1 Assignment for the IT3040 course.

The objective of this suite is to evaluate the accuracy of transliteration, system robustness across various input lengths, and UI stability using **Playwright**.
The suite covers 35+ functional and UI test scenarios to ensure high accuracy in Singlish-to-Sinhala transliteration.


## Testing Methodology: Data-Driven Scripting
When I did this testing project, I first created 37 separate scripts (files) using the "Record" option in Playwright. But I faced several problems while doing that.

Unlike the common "Record and Playback" method this project utilizes Data-Driven Testing (DDT).

## What did I do here 
Putting all the test cases into a single array (Data set) and running them in a loop is called "Data-Driven Testing" in the software testing industry.

## what advantages of this approach:
     Efficiency:This method keeps the code short and clear. If you want to add a new test case to the array, you just need to add one more line.


    Professionalism: Writing a script like this rather than recording it gives you an understanding of the loops and assertions in playwright.

    Consistency: Since all test cases are tested under the same logic, the reliability of the results is high.

    Industry Standards: This approach mirrors how professional Quality Assurance (QA) engineers build robust automation frameworks in the industry.

## Test Coverage ##

Category                    Count        Description 

 **Positive Functional**    24            Validating accurate conversion of sentences, numbers, and long paragraphs. 

**Negative Functional**     11            Testing edge cases, special characters, and invalid spellings. 

**UI/UX Tests**             02            Ensuring real-time updates and proper clearing of the output container. 

 **Total Cases**            37            100% Pass Rate



##  How to Run the Tests

## 1. Prerequisites
Ensure you have Node.js installed on your machine.

## 2. Setup
Clone the project and install dependencies:


npm install
npx playwright install

## 3. Execution

## To run all tests in the background (Headless mode)
npx playwright test assignment1.spec.js --project=chromium --workers=1

## To run in UI Mode (to see the automation in action):
npx playwright test --ui

## 4. Generating Reports
After the run is complete, view the detailed HTML report:

npx playwright show-report

## Final Deliverables:
This assignment successfully delivers a comprehensive automated testing solution featuring professional README documentation, a robust Data-Driven Testing framework covering 37 test cases, comprehensive test reports, methodology comparison analysis, system limitation documentation, and validation of key academic learning outcomes - demonstrating mastery of modern testing practices and professional quality assurance methodologies.