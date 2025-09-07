
const employees = [
    {
        "Id": 1,
        "email": "em1@gmail.com",
        "password": "123",
        "firstName": "Aarav",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Project Report",
                "taskDescription": "Compile data and create a comprehensive report.",
                "taskDate": "2025-01-06",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Discuss the project timeline with the team.",
                "taskDate": "2025-01-04",
                "category": "Meeting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix Login Bug",
                "taskDescription": "Resolve the issue causing login failures.",
                "taskDate": "2025-01-03",
                "category": "Development"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "Id": 2,
        "email": "em2@gmail.com",
        "password": "123",
        "firstName": "Vihaan",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Create UI Design",
                "taskDescription": "Design a user interface for the dashboard.",
                "taskDate": "2025-01-06",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Database Backup",
                "taskDescription": "Backup the database for safety.",
                "taskDate": "2025-01-05",
                "category": "Database"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "Id": 3,
        "email": "em3@gmail.com",
        "password": "123",
        "firstName": "Anaya",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Conduct Code Review",
                "taskDescription": "Review the latest code changes for quality.",
                "taskDate": "2025-01-06",
                "category": "Code Review"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create slides for the client meeting.",
                "taskDate": "2025-01-05",
                "category": "Presentation"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "Id": 4,
        "email": "em4@gmail.com",
        "password": "123",
        "firstName": "Kavya",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy Update",
                "taskDescription": "Deploy the latest software update to the server.",
                "taskDate": "2025-01-04",
                "category": "Deployment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Unit Tests",
                "taskDescription": "Write unit tests for the new module.",
                "taskDate": "2025-01-06",
                "category": "Testing"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "Id": 5,
        "email": "em5@gmail.com",
        "password": "123",
        "firstName": "Ishaan",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Analyze Metrics",
                "taskDescription": "Analyze performance metrics for insights.",
                "taskDate": "2025-01-06",
                "category": "Analytics"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Training",
                "taskDescription": "Conduct training on the new system.",
                "taskDate": "2025-01-04",
                "category": "Training"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

  
const admin = [
    {
      "Id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
]

export const setLocalStorage=()=>{
    localStorage.setItem("employees", JSON.stringify(employees)); 
    localStorage.setItem("admin", JSON.stringify(admin)); 
}

export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}
}
  