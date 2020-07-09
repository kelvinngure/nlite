# nlite

Choose.js

When the user presses Assessment button, calls dispatchThenNav function, then gives parameter of  assessment number. Then dispatchThenNav dispatches pick and payload and calls startAssessment function that navigates user to HiPage.js.

App.js

Reducer method takes in action and then inside action object, there are two elements: type and payload. Checks type as either “pick” or “close” (close will reset assessment).  When the app starts, all assessments are null. When an assessment is chosen, the dispatch takes the payload and chooses the specific assessment in the assessment list. Payload is between 1-10, so when “pick” is activated, the index gets subtracted by 1. ***Make sure you understand reducers and context functions.***

Paragraph.js, Letter.js, Word.js, and Story.js

These scripts will have an independent scoring script/function. This function will check what score you get depending on whether user gets the answer right or wrong. The score will then navigate the user to the different page. 
