export const quizDetails = [
  {
    id: 1,
    title: "quiz 1",
    duration: 60,
    description:
      "You are given 60 minutes to complete the quiz. You can submit your answers at any time within the given time.",
    questions: [
      {
        id: "q1",
        question: "What is the purpose of the HTML 'head' element?",
        options: [
          { label: "To define the main content of the HTML document" },
          {
            label: "To specify the title, metadata, and linked stylesheets",
            correctAnswer: true,
          },
          { label: "To create a horizontal line in the document" },
          { label: "To define a section containing navigation links" },
        ],
      },
      {
        id: "q2",
        question:
          "Which of the following is a valid way to declare a JavaScript variable?",
        options: [
          { label: "var myVariable = 10;" },
          { label: "variable myVariable = 10;" },
          { label: "let myVariable = 10;" },
          { label: "const myVariable = 10;", correctAnswer: true },
        ],
      },
      {
        id: "q3",
        question: "What does the CSS property 'display: none;' do?",
        options: [
          { label: "Makes the element visible" },
          { label: "Hides the element", correctAnswer: true },
          { label: "Changes the font size of the element" },
          { label: "Adds a border around the element" },
        ],
      },
      {
        id: "q4",
        question: "In React, what is the purpose of the 'useState' hook?",
        options: [
          { label: "To fetch data from an API" },
          {
            label: "To manage state in a functional component",
            correctAnswer: true,
          },
          { label: "To define a new component" },
          { label: "To handle routing in a React application" },
        ],
      },
      {
        id: "q5",
        question: "What is the purpose of the 'SQL' language?",
        options: [
          { label: "To style web pages" },
          {
            label: "To query and manipulate relational databases",
            correctAnswer: true,
          },
          { label: "To create interactive user interfaces" },
          { label: "To define the structure of an HTML document" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "quiz 2",
    duration: 60,
    description:
      "You are given 60 minutes to complete the quiz. You can submit your answers at any time within the given time.",
    questions: [
      {
        id: "q1",
        question: "What is the purpose of the HTML 'doctype' declaration?",
        options: [
          {
            label: "Defines the document type and version of HTML",
            correctAnswer: true,
          },
          { label: "Declares a new HTML element" },
          { label: "Specifies the color of the text" },
          { label: "Creates a link to an external stylesheet" },
        ],
      },
      {
        id: "q2",
        question:
          "Which CSS property is used to set the background color of an element?",
        options: [
          { label: "color" },
          { label: "background" },
          { label: "background-color", correctAnswer: true },
          { label: "text-color" },
        ],
      },
      {
        id: "q3",
        question: "What is the purpose of the JavaScript 'forEach' method?",
        options: [
          { label: "To create a new array" },
          {
            label: "To iterate over the elements of an array",
            correctAnswer: true,
          },
          { label: "To filter array elements based on a condition" },
          { label: "To sort the elements of an array" },
        ],
      },
      {
        id: "q4",
        question:
          "In React, what is the purpose of the 'componentDidMount' lifecycle method?",
        options: [
          { label: "To update the component's state" },
          { label: "To handle events triggered by user actions" },
          {
            label:
              "To perform actions after the component has been mounted to the DOM",
            correctAnswer: true,
          },
          { label: "To define the component's initial state" },
        ],
      },
      {
        id: "q5",
        question:
          "What is the role of the 'DOCTYPE' declaration in an HTML document?",
        options: [
          {
            label: "It defines the document type and version of HTML",
            correctAnswer: true,
          },
          { label: "It creates a new HTML element" },
          { label: "It specifies the color of the text" },
          { label: "It links to an external stylesheet" },
        ],
      },
    ],
  },
];
