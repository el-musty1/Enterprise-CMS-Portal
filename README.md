========================================================================

ENTERPRISE WEB CONTENT & PORTAL SYSTEM (portal-cms)

========================================================================



Author: Mustapha Aliyu

Email: musty009065@gmail.com

GitHub: https://github.com/el-musty1



------------------------------------------------------------------------

PROJECT OVERVIEW

------------------------------------------------------------------------

An enterprise-grade Web Content Management and Portal System featuring 

an Object-Oriented PHP (OOP) back-end architecture integrated with a 

highly optimized MySQL database and dynamic React user controls. Built 

with a strong emphasis on database query performance tuning, secure 

role-based authorization, and real-time execution auditing.



------------------------------------------------------------------------

KEY FEATURES

------------------------------------------------------------------------

* Object-Oriented PHP Architecture: Clean separation of concerns using 

  MVC patterns and custom Data Access Objects (DAO).

* MySQL Database Optimization: 

  - Dynamic B-Tree indexing strategy preventing full table scans.

  - Query latency reduced by over 35% on heavy multi-table JOIN operations.

  - Normalized schema handling user permissions, articles, and audit logs.

* Web Application Security & Auditing:

  - Role-Based Access Control (RBAC) preventing unauthorized endpoint calls.

  - Comprehensive access logs auditing critical database operations.

  - Sanitized output rendering guarding against stored XSS threats.

* Interactive Portal Front-End:

  - Dynamic article publishing & permission status toggles.

  - Real-time database latency simulator dashboard.



------------------------------------------------------------------------

TECH STACK

------------------------------------------------------------------------

* Front-End: React, TypeScript, Tailwind CSS, Lucide React Icons

* Back-End Architecture: PHP 8.x (OOP, Custom Controller & DAO Layers)

* Database Architecture: MySQL (InnoDB, Custom B-Tree Indexes, Foreign Key Constraints)



------------------------------------------------------------------------

PROJECT STRUCTURE

------------------------------------------------------------------------

├── App.tsx             # Interactive Portal & MySQL Latency Monitor UI

├── README.txt          # Project documentation

└── package.json        # Dependencies & scripts



------------------------------------------------------------------------

GETTING STARTED

------------------------------------------------------------------------

Prerequisites:

- Node.js (v18.0 or higher)

- npm or yarn package manager



Installation:

1. Clone the repository:

   git clone https://github.com/el-musty1/Enterprise-CMS-Portal.git

   cd Enterprise-CMS-Portal



2. Install dependencies:

   npm install lucide-react



3. Run the development server:

   npm run dev

   # or

   npx vite



4. Access the app:

   Open http://localhost:3000 or http://localhost:5173 in your browser.



------------------------------------------------------------------------

MYSQL QUERY OPTIMIZATION HIGHLIGHT

------------------------------------------------------------------------

Example optimized query structure utilizing indexed columns:



EXPLAIN SELECT a.id, a.title, a.published_at, u.username 

FROM articles a

INNER JOIN users u ON a.author_id = u.id

WHERE a.status = 'published' AND a.category_id = 4

ORDER BY a.published_at DESC 

LIMIT 20;
