export const projects = [
  {
    name: "Digital Resume",
    description: "Easy-to-read digital resume that utilizes only html and css",
    url: "https://resume.kylerichardson.tech",
    github: "https://github.com/kyle-richardson/kyle-richardson.github.io",
    image: `${process.env.PUBLIC_URL}/assets/images/resume.png`,
    tools: ["html5", "css3", "less"],
    deployed: "github pages",
    notes: "",
  },
  {
    name: "Todo List",
    description:
      "One of my first projects.  Utilizes local storage instead of a database to save content on refresh. Uses class-based react components.",
    url: "https://kyle-todo.netlify.com",
    github: "https://github.com/kyle-richardson/React-Todo/",
    image: `${process.env.PUBLIC_URL}/assets/images/to-do.png`,
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
    image: `${process.env.PUBLIC_URL}/assets/images/calculator.png`,
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
    image: `${process.env.PUBLIC_URL}/assets/images/github.png`,
    tools: ["html5", "css3", "js", "react"],
    deployed: "netlify",
    notes: "",
  },

  {
    name: "Nasa POTD",
    description:
      "References NASA photo of the day API to show today's incredible photo along with a description. Uses functional react components",
    url: "https://kyle-nasa-potd.netlify.com",
    github: "https://github.com/kyle-richardson/nasa-photo-of-the-day",
    image: `${process.env.PUBLIC_URL}/assets/images/nasa.jpg`,
    tools: ["html5", "css3", "js", "react"],
    deployed: "netlify",
    notes: "",
  },
  {
    name: "Currency Exchange Rate",
    description:
      "Quick and simple app to calculate exchange rates from USD to any currency in the world",
    url: "https://kyle-currency.netlify.app/",
    github: "https://github.com/kyle-richardson/React-Redux-App",
    image: `${process.env.PUBLIC_URL}/assets/images/currency.png`,
    tools: ["html5", "css3", "js", "react"],
    libraries: ["Redux", "OpenExchange API", "Rest Countries API"],
    deployed: "netlify",
    notes: "",
  },

  {
    name: "Weightlifting Journal",
    description:
      "Record your workout sessions with a simple and elegant design. Uses fully functional back end API which I helped build.",
    url: "https://weightlifting-journal.netlify.com/register",
    github: "https://github.com/BW-WeightLiftingJournal",
    image: `${process.env.PUBLIC_URL}/assets/images/weightlifting.png`,
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
    image: `${process.env.PUBLIC_URL}/assets/images/dadjokes.png`,
    tools: ["html5", "css3", "less", "js", "react", "node-js"],
    libraries: ["Material UI", "Redux"],
    deployed: "zeit",
    notes: "Built with small team in 2 weeks",
  },
  {
    name: "Neighborhood Chef",
    description:
      "Social media event creation app to help get to know your neighbors while sharing in good eatin'.",
    url: "https://ourneighborhoodchef.com",
    github: "https://github.com/Lambda-School-Labs/neighborhood-chef-fe",
    image: `${process.env.PUBLIC_URL}/assets/images/chef.png`,
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
