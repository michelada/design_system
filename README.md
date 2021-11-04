# miche.css

## Install dependencies
```
npm install
```

## Run the dev server
```
npm start
```

This will start a dev server and will watch the files for any change.

## Development Workflow  
Welcome to the design system project. Here, we use a different agile practice named Kanban to deliver fast and beatiful CSS 👩‍💻

Let's talk about our workflow:
1. First thing your need to know, there is no sprints! yay :dance_dog:
2. You decide what to work on. You look at the tickets in the TODO column and assign the one that fits your availability.
   - If you have questions you can ask the Project Manager assigned to this project. 
   - Every ticket should have: description, narrative, definition of done, and acceptance criteria.

### Board statuses

**TODO Column**

Every issue that you see here is ready to start working on. Review them, ask questions if necesary and then assign the ticket to you.

**In progress column**

After you asigned your own ticket and you don't have questions, you can move your ticket to the In progress column. The in progress column reflects what you are currently working on. A good practice is to not have more than one ticket in this column.

**Code review column:**

When you move your ticket to this column, make sure you have your PR open with the tag 'ready for review'

Good practices:
- In the description of your MR, add screenshots or videos to show how the component or feature looks. (Doing this also helps the reviewer)
- Share your PR url in the #design_system channel to let the team know about your work. Y tiren paro para el review!
- The techlead in charge of this project is the one that approves your code. 

**Ready for QA column:** 

After your code review is approved, you make a demo with one of the designer availables in michelada to review how the component or visual element is displayed. 
If the designer has some feedback, you take your ticket to in progress again and address the comments. If everything looks ok, you can continue with the next column. 

Good practices:
- When you get feedback from the designer, comment the feedback in the comments of the ticket, to leave evidence and let the reviewer know what are the new changes. 

**Ready to publish column:**

After the designer approves your work, you move your ticket here and wait the other work of the milestonre to release it together, create a new version of the library and then publish it in the npm server. 

**Done columna:**

Every ticket that was moved to the public npm library is moved here. And your work is completed! 
