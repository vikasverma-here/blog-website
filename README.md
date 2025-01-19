



Blog Website
Live Link
🔗 https://deft-souffle-484c50.netlify.app/

GitHub Repository
🐙 https://github.com/vikasverma-here/blog-website

Folder Structure
   Blog Website 
    ├── images
    │   └── (Total 13 images)
    ├── js
    │   ├── blog.js
    │   ├── dummydata.js
    │   ├── editor.js
    │   ├── main.js
    │   └── notes.js
    ├── pages
    │   ├── about.html
    │   ├── blog.html
    │   ├── contact.html
    │   ├── notes.html
    │   └── signup.html
    ├── styles
    │   └── style.css
├── index.html
└── README.md

Note-The website is fully responsive to the best of my ability.

Explanation of Folders and How They Work Together
 
 
A. Blog Website
The root folder contains 4 subfolders (images, js, pages, styles) and 2 files (index.html and README.md).

B. Images Folder
This folder holds all the images used across the website (a total of 13 images).

C. JS Folder

1=blog.js: This file uses a news API where users can enter a query, and based on their input, articles will be fetched and displayed.

2=dummydata.js: Contains some sample data for the homepage, particularly for the "cart" sections shown to users.

3=editor.js: Implements a rich text editor for creating blog posts, where users can write and post their content.

Features:
       . Bold, Italic, and Underline text styles
       . Text listing
       . Customize font size

Future Improvements:
       . Display editor content on the homepage
       . Add options to copy/download images and share articles
       . Save editor content in local storage and the database


main.js:The core file of the website, connecting all the pages together.


notes.js: Enables users to save notes related to articles for future reference.

  Features:
        . Add, edit, and delete notes with title and description

  Future Improvements:
        . Add date functionality
        . Share notes
        . Store notes in local storage


D. Pages Folder

. about.html: Contains static content related to the "About" section.
. blog.html: Displays fetched data based on a user's query input through the API.
. contact.html: Contains static content related to the "Contact" section.
. create.html: This page holds the UI for the text editor used to create blog posts.
. notes.html: Displays the UI for the Notes section.
. signup.html: Contains the UI for the sign-up page.


E. Styles Folder
style.css: The main CSS file responsible for the styling of the entire website.

F. index.html
This is the main HTML file from which all other pages are linked.



Website Features & Future Improvements
🔧 Current Features:

User interaction with APIs to fetch personalized articles.
A rich text editor to create and manage blog posts.
A notes section to save articles for future reference.


🔮 Future Improvements:

Storing content locally and enhancing user experience.
Adding sharing functionality for articles and notes