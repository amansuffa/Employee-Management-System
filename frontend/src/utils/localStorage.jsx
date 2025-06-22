const employees = [
  {
    "firstName": "Ayesha",
    "email": "emp1@pk.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design landing page",
        "taskDescription": "Create mockups for the homepage",
        "taskDate": "2024-10-12",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team meeting",
        "taskDescription": "Discuss sprint goals and blockers",
        "taskDate": "2024-10-10",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix login bug",
        "taskDescription": "Resolve login issues on mobile",
        "taskDate": "2024-10-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare weekly report",
        "taskDescription": "Summarize weekly accomplishments",
        "taskDate": "2024-10-15",
        "category": "Reporting"
      }
    ]
  },
  {
    "firstName": "Usman",
    "email": "emp2@pk.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database tuning",
        "taskDescription": "Improve query performance in reports",
        "taskDate": "2024-10-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "UI feedback review",
        "taskDescription": "Go through feedback and suggest UI changes",
        "taskDate": "2024-10-09",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write migration plan",
        "taskDescription": "Prepare DB migration checklist",
        "taskDate": "2024-10-15",
        "category": "Database"
      }
    ]
  },
  {
    "firstName": "Fatima",
    "email": "emp3@pk.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client pitch prep",
        "taskDescription": "Design slides for new client proposal",
        "taskDate": "2024-10-13",
        "category": "Presentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Review PRs",
        "taskDescription": "Code review for pending pull requests",
        "taskDate": "2024-10-12",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug testing",
        "taskDescription": "Verify bug fixes in staging environment",
        "taskDate": "2024-10-08",
        "category": "QA"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Research competitors",
        "taskDescription": "Analyze features of competing products",
        "taskDate": "2024-10-15",
        "category": "Research"
      }
    ]
  },
  {
    "firstName": "Hamza",
    "email": "emp4@pk.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "API documentation",
        "taskDescription": "Write docs for internal APIs",
        "taskDate": "2024-10-13",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "CI/CD setup",
        "taskDescription": "Configure automated deployment pipeline",
        "taskDate": "2024-10-11",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Environment variable setup",
        "taskDescription": "Organize env files for staging and production",
        "taskDate": "2024-10-15",
        "category": "DevOps"
      }
    ]
  },
  {
    "firstName": "Zara",
    "email": "emp5@pk.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "UX redesign",
        "taskDescription": "Enhance mobile app navigation",
        "taskDate": "2024-10-14",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Production release",
        "taskDescription": "Deploy version 2.0 to production",
        "taskDate": "2024-10-09",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Collect client feedback",
        "taskDescription": "Gather feedback from new client onboarding",
        "taskDate": "2024-10-12",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Plan design sprint",
        "taskDescription": "Create outline for next design sprint",
        "taskDate": "2024-10-15",
        "category": "Design"
      }
    ]
  }
]
;


// const admin = [{
//     "id": 1,
//     "email": "admin@pk.com",
//     "password": "123"
// }];


// export const setLocalStorage = ()=>{
// localStorage.setItem('employees', JSON.stringify(employees));
// localStorage.setItem('admin', JSON.stringify(admin));

// }
// export const getLocalStorage = ()=>{
//    const employees = JSON.parse(localStorage.getItem('employees'))
//    const admin = JSON.parse(localStorage.getItem('admin'))
//    return { employees, admin }
// }