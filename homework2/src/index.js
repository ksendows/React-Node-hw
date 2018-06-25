import { normalize, schema } from 'normalizr';

const instructorSchema = new schema.Entity('instructors');
const courseSchema = new schema.Entity('courses', {
    instructors: [instructorSchema]
});
const userSchema = new schema.Entity('users', {
    courses: [courseSchema]
});

const data = [{
    "id": "student-1", 
    "name": "Mango", 
    "courses": [{ 
        "id": "course-1", 
        "name": "Blockchain", 
        "instructors": [{ 
            "id": "instructor-1", 
            "name": "Jack" }, { "id": 
            "instructor-2", "name": "Ming" 
            }] 
        },
        {
        "id": "course-2",
        "name": "AI",
        "instructors": [{ 
            "id": "instructor-2", 
            "name": "Ming" }, 
            { 
            "id": "instructor-3", 
            "name": "Pam" }]
        }
    ]
}, 
{ 
    "id": "student-2", 
    "name": "Poly", 
    "courses": [{ 
        "id": "course-2",
        "name": "AI", 
        "instructors": [{ 
            "id": "instructor-2", 
            "name": "Ming"},
            { 
            "id": "instructor-3",
             "name": "Pam" }
        ] 
    }, 
    { 
        "id": "course-3",
        "name": "Machine Learning", 
        "instructors": [{ 
            "id": "instructor-1", 
            "name": "Jack" },
            { 
            "id": "instructor-4", 
            "name": "David" }
        ]
    }]
}, 
{ 
    "id": "student-3", 
    "name": "Ajax", 
    "courses": [{ 
        "id": "course-1", 
        "name": "Blockchain", 
        "instructors": [{ 
            "id": "instructor-1", 
            "name": "Jack" },
            { 
                "id": "instructor-2", 
                "name": "Ming" }
            ] },
    { 
        "id": "course-3", 
        "name": "Machine Learning", 
        "instructors": 
            [{ 
                "id": "instructor-1",
                "name": "Jack" }, 
            {   
                "id": "instructor-4", 
                "name": "David" }
        ]
 }] 
}];

console.log("Data before normalize");
console.log(data);

const normalizedData = normalize(data, [userSchema]);

console.log("Data after normalize");
console.log(normalizedData);