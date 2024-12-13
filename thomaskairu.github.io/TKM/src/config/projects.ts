import { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    title: "Mpesa-Daraja-API",
    description: "A comprehensive implementation of Safaricom's M-Pesa Daraja API, providing seamless mobile payment integration for businesses in Kenya.",
    technologies: ["PHP", "Laravel", "API Integration", "Payment Gateway"],
    features: [
      "STK Push Integration",
      "C2B Payment Handling",
      "B2C Payment Processing",
      "Transaction Status Checking",
      "Secure API Authentication"
    ],
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800",
    sourceCode: "https://github.com/ThomasKairu/Mpesa-Daraja-API",
    delay: 0.2
  },
  {
    title: "school-management-system",
    description: "A robust school management system built with Laravel, featuring comprehensive academic and administrative tools.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    features: [
      "Student Information Management",
      "Course & Class Scheduling",
      "Attendance Tracking",
      "Grade Management",
      "Financial Records"
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    sourceCode: "https://github.com/ThomasKairu/school-management-system",
    delay: 0.3
  },
  {
    title: "PHP-CRUD",
    description: "A clean and efficient CRUD application demonstrating best practices in PHP development and database operations.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "Create, Read, Update, Delete Operations",
      "Form Validation",
      "Database Integration",
      "Clean Code Architecture",
      "Security Best Practices"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    sourceCode: "https://github.com/ThomasKairu/PHP-CRUD",
    delay: 0.4
  }
];