import gameOfLife from "../assets/game-of-life.png"
import calculator from "../assets/calculator.png"
import currency from "../assets/currency.png"
import dadjokes from "../assets/dadjokes.png"
import github from "../assets/github.png"
import nasa from "../assets/nasa.jpg"
import resume from "../assets/resume.png"
import toDo from "../assets/to-do.png"
import weightlifting from "../assets/weightlifting.png"
import chef from "../assets/chef.png"
import covid from "../assets/covid.png"

export const projects = [
  {
    name: "Digital Resume",
    description: "Easy-to-read digital resume that utilizes only html and css",
    url: "https://resume.kylerichardson.tech",
    github: "https://github.com/kyle-richardson/kyle-richardson.github.io",
    image: resume,
    tools: ["html5", "css3", "less"],
    deployed: "github pages",
    notes: "",
  },
  {
    name: "COVID-19 County Info",
    description:
      "Built to resolve a problem: I could not find county info for my area.",
    url: "https://covid.kylerichardson.tech",
    github: "https://github.com/kyle-richardson/covid-info-for-me/",
    image: covid,
    tools: ["html5", "css3", "js", "react"],
    libraries: ["Evergreen UI", "Disease.sh API"],
    deployed: "netlify",
    notes: "",
  },
  {
    name: "Todo List",
    description:
      "One of my first projects.  Utilizes local storage instead of a database to save content on refresh. Uses class-based react components.",
    url: "https://kyle-todo.netlify.com",
    github: "https://github.com/kyle-richardson/React-Todo/",
    image: toDo,
    tools: ["html5", "css3", "js", "react"],
    deployed: "netlify",
    notes: "",
  },
  {
    name: "Calculator",
    description:
      "Fully functional simple calculator with history log.  Uses class-based react components.",
    url: "https://kyle-lambda-calculator.netlify.com",
    github: "https://github.com/kyle-richardson/lambda-calculator",
    image: calculator,
    tools: ["html5", "css3", "js", "react"],
    deployed: "netlify",
    notes: "",
  },
  {
    name: "Github Network",
    description:
      "Simple way to search github by username and see their followers and contribution graph. Uses class-based react components.",
    url: "https://kyle-github-network.netlify.com",
    github: "https://github.com/kyle-richardson/React-Github-User-Card",
    image: github,
    tools: ["html5", "css3", "js", "react"],
    libraries: ["Github API"],
    deployed: "netlify",
    notes: "",
  },

  {
    name: "Nasa POTD",
    description:
      "References NASA photo of the day API to show today's incredible photo along with a description. Uses functional react components",
    url: "https://kyle-nasa-potd.netlify.com",
    github: "https://github.com/kyle-richardson/nasa-photo-of-the-day",
    image: nasa,
    tools: ["html5", "css3", "js", "react"],
    libraries: ["styled components", "NASA POTD API"],
    deployed: "netlify",
    notes: "",
  },
  {
    name: "Currency Exchange Rate",
    description:
      "Quick and simple app to calculate exchange rates from USD to any currency in the world",
    url: "https://kyle-currency.netlify.app/",
    github: "https://github.com/kyle-richardson/currency-exchange",
    image: currency,
    tools: ["html5", "css3", "js", "react"],
    libraries: ["Redux", "OpenExchange API", "Rest Countries API"],
    deployed: "netlify",
    notes: "",
  },
  {
    name: "Conway's Game of Life",
    description:
      "My interpretation of James Conway's classic 1970 cellular automation algorithm.",
    url: "https://game-of-life-kyle.netlify.app/",
    github: "https://github.com/kyle-richardson/game-of-life",
    image: gameOfLife,
    tools: ["html5", "css3", "js", "react"],
    libraries: ["Material UI"],
    deployed: "netlify",
    notes: "",
  },

  {
    name: "Weightlifting Journal",
    description:
      "Record your workout sessions with a simple and elegant design. Uses fully functional back end API which I helped build.",
    url: "https://weightlifting-journal.netlify.com/register",
    github: "https://github.com/BW-WeightLiftingJournal",
    image: weightlifting,
    tools: ["html5", "css3", "less", "js", "react", "node-js"],
    libraries: ["Material UI", "Redux"],
    deployed: "netlify",
    notes: "Built with small team in 2 weeks",
  },
  {
    name: "Dad Jokes",
    description:
      "Create, view, and share your favorite dad jokes. Uses fully functional back end API which I helped build.",
    url: "https://front-end-1e5w5oznv.now.sh/",
    github: "https://github.com/Build-Week-PT-Dad-Jokes",
    image: dadjokes,
    tools: ["html5", "css3", "less", "js", "react", "node-js"],
    libraries: ["Material UI", "Redux"],
    deployed: "zeit",
    notes: "Built with small team in 2 weeks",
  },
  {
    name: "Neighborhood Chef",
    description:
      "Social media event creation app to help get to know your neighbors while sharing in good eatin'.",
    url: "https://neighborhood-chef.netlify.app",
    github: "https://github.com/kyle-richardson/neighborhood-chef-fe",
    image: chef,
    tools: ["html5", "css3", "less", "js", "react", "node-js"],
    libraries: [
      "Material UI",
      "Redux",
      "GraphQL",
      "Okta API",
      "Mapbox API",
      "Iconify",
    ],
    deployed: "aws",
    notes: "Built with small team in 3 months",
  },
];
