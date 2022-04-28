# Sips & Bits

CSS library app built for michelada.io by michelada engineers

### Tech Stack

- 

### Local Environment Setup

1. Clone the project

```
git clone git@github.com:michelada/design_system.git
```

2. Install dependencies

```
npm install
```

3. Run the dev server
```
npm start
```

This will start a dev server and will watch the files for any change.

### Workflow

1. Create a branch from main/master
  1.1. feature: feature/functionality-name when is a new feature
  1.2. chore: chore/functionality-name when is a chore work, configs, rename, etc
  1.3. bug-fix: bugfix/functionality-name when is a bug on the live site that should be fixed and merged into the next deployment
  1.4. hot-fix: hotfix/functionality-name comes from the need to act immediately upon an undesired state of a live production version. A hotfix is not required to be be pushed during a scheduled deployment.
2. Add commits
3. Open a merge request (name it following the merge request naming convention)
4. Discuss and review your code
5. Have QA test your changes in a review app
6. Merge to main/master branch
7. Have QA test your changes in integration on the staging environment
8. Deploy to production

### Merge request naming convention

We use [semantic-release](https://github.com/semantic-release/semantic-release) to keep a consistent versioning of our code base, semantic-release uses the commit messages to determine the type of changes in the codebase. Following formalized conventions for commit messages, semantic-release automatically determines the next semantic version number, generates a changelog and publishes the release. But in our case, we don't require you to follow this convention on every single commit you add, instead, just follow the convention on the name of your merge request, for this we use the [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Change Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
  │                          ngcc|ve
  │
  └─⫸ Change Type: build|ci|docs|feat|fix|perf|refactor|test
```


#### Deploy

- #### Production

  Once QA approves the changes, a manual deploy to production...


## Kanban Workflow  
Here, we use a different agile practice named Kanban to deliver fast and beatiful CSS 👩‍💻

Let's talk about our agile workflow:
1. First thing your need to know, there is no sprints! yay :dance_dog:
2. You decide what to work on. You look at the tickets in the TODO column and assign the one that fits your availability.
   - If you have questions you can ask the Project Manager assigned to this project. 
   - Every ticket should have: description, narrative, definition of done, and acceptance criteria.
3. Our board: https://github.com/michelada/design_system/projects/1

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

## Milestones

We organize the work by milestone. After every milestone is completed, we shipped that code and publish a new version of the library.
You can take a look at the milestones list to know in what milestone we are working on. https://github.com/michelada/design_system/milestones

## How to publish a new version in npm

1. Log into npm (be part of michelada organization in npm)
2. Update the version number in package.json
   - You can do it manually, updating the version number in the package.json.
   - Or using the command `npm --no-git-tag-version version <update_type|number>` in the folder terminal. https://docs.npmjs.com/cli/v7/commands/npm-version
   - The "version" field must be in the form x.x.x and follow the semantic-versioning guidelines. https://docs.npmjs.com/about-semantic-versioning
3. Run the following commands in order:
  * `npm run build`
  * `npm run pre-publish`
  * `npm run post-pre-publish`
  * `npm run upload`
4. Verify in npm if the new version and the package is updated. **_Do not forget to push your changes_**
