const employees = [
    {
      "id": 1,
      "firstName": "Amit Sharma",
      "email": "me@me.com",
      "password": "123",
      "taskCounts": {
        "newtask": 1,
        "failed": 0,
        "active": 2,
        "completed": 1
      },
      "tasks": [
        {
          "task_title": "Prepare Sales Report",
          "task_description": "Compile and summarize the quarterly sales data.",
          "date": "2025-05-20",
          "category": "Reports",
          "newtask": true,
          "failed": false,
          "active": true,
          "completed": false
        },
        {
          "task_title": "Client Call Scheduling",
          "task_description": "Schedule meetings with top 10 clients.",
          "date": "2025-05-21",
          "category": "Communication",
          "newtask": false,
          "failed": false,
          "active": true,
          "completed": false
        },
        {
          "task_title": "Market Research Summary",
          "task_description": "Analyze competitor strategies.",
          "date": "2025-05-22",
          "category": "Research",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": true
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Priya Verma",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
        "newtask": 1,
        "failed": 1,
        "active": 1,
        "completed": 1
      },
      "tasks": [
        {
          "task_title": "Update Website Content",
          "task_description": "Refresh product descriptions and add blog post.",
          "date": "2025-05-22",
          "category": "Web Development",
          "newtask": false,
          "failed": false,
          "active": true,
          "completed": false
        },
        {
          "task_title": "SEO Audit",
          "task_description": "Perform a full SEO analysis for the homepage.",
          "date": "2025-05-23",
          "category": "Marketing",
          "newtask": true,
          "failed": false,
          "active": false,
          "completed": false
        },
        {
          "task_title": "UX Testing",
          "task_description": "Run tests with 5 new users.",
          "date": "2025-05-24",
          "category": "Design",
          "newtask": false,
          "failed": true,
          "active": false,
          "completed": false
        },
        {
          "task_title": "Content Calendar",
          "task_description": "Draft blog and social media schedule.",
          "date": "2025-05-25",
          "category": "Marketing",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": true
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Ravi Iyer",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
        "newtask": 1,
        "failed": 1,
        "active": 1,
        "completed": 0
      },
      "tasks": [
        {
          "task_title": "Customer Feedback Analysis",
          "task_description": "Review product launch feedback.",
          "date": "2025-05-21",
          "category": "Research",
          "newtask": true,
          "failed": false,
          "active": true,
          "completed": false
        },
        {
          "task_title": "Bug Report Review",
          "task_description": "Categorize and prioritize reported bugs.",
          "date": "2025-05-22",
          "category": "Support",
          "newtask": false,
          "failed": true,
          "active": false,
          "completed": false
        },
        {
          "task_title": "Internal Survey Report",
          "task_description": "Summarize HR survey responses.",
          "date": "2025-05-23",
          "category": "HR",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": false
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Sneha Reddy",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
        "newtask": 1,
        "failed": 0,
        "active": 0,
        "completed": 0
      },
      "tasks": [
        {
          "task_title": "Team Meeting Prep",
          "task_description": "Prepare slides and agenda.",
          "date": "2025-05-23",
          "category": "Management",
          "newtask": true,
          "failed": false,
          "active": false,
          "completed": false
        },
        {
          "task_title": "Budget Review",
          "task_description": "Analyze this quarter’s spending.",
          "date": "2025-05-24",
          "category": "Finance",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": false
        },
        {
          "task_title": "Team Evaluation",
          "task_description": "Prepare review documents.",
          "date": "2025-05-25",
          "category": "HR",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": false
        },
        {
          "task_title": "OKR Planning",
          "task_description": "Set objectives for next quarter.",
          "date": "2025-05-26",
          "category": "Strategy",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": false
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Karan Mehta",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
        "newtask": 0,
        "failed": 0,
        "active": 0,
        "completed": 5
      },
      "tasks": [
        {
          "task_title": "Inventory Check",
          "task_description": "Audit stock levels.",
          "date": "2025-05-19",
          "category": "Logistics",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": true
        },
        {
          "task_title": "Supply Order",
          "task_description": "Reorder low stock items.",
          "date": "2025-05-20",
          "category": "Procurement",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": true
        },
        {
          "task_title": "Warehouse Inspection",
          "task_description": "Ensure safety compliance.",
          "date": "2025-05-21",
          "category": "Operations",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": true
        },
        {
          "task_title": "Delivery Coordination",
          "task_description": "Schedule outgoing shipments.",
          "date": "2025-05-22",
          "category": "Logistics",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": true
        },
        {
          "task_title": "Asset Management",
          "task_description": "Check status of company assets.",
          "date": "2025-05-23",
          "category": "Admin",
          "newtask": false,
          "failed": false,
          "active": false,
          "completed": true
        }
      ]
    }
  ]
const admin = [ {
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage=()=>{
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return {employees,admin};

}