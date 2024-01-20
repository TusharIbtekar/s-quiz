import type { Quiz } from "./quiz";

export const mockQuizes: Quiz[] = [
  {
    id: "1",
    title: "HTML, CSS, JavaScript, React, SQL",
    description:
      "You are given 60 minutes to complete the quiz. You can submit your answers at any time within the given time.",
    duration: 60,
    questions: [
      {
        id: "q1",
        title: "What is the purpose of the HTML 'head' element?",
        options: [
          {
            id: "q1o1",
            label: "To define the main content of the HTML document",
            correctAnswer: false,
          },
          {
            id: "q1o2",
            label: "To specify the title, metadata, and linked stylesheets",
            correctAnswer: true,
          },
          {
            id: "q1o3",
            label: "To create a horizontal line in the document",
            correctAnswer: false,
          },
          {
            id: "q1o4",
            label: "To define a section containing navigation links",
            correctAnswer: false,
          },
        ],
      },
      {
        id: "q2",
        title:
          "Which of the following is a valid way to declare a JavaScript variable?",
        options: [
          { id: "q2o1", label: "var myVariable = 10;", correctAnswer: false },
          {
            id: "q2o2",
            label: "variable myVariable = 10;",
            correctAnswer: false,
          },
          { id: "q2o3", label: "let myVariable = 10;", correctAnswer: false },
          { id: "q2o4", label: "const myVariable = 10;", correctAnswer: true },
        ],
      },
      {
        id: "q3",
        title: "What does the CSS property 'display: none;' do?",
        options: [
          {
            id: "q3o1",
            label: "Makes the element visible",
            correctAnswer: false,
          },
          { id: "q3o2", label: "Hides the element", correctAnswer: true },
          {
            id: "q3o3",
            label: "Changes the font size of the element",
            correctAnswer: false,
          },
          {
            id: "q3o4",
            label: "Adds a border around the element",
            correctAnswer: false,
          },
        ],
      },
      {
        id: "q4",
        title: "In React, what is the purpose of the 'useState' hook?",
        options: [
          {
            id: "q4o1",
            label: "To fetch data from an API",
            correctAnswer: false,
          },
          {
            id: "q4o2",
            label: "To manage state in a functional component",
            correctAnswer: true,
          },
          {
            id: "q4o3",
            label: "To define a new component",
            correctAnswer: false,
          },
          {
            id: "q4o4",
            label: "To handle routing in a React application",
            correctAnswer: false,
          },
        ],
      },
      {
        id: "q5",
        title: "What is the purpose of the 'SQL' language?",
        options: [
          { id: "q5o1", label: "To style web pages", correctAnswer: false },
          {
            id: "q5o2",
            label: "To query and manipulate relational databases",
            correctAnswer: true,
          },
          {
            id: "q5o3",
            label: "To create interactive user interfaces",
            correctAnswer: false,
          },
          {
            id: "q5o4",
            label: "To define the structure of an HTML document",
            correctAnswer: false,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "HTML, CSS, JavaScript, React",
    description:
      "You are given 60 minutes to complete the quiz. You can submit your answers at any time within the given time.",
    duration: 60,
    questions: [
      {
        id: "q1",
        title: "What is the purpose of the HTML 'doctype' declaration?",
        options: [
          {
            id: "q1o1",
            label: "Defines the document type and version of HTML",
            correctAnswer: true,
          },
          {
            id: "q1o2",
            label: "Declares a new HTML element",
            correctAnswer: false,
          },
          {
            id: "q1o3",
            label: "Specifies the color of the text",
            correctAnswer: false,
          },
          {
            id: "q1o4",
            label: "Creates a link to an external stylesheet",
            correctAnswer: false,
          },
        ],
      },
      {
        id: "q2",
        title:
          "Which CSS property is used to set the background color of an element?",
        options: [
          { id: "q2o1", label: "color", correctAnswer: false },
          { id: "q2o2", label: "background", correctAnswer: false },
          { id: "q2o3", label: "background-color", correctAnswer: true },
          { id: "q2o4", label: "text-color", correctAnswer: false },
        ],
      },
      {
        id: "q3",
        title: "What is the purpose of the JavaScript 'forEach' method?",
        options: [
          { id: "q3o1", label: "To create a new array", correctAnswer: false },
          {
            id: "q3o2",
            label: "To iterate over the elements of an array",
            correctAnswer: true,
          },
          {
            id: "q3o3",
            label: "To filter array elements based on a condition",
            correctAnswer: false,
          },
          {
            id: "q3o4",
            label: "To sort the elements of an array",
            correctAnswer: false,
          },
        ],
      },
      {
        id: "q4",
        title:
          "In React, what is the purpose of the 'componentDidMount' lifecycle method?",
        options: [
          {
            id: "q4o1",
            label: "To update the component's state",
            correctAnswer: false,
          },
          {
            id: "q4o2",
            label: "To handle events triggered by user actions",
            correctAnswer: false,
          },
          {
            id: "q4o3",
            label:
              "To perform actions after the component has been mounted to the DOM",
            correctAnswer: true,
          },
          {
            id: "q4o4",
            label: "To define the component's initial state",
            correctAnswer: false,
          },
        ],
      },
      {
        id: "q5",
        title:
          "What is the role of the 'DOCTYPE' declaration in an HTML document?",
        options: [
          {
            id: "q5o1",
            label: "It defines the document type and version of HTML",
            correctAnswer: true,
          },
          {
            id: "q5o2",
            label: "It creates a new HTML element",
            correctAnswer: false,
          },
          {
            id: "q5o3",
            label: "It specifies the color of the text",
            correctAnswer: false,
          },
          {
            id: "q5o4",
            label: "It links to an external stylesheet",
            correctAnswer: false,
          },
        ],
      },
    ],
  },
];
