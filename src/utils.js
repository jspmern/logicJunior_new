 // this is for the getting experience year
 export const getExperienceHandler=(year)=>{
    return new Date().getFullYear()-year
 }

 //courese-details included Content
   export let courseDetails= [
          {
            "id": "NVR",
            "name": "11 Plus",
            "title": "NVR",
            "image": "https://campus.w3schools.com/cdn/shop/files/react_930c122c-8d12-4a0a-85ef-67ca7e78bccf_1200x1200.png?v=1734688338",
            "description": "Learn the fundamentals of web development using HTML and CSS.",
            "content": [
                {"id": "Module - 01: Shapes",
                 "description": "Shows the shape"
                },
                {"id": "Module - 02: Counting",
                 "description": "Shows the shape"
                },
                {"id": "Module - 01: Pointing",
                 "description": "Shows the shape"
                },
                {"id": "Module - 01: Shading and Line Types",
                 "description": "Shows the shape"
                },
                {"id": "Module - 01: Order and Position",
                 "description": "Shows the shape"
                }
            ],
              isTopCourse:true,
              thumbnail:"/assets/images/category-1.svg",
              duration:"8 Hours",
              badge:"Beginner"
          },
          {
            "id": "VR",
            "name": "11 Plus",
            "title": "VR",
            "image": "https://campus.w3schools.com/cdn/shop/files/react_930c122c-8d12-4a0a-85ef-67ca7e78bccf_1200x1200.png?v=1734688338",
            "description": "A deep dive into JavaScript basics and DOM manipulation.",
            "content": [
                {"id": "Module - 01: Shapes",
                 "description": "Shows the shape"
                },
                {"id": "Module - 02: Counting",
                 "description": "Shows the shape"
                },
                {"id": "Module - 03: Pointing",
                 "description": "Shows the shape"
                },
                {"id": "Module - 04: Shading and Line Types",
                 "description": "Shows the shape"
                }
            ],
            isTopCourse:true,
           thumbnail:"/assets/images/category-2.svg",
              duration:"8 Hours",
              badge:"Beginner"
          },
          {
            "id": "Math",
            "name": "11 Plus",
            "title": "Maths",
            "image": "path_to_image_1.jpg",
            "description": "Learn the fundamentals of web development using HTML and CSS.",
            "content": [
                {"id": "Module - 01: Shapes",
                 "description": "Shows the shape"
                },
                {"id": "Module - 02: Counting",
                 "description": "Shows the shape"
                }
            ]
          },
          {
            "id": "English",
            "name": "11 Plus",
            "title": "English",
            "image": "path_to_image_1.jpg",
            "description": "Learn the fundamentals of web development using HTML and CSS.",
            "content": [
                {"id": "Module - 01: Shapes",
                 "description": "Shows the shape"
                },
                {"id": "Module - 02: Counting",
                 "description": "Shows the shape"
                },
                {"id": "Module - 03: Pointing",
                 "description": "Shows the shape"
                },
                {"id": "Module - 04: Shading and Line Types",
                 "description": "Shows the shape"
                },
                {"id": "Module - 05: Order and Position",
                 "description": "Shows the shape"
                },
                {"id": "Module - 06: Order and Position",
                 "description": "Shows the shape"
                }
            ],
              isTopCourse:true,
              thumbnail:"/assets/images/category-3.svg",
              duration:"11 Hours",
              badge:"Intermediate"
          },  
          {
            "id": "ds101",
            "name": "IQ and Critical Thinking",
            "title": "Introduction to Python",
            "image": "path_to_image_3.jpg",
            "description": "Start your Python journey with this beginner-friendly course.",
              duration:"8 Hours",
              badge:"Beginner"
          },
          {
            "id": "ds102",
            "name": "IQ and Critical Thinking",
            "title": "Machine Learning Basics",
            "image": "path_to_image_4.jpg",
            "description": "Learn the fundamentals of machine learning algorithms.",
              isTopCourse:true,
              thumbnail:"/assets/images/category-4.svg",
              duration:"10 Hours",
              badge:"Advanced"
          }
        ]

//this is related to box color in category
  export let color=["170, 75%, 41%","351, 83%, 61%","229, 75%, 58%","42, 94%, 55%"]