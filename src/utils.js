// this is for the getting experience year
export const getExperienceHandler = (year) => {
  return new Date().getFullYear() - year
}

//courese-details included Content
export let courseDetails = [
  {
    "id": "NVR",
    "name": "11 Plus",
    "title": "NVR",
    "image": "https://campus.w3schools.com/cdn/shop/files/react_930c122c-8d12-4a0a-85ef-67ca7e78bccf_1200x1200.png?v=1734688338",
    "description": "Learn the fundamentals of web development using HTML and CSS.",
    "content": [
      {
        "id": "Module - 01: Shapes",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 02: Counting",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 01: Pointing",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 01: Shading and Line Types",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 01: Order and Position",
        "description": "Shows the shape"
      }
    ],
    isTopCourse: true,
    thumbnail: "/assets/images/category-1.svg",
    duration: "8 Hours",
    badge: "Beginner",
     courseData :{
    title: "NVRRRRRR",
    subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
    description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "8 weeks",
    level: "Beginner",
    price: "$99",
    originalPrice: "$149",
    rating: 4.8,
    students: 1250,
    instructor: "Sarah Johnson",
    instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    whatIncluded: [
      "8 weeks of structured learning",
      "50+ hands-on coding exercises", 
      "Live instructor support",
      "Certificate of completion",
      "Lifetime access to materials",
      "Mobile and desktop access",
      "Interactive coding playground",
      "Parent progress reports"
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to Programmingsss",
        duration: "1 week",
        description: "Get started with the basics of programming and set up your coding environment.",
        lessons: [
          "What is programming?",
          "Setting up your workspace", 
          "Your first line of code",
          "Understanding variables",
          "Practice exercises"
        ]
      },
      {
        id: "2", 
        title: "Variables and Data Types",
        duration: "1 week",
        description: "Learn about different types of data and how to store information in variables.",
        lessons: [
          "Numbers and strings",
          "Boolean values",
          "Arrays and objects", 
          "Variable naming conventions",
          "Mini project: Personal profile"
        ]
      },
      {
        id: "3",
        title: "Functions and Logic", 
        duration: "1.5 weeks",
        description: "Master functions and conditional statements to make your programs interactive.",
        lessons: [
          "Creating your first function",
          "Function parameters and return values",
          "If/else statements",
          "Comparison operators", 
          "Project: Simple calculator"
        ]
      },
      {
        id: "4",
        title: "Loops and Repetition",
        duration: "1 week", 
        description: "Learn how to repeat actions efficiently using loops.",
        lessons: [
          "For loops",
          "While loops",
          "Loop control statements",
          "Nested loops",
          "Project: Pattern generator"
        ]
      },
      {
        id: "5",
        title: "Working with the Web",
        duration: "1.5 weeks",
        description: "Connect your JavaScript knowledge to web pages and user interactions.", 
        lessons: [
          "HTML and JavaScript connection",
          "Handling user input",
          "Changing web page content",
          "Event handling",
          "Project: Interactive web page"
        ]
      },
      {
        id: "6",
        title: "Fun Projects",
        duration: "2 weeks",
        description: "Apply everything you've learned by building exciting projects.",
        lessons: [
          "Project 1: Guess the number game",
          "Project 2: Digital clock", 
          "Project 3: Simple drawing app",
          "Project 4: Quiz application",
          "Final project presentation"
        ]
      }
    ]
  }
    
  },
  {
    "id": "VR",
    "name": "11 Plus",
    "title": "VR",
    "image": "https://campus.w3schools.com/cdn/shop/files/react_930c122c-8d12-4a0a-85ef-67ca7e78bccf_1200x1200.png?v=1734688338",
    "description": "A deep dive into JavaScript basics and DOM manipulation.",
    "content": [
      {
        "id": "Module - 01: Shapes",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 02: Counting",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 03: Pointing",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 04: Shading and Line Types",
        "description": "Shows the shape"
      }
    ],
    isTopCourse: true,
    thumbnail: "/assets/images/category-2.svg",
    duration: "8 Hours",
    badge: "Beginner",
         courseData :{
    title: "Complete JavaScript Programming for Kids",
    subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
    description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "8 weeks",
    level: "Beginner",
    price: "$99",
    originalPrice: "$149",
    rating: 4.8,
    students: 1250,
    instructor: "Sarah Johnson",
    instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    whatIncluded: [
      "8 weeks of structured learning",
      "50+ hands-on coding exercises", 
      "Live instructor support",
      "Certificate of completion",
      "Lifetime access to materials",
      "Mobile and desktop access",
      "Interactive coding playground",
      "Parent progress reports"
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to Programming",
        duration: "1 week",
        description: "Get started with the basics of programming and set up your coding environment.",
        lessons: [
          "What is programming?",
          "Setting up your workspace", 
          "Your first line of code",
          "Understanding variables",
          "Practice exercises"
        ]
      },
      {
        id: "2", 
        title: "Variables and Data Types",
        duration: "1 week",
        description: "Learn about different types of data and how to store information in variables.",
        lessons: [
          "Numbers and strings",
          "Boolean values",
          "Arrays and objects", 
          "Variable naming conventions",
          "Mini project: Personal profile"
        ]
      },
      {
        id: "3",
        title: "Functions and Logic", 
        duration: "1.5 weeks",
        description: "Master functions and conditional statements to make your programs interactive.",
        lessons: [
          "Creating your first function",
          "Function parameters and return values",
          "If/else statements",
          "Comparison operators", 
          "Project: Simple calculator"
        ]
      },
      {
        id: "4",
        title: "Loops and Repetition",
        duration: "1 week", 
        description: "Learn how to repeat actions efficiently using loops.",
        lessons: [
          "For loops",
          "While loops",
          "Loop control statements",
          "Nested loops",
          "Project: Pattern generator"
        ]
      },
      {
        id: "5",
        title: "Working with the Web",
        duration: "1.5 weeks",
        description: "Connect your JavaScript knowledge to web pages and user interactions.", 
        lessons: [
          "HTML and JavaScript connection",
          "Handling user input",
          "Changing web page content",
          "Event handling",
          "Project: Interactive web page"
        ]
      },
      {
        id: "6",
        title: "Fun Projects",
        duration: "2 weeks",
        description: "Apply everything you've learned by building exciting projects.",
        lessons: [
          "Project 1: Guess the number game",
          "Project 2: Digital clock", 
          "Project 3: Simple drawing app",
          "Project 4: Quiz application",
          "Final project presentation"
        ]
      }
    ]
  }
  },
  {
    "id": "Math",
    "name": "11 Plus",
    "title": "Maths",
    "image": "path_to_image_1.jpg",
    "description": "Learn the fundamentals of web development using HTML and CSS.",
    "content": [
      {
        "id": "Module - 01: Shapes",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 02: Counting",
        "description": "Shows the shape"
      }
    ],
         courseData :{
    title: "Complete JavaScript Programming for Kids",
    subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
    description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "8 weeks",
    level: "Beginner",
    price: "$99",
    originalPrice: "$149",
    rating: 4.8,
    students: 1250,
    instructor: "Sarah Johnson",
    instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    whatIncluded: [
      "8 weeks of structured learning",
      "50+ hands-on coding exercises", 
      "Live instructor support",
      "Certificate of completion",
      "Lifetime access to materials",
      "Mobile and desktop access",
      "Interactive coding playground",
      "Parent progress reports"
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to Programming",
        duration: "1 week",
        description: "Get started with the basics of programming and set up your coding environment.",
        lessons: [
          "What is programming?",
          "Setting up your workspace", 
          "Your first line of code",
          "Understanding variables",
          "Practice exercises"
        ]
      },
      {
        id: "2", 
        title: "Variables and Data Types",
        duration: "1 week",
        description: "Learn about different types of data and how to store information in variables.",
        lessons: [
          "Numbers and strings",
          "Boolean values",
          "Arrays and objects", 
          "Variable naming conventions",
          "Mini project: Personal profile"
        ]
      },
      {
        id: "3",
        title: "Functions and Logic", 
        duration: "1.5 weeks",
        description: "Master functions and conditional statements to make your programs interactive.",
        lessons: [
          "Creating your first function",
          "Function parameters and return values",
          "If/else statements",
          "Comparison operators", 
          "Project: Simple calculator"
        ]
      },
      {
        id: "4",
        title: "Loops and Repetition",
        duration: "1 week", 
        description: "Learn how to repeat actions efficiently using loops.",
        lessons: [
          "For loops",
          "While loops",
          "Loop control statements",
          "Nested loops",
          "Project: Pattern generator"
        ]
      },
      {
        id: "5",
        title: "Working with the Web",
        duration: "1.5 weeks",
        description: "Connect your JavaScript knowledge to web pages and user interactions.", 
        lessons: [
          "HTML and JavaScript connection",
          "Handling user input",
          "Changing web page content",
          "Event handling",
          "Project: Interactive web page"
        ]
      },
      {
        id: "6",
        title: "Fun Projects",
        duration: "2 weeks",
        description: "Apply everything you've learned by building exciting projects.",
        lessons: [
          "Project 1: Guess the number game",
          "Project 2: Digital clock", 
          "Project 3: Simple drawing app",
          "Project 4: Quiz application",
          "Final project presentation"
        ]
      }
    ]
  }
  },
  {
    "id": "English",
    "name": "11 Plus",
    "title": "English",
    "image": "path_to_image_1.jpg",
    "description": "Learn the fundamentals of web development using HTML and CSS.",
    "content": [
      {
        "id": "Module - 01: Shapes",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 02: Counting",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 03: Pointing",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 04: Shading and Line Types",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 05: Order and Position",
        "description": "Shows the shape"
      },
      {
        "id": "Module - 06: Order and Position",
        "description": "Shows the shape"
      }
    ],
    isTopCourse: true,
    thumbnail: "/assets/images/category-3.svg",
    duration: "11 Hours",
    badge: "Intermediate",
         courseData :{
    title: "Complete JavaScript Programming for Kids",
    subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
    description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "8 weeks",
    level: "Beginner",
    price: "$99",
    originalPrice: "$149",
    rating: 4.8,
    students: 1250,
    instructor: "Sarah Johnson",
    instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    whatIncluded: [
      "8 weeks of structured learning",
      "50+ hands-on coding exercises", 
      "Live instructor support",
      "Certificate of completion",
      "Lifetime access to materials",
      "Mobile and desktop access",
      "Interactive coding playground",
      "Parent progress reports"
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to Programming",
        duration: "1 week",
        description: "Get started with the basics of programming and set up your coding environment.",
        lessons: [
          "What is programming?",
          "Setting up your workspace", 
          "Your first line of code",
          "Understanding variables",
          "Practice exercises"
        ]
      },
      {
        id: "2", 
        title: "Variables and Data Types",
        duration: "1 week",
        description: "Learn about different types of data and how to store information in variables.",
        lessons: [
          "Numbers and strings",
          "Boolean values",
          "Arrays and objects", 
          "Variable naming conventions",
          "Mini project: Personal profile"
        ]
      },
      {
        id: "3",
        title: "Functions and Logic", 
        duration: "1.5 weeks",
        description: "Master functions and conditional statements to make your programs interactive.",
        lessons: [
          "Creating your first function",
          "Function parameters and return values",
          "If/else statements",
          "Comparison operators", 
          "Project: Simple calculator"
        ]
      },
      {
        id: "4",
        title: "Loops and Repetition",
        duration: "1 week", 
        description: "Learn how to repeat actions efficiently using loops.",
        lessons: [
          "For loops",
          "While loops",
          "Loop control statements",
          "Nested loops",
          "Project: Pattern generator"
        ]
      },
      {
        id: "5",
        title: "Working with the Web",
        duration: "1.5 weeks",
        description: "Connect your JavaScript knowledge to web pages and user interactions.", 
        lessons: [
          "HTML and JavaScript connection",
          "Handling user input",
          "Changing web page content",
          "Event handling",
          "Project: Interactive web page"
        ]
      },
      {
        id: "6",
        title: "Fun Projects",
        duration: "2 weeks",
        description: "Apply everything you've learned by building exciting projects.",
        lessons: [
          "Project 1: Guess the number game",
          "Project 2: Digital clock", 
          "Project 3: Simple drawing app",
          "Project 4: Quiz application",
          "Final project presentation"
        ]
      }
    ]
  }
  },
  {
    "id": "ds101",
    "name": "IQ and Critical Thinking",
    "title": "Introduction to Python",
    "image": "path_to_image_3.jpg",
    "description": "Start your Python journey with this beginner-friendly course.",
    duration: "8 Hours",
    badge: "Beginner",
         courseData :{
    title: "Complete JavaScript Programming for Kids",
    subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
    description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "8 weeks",
    level: "Beginner",
    price: "$99",
    originalPrice: "$149",
    rating: 4.8,
    students: 1250,
    instructor: "Sarah Johnson",
    instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    whatIncluded: [
      "8 weeks of structured learning",
      "50+ hands-on coding exercises", 
      "Live instructor support",
      "Certificate of completion",
      "Lifetime access to materials",
      "Mobile and desktop access",
      "Interactive coding playground",
      "Parent progress reports"
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to Programming",
        duration: "1 week",
        description: "Get started with the basics of programming and set up your coding environment.",
        lessons: [
          "What is programming?",
          "Setting up your workspace", 
          "Your first line of code",
          "Understanding variables",
          "Practice exercises"
        ]
      },
      {
        id: "2", 
        title: "Variables and Data Types",
        duration: "1 week",
        description: "Learn about different types of data and how to store information in variables.",
        lessons: [
          "Numbers and strings",
          "Boolean values",
          "Arrays and objects", 
          "Variable naming conventions",
          "Mini project: Personal profile"
        ]
      },
      {
        id: "3",
        title: "Functions and Logic", 
        duration: "1.5 weeks",
        description: "Master functions and conditional statements to make your programs interactive.",
        lessons: [
          "Creating your first function",
          "Function parameters and return values",
          "If/else statements",
          "Comparison operators", 
          "Project: Simple calculator"
        ]
      },
      {
        id: "4",
        title: "Loops and Repetition",
        duration: "1 week", 
        description: "Learn how to repeat actions efficiently using loops.",
        lessons: [
          "For loops",
          "While loops",
          "Loop control statements",
          "Nested loops",
          "Project: Pattern generator"
        ]
      },
      {
        id: "5",
        title: "Working with the Web",
        duration: "1.5 weeks",
        description: "Connect your JavaScript knowledge to web pages and user interactions.", 
        lessons: [
          "HTML and JavaScript connection",
          "Handling user input",
          "Changing web page content",
          "Event handling",
          "Project: Interactive web page"
        ]
      },
      {
        id: "6",
        title: "Fun Projects",
        duration: "2 weeks",
        description: "Apply everything you've learned by building exciting projects.",
        lessons: [
          "Project 1: Guess the number game",
          "Project 2: Digital clock", 
          "Project 3: Simple drawing app",
          "Project 4: Quiz application",
          "Final project presentation"
        ]
      }
    ]
  }
  },
  {
    "id": "ds102",
    "name": "IQ and Critical Thinking",
    "title": "Machine Learning Basics",
    "image": "path_to_image_4.jpg",
    "description": "Learn the fundamentals of machine learning algorithms.",
    isTopCourse: true,
    thumbnail: "/assets/images/category-4.svg",
    duration: "10 Hours",
    badge: "Advanced",
         courseData :{
    title: "Complete JavaScript Programming for Kids",
    subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
    description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "8 weeks",
    level: "Beginner",
    price: "$99",
    originalPrice: "$149",
    rating: 4.8,
    students: 1250,
    instructor: "Sarah Johnson",
    instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    whatIncluded: [
      "8 weeks of structured learning",
      "50+ hands-on coding exercises", 
      "Live instructor support",
      "Certificate of completion",
      "Lifetime access to materials",
      "Mobile and desktop access",
      "Interactive coding playground",
      "Parent progress reports"
    ],
    modules: [
      {
        id: "1",
        title: "Introduction to Programming",
        duration: "1 week",
        description: "Get started with the basics of programming and set up your coding environment.",
        lessons: [
          "What is programming?",
          "Setting up your workspace", 
          "Your first line of code",
          "Understanding variables",
          "Practice exercises"
        ]
      },
      {
        id: "2", 
        title: "Variables and Data Types",
        duration: "1 week",
        description: "Learn about different types of data and how to store information in variables.",
        lessons: [
          "Numbers and strings",
          "Boolean values",
          "Arrays and objects", 
          "Variable naming conventions",
          "Mini project: Personal profile"
        ]
      },
      {
        id: "3",
        title: "Functions and Logic", 
        duration: "1.5 weeks",
        description: "Master functions and conditional statements to make your programs interactive.",
        lessons: [
          "Creating your first function",
          "Function parameters and return values",
          "If/else statements",
          "Comparison operators", 
          "Project: Simple calculator"
        ]
      },
      {
        id: "4",
        title: "Loops and Repetition",
        duration: "1 week", 
        description: "Learn how to repeat actions efficiently using loops.",
        lessons: [
          "For loops",
          "While loops",
          "Loop control statements",
          "Nested loops",
          "Project: Pattern generator"
        ]
      },
      {
        id: "5",
        title: "Working with the Web",
        duration: "1.5 weeks",
        description: "Connect your JavaScript knowledge to web pages and user interactions.", 
        lessons: [
          "HTML and JavaScript connection",
          "Handling user input",
          "Changing web page content",
          "Event handling",
          "Project: Interactive web page"
        ]
      },
      {
        id: "6",
        title: "Fun Projects",
        duration: "2 weeks",
        description: "Apply everything you've learned by building exciting projects.",
        lessons: [
          "Project 1: Guess the number game",
          "Project 2: Digital clock", 
          "Project 3: Simple drawing app",
          "Project 4: Quiz application",
          "Final project presentation"
        ]
      }
    ]
  }
  }
]

//this is related to box color in category
export let color = ["170, 75%, 41%", "351, 83%, 61%", "229, 75%, 58%", "42, 94%, 55%"]