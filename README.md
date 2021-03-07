# Portfolio

This project is created to have a portfolio website in minutes.

## Tech used

The theme is built in Reactjs using [Semantic-ui-react](https://react.semantic-ui.com) component and css.

## Pre-requisites

1. Github Account
2. Nodejs installed on your machine
3. Any editor like Notepad++, VS Code.

# Steps

Follow the steps to setup the your portfolio website.  
Use the live site for reference.  
[schadokar.github.io/portfolio](https://schadokar.github.io/portfolio)

## Fork the repo

Click on fork button.
It will create copy of the repository to your account.

## Clone the repository

Open terminal or cmd in your PC.  
Go to location where you want to clone the repository.

```
git clone https://github.com/<your username>/portfolio
```

## Run the application

Go to the project directory and open the terminal or cmd in it.

### Install dependencies

```
npm install
```

### Run the project

```
npm start
```

### Make it live

Follow the next section to update the portfolio.

Once the update is complete, run it using `npm run start` and check if everything is fine.

Stop the application if it is running.

Go to `package.json` and change the `homepage`.

```
"homepage": "https://<your github username>.github.io/portfolio",
```

**Deploy it**  
Run the below command to deploy it

```
npm run deploy
```

### Save the progress

Once everything is deployed and you're happy with it, commit the code.

```
git add .

git commit -m 'portfolio updated'

git push origin main
```

## Instructions to update the portfolio

Open the project in code editor for code highlighting.

Open `src/profile.json`.

In the profile, array is used as a list. In the portfolio, it will render/print the list content from index 0 to last index.  
For example, In experiences, most recent experiences should be at index 0.

### Order of the content

You can change the order of content to be shown in the portfolio.

```json
"contentOrder": [
    "skills",
    "experiences",
    "projects",
    "certifications",
    "educations"
  ]
```

> Don't edit anything else other than order.

### Basic Info

Update the basic info

```json
"name": "Full Name",
"profilePicture": "profile.jpg",
"title": "Software Developer",
"quote": "The best way you can predict the future is to create it.",
"summary": "Software engineer with 5+ years experience in commercial application development. Eager to join XYZ Inc. to build innovative and cutting edge business solutions for the impressive suite of clients within its global reach. In previous roles, slashed downtime by 25% and ensured 98% on-time project completion. Also identified and dealt with a significant process bottleneck that boosted coding efficiency by 35% when resolved.",
"currentCompany": "ABC",
```

### Profile Picture

Add the profile picture in the `public` folder.

Update the filename with extension in the `src/profile.json`.

### Education

It is an array. In the portfolio website it will format the array from index 0 to last index.  
Add your education details in descending order.

**Education syntax**

```json
{
  "organisation": "Name of the Organisation, College or School",
  "year": "2014-2016",
  "field": "Masters of Science, Software Engineering",
  "projects": ["Project 1", "Project 2"]
}
```

If you don't have any project, that's fine keep it as an empty array.

```
"projects": []
```

### Experience

**Experience syntax**

```json
{
  "organisation": "Name of the organisation",
  "year": "Month Year - Month Year(Present)",
  "works": ["point1", "point2"]
}
```

In the work, add all the bullet points.

### Links

Links are the point of contacts using which other can contact you.

The `theme1` is using icons provided in the semantic ui. You can check the available
icons.

[Available Icons](https://react.semantic-ui.com/elements/icon/)

**Link syntax**

```json
{
  "icon-name": "link url",
  "color": "color"
}
```

**Available Colors**

```
red, orange, yellow, olive, green, teal, blue, violet, purple, pink, brown, grey, black
```

> The `color` field is optional. Default color is black.

### Skills

Skills is divided into 2 parts.  
In `semantic-ui` there are many brand icons available. To use these icons, add the skill in `skillsWithIcon` field and remaining in the `skills` field.

**Skills syntax**

```json
 "skills": ["Data Structures", "Agile", "Golang", "Java", "Management"]
```

**Skills With Icons Syntax**

[Available Icons](https://react.semantic-ui.com/elements/icon/)
Check in Brands

**Available Colors**

```
red, orange, yellow, olive, green, teal, blue, violet, purple, pink, brown, grey, black
```

The default color is black.

```json
{ "name": "aws", "color": "orange" }
```

Or only add icon name

```json
"skillsWithIcon": [
    { "name": "aws", "color": "orange" },
    "github"
   ]
```

### Projects

In this section, your side projects, ngo work, other college project or any project you like to add.

**Project syntax**

```json
{
  "link": "https://project1.com",
  "title": "Project you are proud of."
}
```

If there is no link, keep it empty.

```json
{
  "link": "",
  "title": "Project 2 without link"
}
```

### Certifications

**Certificate syntax**

```json
{
  "link": "www.youracclaim.com/badges/xxxxx-xxxx-xxxx",
  "title": "Google Cloud Platform Fundamentals: Core Infrastructure",
  "certifiedBy": "Google"
}
```

### Resume

Add the resume link.
You can save it in google drive and make link public or add the resume in the same github provide its link.

To use the github hosted link, you first have to commit the resume and push it in the github.

### Change the background color and font-family

Open `src/components/Theme/theme-1/theme.css`.
In the `body`, you can change the `background-color` and `font-family`.

### Change the title

Open `public/index.html`.

You can change the title here.

## Upcoming Features

- A default resume builder which will build the resume using the above info.
- More icons
- Multiple themes to select

## For any query

For any query please create an issue.  
If you have any suggestions please create an issue.

---
