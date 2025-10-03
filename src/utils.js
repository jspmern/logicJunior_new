// this is for the getting experience year
export const getExperienceHandler = (year) => {
  return new Date().getFullYear() - year
}

//courese-details included Content
export let courseDetails = [
  {
    "id": "NVR",
    // "name": "11 Plus",
    "title": "Non Verbal Reasoning",
    "image": "/assets/images/nvr_image.jpg",
    "description": "Non-verbal reasoning helps kids develop problem-solving, logical thinking, and pattern-recognition skills without relying on language. It strengthens memory, boosts creativity, and enhances cognitive flexibility, which supports success in academics, exams, and everyday problem-solving situations.",
    isTopCourse: true,
    thumbnail: "/assets/images/category-1.svg",
    duration: "6 Topics",
    badge: "Beginner",
    courseData :{
      // title: "NVRRRRRR",
      // subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
      // description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
      // image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8 weeks",
      level: "Beginner",
      price: "$***",
      originalPrice: "$149",
      rating: 4.8,
      students: 1250,
      instructor: "Sarah Johnson",
      instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      whatIncluded: [
        "60+ interactive visual puzzle", 
        "Live instructor support",
        "Certificate of completion",
        "Lifetime access to sheets and mock tests",
        "Mobile and desktop access",
        "Parent progress reports"
      ],
      modules: [
        {
          id: "1",
          title: "Visual Foundations",
          // duration: "1 week",
          description: "Get started with the basics of programming and set up your coding environment.",
          lessons: [
            "Lines, shapes, and symmetry basics",
            "Mirror images & reflections", 
            "Odd-one-out with simple figures"      
          ]
        },
        {
          id: "2", 
          title: "Series & Sequences",
          // duration: "1 week",
          description: "Learn about different types of data and how to store information in variables.",
          lessons: [
            "Shape sequences (size, shading, rotation)",
            "Multi-step pattern changes",
            "Speed drills for series recognition"
          ]
        },
        {
          id: "3",
          title: "Analogy & Classification", 
          // duration: "1.5 weeks",
          description: "Master functions and conditional statements to make your programs interactive.",
          lessons: [
            "Figure analogies (A:B :: C:?)",
            "Grouping figures by common properties",
            "Double-rule analogies"
          ]
        },
        {
          id: "4",
          title: "Rotation & 3D Visualisation",
          // duration: "1 week", 
          description: "Learn how to repeat actions efficiently using loops.",
          lessons: [
            "2D figure rotations",
            "3D cube rotations and hidden faces",
            "Painted-cube problems"
          ]
        },
        {
          id: "5",
          title: "Nets & Paper Folding",
          // duration: "1.5 weeks",
          description: "Connect your JavaScript knowledge to web pages and user interactions.", 
          lessons: [
            "Matching nets to 3D solids",
            "Paper folding & punch-hole puzzles",
            "Combining 3D shapes"
          ]
        },
        {
          id: "6",
          title: "Exam Skills & Mock Tests",
          // duration: "2 weeks",
          description: "Exam Skills & Mock Tests",
          lessons: [
            "Timed GL & CEM-style practice papers",
            "Strategy sessions: elimination & time management", 
            "Final full-length mock test and review"
          ]
        }
      ]
  }
    
  },
  {
    "id": "VR",
    // "name": "11 Plus",
    "title": "Verbal Reasoning",
    "image": "/assets/images/vr_image.png",
    "description": "Verbal reasoning helps kids improve comprehension, vocabulary, and critical thinking skills. It trains them to analyze written information, draw conclusions, and understand relationships between ideas. These abilities enhance communication, boost confidence, and support academic success across subjects and real-life situations.",
    isTopCourse: true,
    thumbnail: "/assets/images/category-2.svg",
    duration: "6 Topics",
    badge: "Beginner",
    courseData :{
      // title: "Complete JavaScript Programming for Kids",
      // subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
      // description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
      // image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8 weeks",
      level: "Beginner",
      price: "$***",
      originalPrice: "$149",
      rating: 4.8,
      students: 1250,
      instructor: "Sarah Johnson",
      instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      whatIncluded: [
        "60+ interactive verbal reasoning exercises",
        "Live instructor support",
        "Certificate of completion",
        "Lifetime access to practice sheets & mock tests",
        "Mobile and desktop access",
        "Parent progress reports"
      ],
      modules: [
        {
          id: "1",
          title: "Vocabulary & Word Skills",
          // duration: "1 week",
          description: "Get started with the basics of programming and set up your coding environment.",
          lessons: [
            "Synonyms, antonyms, and homophones",
            "Prefixes, suffixes, and root words", 
            "Word meanings in context"
          ]
        },
        {
          id: "2", 
          title: "Letter & Word Patterns",
          // duration: "1 week",
          description: "Learn about different types of data and how to store information in variables.",
          lessons: [
            "Alphabetical order and letter sequences",
            "Odd-one-out with letters and words",
            "Word ladders and anagrams"
          ]
        },
        {
          id: "3",
          title: "Analogies & Classification", 
          // duration: "1.5 weeks",
          description: "Master functions and conditional statements to make your programs interactive.",
          lessons: [
            "Word analogies (cause–effect, part–whole, function)",
            "Word grouping and classification",
            "Double-rule analogies"
          ]
        },
        {
          id: "4",
          title: "Comprehension & Critical Thinking",
          // duration: "1 week", 
          description: "Learn how to repeat actions efficiently using loops.",
          lessons: [
            "Short passage comprehension",
            "Logical conclusions and sequencing"      
          ]
        },
        {
          id: "5",
          title: "Codes & Word Puzzles",
          // duration: "1.5 weeks",
          description: "Connect your JavaScript knowledge to web pages and user interactions.", 
          lessons: [
            "Letter and number codes",
            "Coded messages and cryptograms",
            "Direction and instruction puzzles"
          ]
        },
        {
          id: "6",
          title: "Exam Skills & Mock Tests",
          duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Timed GL & CEM-style practice papers",
            "Strategy sessions: elimination & time management", 
            "Full-length mock test and review"
          ]
        }
      ]
  }
  },
  {
    "id": "IQ",
    "name": "11 Plus",
    "title": "IQ",
    "image": "/assets/images/iq_image.png",
    "description": "IQ helps assess a child’s cognitive abilities, including problem-solving, reasoning, and learning capacity. Understanding their IQ can guide personalized learning, identify strengths and weaknesses, and support overall intellectual development, boosting confidence and academic growth.",
    duration: "7 Topics",
    courseData :{
      // title: "Complete JavaScript Programming for Kids",
      // subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
      // description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
      // image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8 weeks",
      level: "Beginner",
      price: "$***",
      originalPrice: "$149",
      rating: 4.8,
      students: 1250,
      instructor: "Sarah Johnson",
      instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      whatIncluded: [
        "50+ interactive puzzles and activities", 
        "Live instructor guidance",
        "Parent progress reports",
        "Printable practice sheets",
        "Certificate of completion"
      ],
      modules: [
        {
          id: "1",
          title: "Logical Reasoning Basics",
          // duration: "1 week",
          description: "Get started with the basics of programming and set up your coding environment.",
          lessons: [
            "Pattern recognition and sequencing",
            "Simple cause–effect puzzles", 
            "Odd-one-out exercises",
            "True/false reasoning games",
            "Quick daily logic riddles"
          ]
        },
        {
          id: "2", 
          title: "Numerical & Analytical Skills",
          // duration: "1 week",
          description: "Learn about different types of data and how to store information in variables.",
          lessons: [
            "Number, patterns and series",
            "Simple arithmetic word problems",
            "Coding & decoding numbers", 
            "Magic squares and Venn diagrams",
            "Speed–accuracy challenges"
          ]
        },
        {
          id: "3",
          title: "Spatial & Visual Reasoning", 
          // duration: "1.5 weeks",
          description: "Master functions and conditional statements to make your programs interactive.",
          lessons: [
            "2D and 3D shape manipulation",
            "Mirror and water reflections",
            "Paper folding and punch-hole puzzles",
            "Tangram and block-building activities", 
            "Mental rotation tasks"
          ]
        },
        {
          id: "4",
          title: "Memory & Concentration",
          // duration: "1 week", 
          description: "Learn how to repeat actions efficiently using loops.",
          lessons: [
            "Short- and long-term memory games",
            "Visual recall grids",
            "Sound and sequence recall",
            "Mnemonic techniques",
            "Timed focus challenges"
          ]
        },
        {
          id: "5",
          title: "Critical & Creative Thinking",
          // duration: "1.5 weeks",
          description: "Connect your JavaScript knowledge to web pages and user interactions.", 
          lessons: [
            "Lateral thinking riddles",
            "“What if” scenario problem solving",
            "Brainstorming alternative uses",
            "Decision-making under constraints",
            "Debrief discussions to explain reasoning"
          ]
        },
        {
          id: "6",
          title: "Integrated IQ Challenges",
          // duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Mixed-topic IQ test simulations",
            "Group problem-solving projects", 
            "Time-bound team puzzles",
            "Review of strategies and strengths",
            "Final mock IQ assessment & feedback"
          ]
        },
        {
          id: "7",
          title: "Additional Topics",
          // duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Visual Reasoning → Patterns, sequences, and analogy patterns",
            "Elements moving upwards, downwards, clockwise, anti-clockwise",
            "Shapes, alphabets, and colours",
            "Right and Left Directions → Reinforcing left-right orientation",
            "Fundamental for reasoning problems and life skills",
            "Frequently tested in Olympiads",
            "Coding & Decoding → Spotting patterns in alphabets, combinations using 26 letters",
            "General Knowledge (GK) → Daily facts, riddles, fun puzzles",
            "Sudoku → Fun IQ game, 4x4 practice",
            "Matrix Patterns → Rows, columns, and cells",
            "Picture Inferences → Logical thinking with images",
            "Relationships → Connections between items/events/processes",
            "Fun Games → Interactive IQ-based games"
          ]
        }
      ]
  }
  },
  {
    "id": "Public speaking",
    "name": "11 Plus",
    "title": "Public Speaking",
    "image": "/assets/images/publicSpeaking_image.png",
    duration: "7 Topics",
    "description": "Public speaking builds a child’s confidence, communication skills, and ability to express ideas clearly. It enhances critical thinking, social interaction, and leadership qualities, helping them succeed academically, socially, and in future personal and professional endeavors.",
    isTopCourse: true,
    thumbnail: "/assets/images/category-3.svg",
    price: "$***",
    originalPrice: "$149",
    badge: "Intermediate",
    courseData :{
      // title: "Complete JavaScript Programming for Kids",
      // subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
      // description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
      // image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8 weeks",
      level: "Beginner",
      price: "$99",
      originalPrice: "$149",
      rating: 4.8,
      students: 1250,
      instructor: "Sarah Johnson",
      instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      whatIncluded: [
        "Boost confidence and communication skills",
        "Improve voice modulation, clarity, and fluency", 
        "Master body language, gestures, and stage presence",
        "Fun interactive activities and speech practice",
        "Certificate of completion"
      ],
      modules: [
        {
          id: "1",
          title: "Foundations of Public Speaking",
          // duration: "1 week",
          description: "Get started with the basics of programming and set up your coding environment.",
          lessons: [
            "Understanding public speaking and its importance",
            "Overcoming fear and building confidence", 
            "Daily speaking warm-up exercises",
            "Maintaining eye contact with audience",
            "Basic posture and body alignment"
          ]
        },
        {
          id: "2", 
          title: "Speech Writing & Structure",
          // duration: "1 week",
          description: "Learn about different types of data and how to store information in variables.",
          lessons: [
            "Organizing ideas: Introduction, Body, Conclusion",
            "Writing clear and simple language",
            "Using examples, stories, and analogies", 
            "Adding engaging hooks",
            "Structuring short speeches"
          ]
        },
        {
          id: "3",
          title: "Voice, Tone & Expression", 
          // duration: "1.5 weeks",
          description: "Master functions and conditional statements to make your programs interactive.",
          lessons: [
            "Voice modulation: pitch, volume, tone",
            "Emphasizing key points",
            "Pausing and pacing for clarity",
            "Facial expressions", 
            "Tongue twisters and vocal exercises"
          ]
        },
        {
          id: "4",
          title: "Presentation Skills & Body Language",
          // duration: "1 week", 
          description: "Learn how to repeat actions efficiently using loops.",
          lessons: [
            "Posture, gestures, confident stage movement",
            "Hands, facial expressions, gestures effectively",
            "Audience engagement",
            "Reading audience reactions",
            "Props & visual aids"
          ]
        },
        {
          id: "5",
          title: "Interactive Speaking Activities",
          // duration: "1.5 weeks",
          description: "Connect your JavaScript knowledge to web pages and user interactions.", 
          lessons: [
            "Impromptu speaking",
            "Storytelling and narratives",
            "Role-play and scenarios",
            "Group discussions & mini-debates",
            "Peer feedback & reflection"
          ]
        },
        {
          id: "6",
          title: "Advanced Speaking & Confidence Building",
          // duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Persuasive speech techniques",
            "Handling questions", 
            "Delivering under time constraints",
            "Combining verbal + non-verbal communication",
            "Final presentations + feedback"
          ]
        },
        {
          id: "7",
          title: "Additional Key Elements",
          // duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Confidence & Self-Esteem",
            "Critical Thinking",
            "Voice Modulation & Clarity",
            "Body Language & Gestures",
            "Listening & Observation Skills",
            "Fun Speaking Games",
            "Storytelling Techniques"
          ]
        }
      ]
  }
  },
  {
    "id": "Scratch Coding",
    "name": "Coding",
    "title": "Scratch Coding",
    "image": "/assets/images/scratchCoding_image.png",
    "description": "Scratch coding introduces kids to programming in a fun, visual way. It develops problem-solving, logical thinking, creativity, and computational skills, helping them understand technology, build interactive projects, and gain confidence in coding and critical thinking from an early age.",
    duration: "10 Topics",
    badge: "Beginner",
    courseData :{
      // title: "Complete JavaScript Programming for Kids",
      // subtitle: "Learn JavaScript from scratch with fun projects and interactive exercises",
      // description: "Master the fundamentals of JavaScript programming through engaging projects designed specifically for young learners. This comprehensive course covers everything from basic syntax to advanced concepts, ensuring your child builds a strong foundation in programming that will serve them well in our increasingly digital world.",
      // image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8 weeks",
      level: "Beginner",
      price: "$***",
      originalPrice: "$149",
      rating: 4.8,
      students: 1250,
      instructor: "Sarah Johnson",
      instructorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      whatIncluded: [
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
          title: "Getting Started with Scratch",
          // duration: "1 week",
          description: "Get started with the basics of programming and set up your coding environment.",
          lessons: [
            "Interface tour",
            "Moving sprite, backgrounds, costumes", 
            "Starter Project – “Name Animator“"
          ]
        },
        {
          id: "2", 
          title: "Events & Sequencing",
          // duration: "1 week",
          description: "Learn about different types of data and how to store information in variables.",
          lessons: [
            "Event blocks",
            "Simple sequences & timing",
            "Projects: Click the Cat, Greeting Card"
          ]
        },
        {
          id: "3",
          title: "Loops & Conditions", 
          // duration: "1.5 weeks",
          description: "Master functions and conditional statements to make your programs interactive.",
          lessons: [
            "Forever/repeat loops",
            "If/else conditions",
            "Projects: Chasing Mouse, Magic Hat Quiz"
          ]
        },
        {
          id: "4",
          title: "Variables & Operators",
          // duration: "1 week", 
          description: "Learn how to repeat actions efficiently using loops.",
          lessons: [
            "Variables for score/lives/timers",
            "Operators (random, calculations)",
            "Projects: Apple Catcher, Lucky Dice Roller"
          ]
        },
        {
          id: "5",
          title: "Broadcasting & Multiple Sprites",
          // duration: "1.5 weeks",
          description: "Connect your JavaScript knowledge to web pages and user interactions.", 
          lessons: [
            "Messages between sprites",
            "Cloning",
            "Projects: Haunted Maze, Dance Party"
          ]
        },
        {
          id: "6",
          title: "Animation & Sound Effects",
          // duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Costume changes",
            "Sound editing & syncing", 
            "Projects: DJ Scratch Mix, Flying Bird"
          ]
        },
        {
          id: "7",
          title: "Advanced Game Development",
          // duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Gravity, scoring, lives",
            "Levels with backdrops", 
            "Projects: Space Shooter, Jungle Runner, Pong Remix"
          ]
        },
        {
          id: "8",
          title: "Storytelling & Interactive Art",
          // duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Storyline & dialogues",
            "Projects: Adventure Story, Comic Strip"
          ]
        },
        {
          id: "9",
          title: "Real-World Simulations & STEM Links",
          // duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Interactive models",
            "Projects: Traffic Light, Solar System, Math Quiz"
          ]
        },
        {
          id: "10",
          title: "Final Showcase",
          // duration: "2 weeks",
          description: "Apply everything you've learned by building exciting projects.",
          lessons: [
            "Capstone game/animation"
          ]
        }
      ]
  }
  }
]

//this is related to box color in category
export let color = ["170, 75%, 41%", "351, 83%, 61%", "229, 75%, 58%", "42, 94%, 55%"]