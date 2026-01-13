# Nebs IT Task – Notice Publisher System

## Overview

The **Notice Publisher System** is a web-based HR & Admin tool designed to create, publish, manage, and track employee notices.  
All UI and workflows are implemented according to the provided **Figma design**.

This system allows administrators to:
- Create notices
- Publish or unpublish them
- Save drafts
- View individual notices
- Manage notices from an admin panel

---

## Features

### 1. Notice Board
The **Notice Board** displays all notices in a table format.  
Each row contains:

- Title  
- Notice Type  
- Department / Individual  
- Publish Date  
- Status (Published / Unpublished)  
- Action buttons  

#### Action Buttons

| Icon | Action |
|------|--------|
| 👁 Eye | View full notice |
| ✏️ Edit | Edit notice |
| ⋮ Three Dot | Open status toggle menu |

---

### 2. Three-Dot Action Menu
Clicking the **three-dot (⋮)** button opens a small menu containing a **toggle switch**.

This switch allows:
- **Published → Unpublished**
- **Unpublished → Published**

The change is:
- Updated instantly in the UI
- Saved to the database using the Update API

---

### 3. View Single Notice
Clicking the **Eye** icon opens the **Single Notice Page**.

It displays:
- Notice title
- Status badge
- Employee information
- Department
- Notice type
- Publish date
- Notice body
- Attachments (if any)

This page is **mobile responsive and printable**.

---

### 4. Draft Notice Page
The **Draft Notice** page shows all notices saved as **Draft**.

Admins can:
- Review draft notices
- Edit them
- Publish later

---

### 5. Create Notice
The **Create Notice** page is built exactly according to the Figma design.

The form includes:
- Department  
- Notice title  
- Employee ID  
- Employee name  
- Position  
- Notice type (multi-select)  
- Publish date  
- Notice body  
- File upload  

All fields are validated using **React Hook Form**.

---

### 6. Publish Notice
When clicking the **Publish** button:
- The notice is saved to the database
- Status becomes **Published**
- A **Success Modal** appears

The modal includes:
- Success icon
- Confirmation message
- Buttons:
  - Close
  - View Notice
  - Create Another

---

### 7. Save as Draft
When clicking **Save as Draft**:
- The notice is saved
- Status becomes **Draft**
- The notice appears in the Draft Notice list

---

## Backend APIs

The backend is built using **Node.js, Express, and MongoDB** and supports full CRUD operations.

### API List

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/notices` | Get all notices |
| GET | `/notices?page=1&limit=10` | Pagination |
| GET | `/notices/:id` | Get single notice |
| GET | `/notices/drafts` | Get all draft notices |
| POST | `/notices` | Create new notice |
| PATCH | `/notices/:id` | Update notice (status, content, etc.) |
| DELETE | `/notices/:id` | Delete a notice |

---

## Status Management

Each notice can have one of the following statuses:
- **Published**
- **Unpublished**
- **Draft**

Status changes are managed using:
- Toggle switch in the Three-Dot Action Menu
- Update API to save changes in the database

---

## Technology Stack

### Frontend
- Next.js (App Router)
- Tailwind CSS
- React Hook Form
- Axios
- Lucide Icons

### Backend
- Node.js
- Express
- MongoDB

---

## 🚀 How to Run the Project

```bash
# Clone the repository
git clone https://github.com/khairul-islam-k/nebs-it-practice-task

# Install client dependencies
cd nebs-it-practice-task
npm install
npm run dev

# Install server dependencies
git clone https://github.com/khairul-islam-k/nebs-it-task-server
cd nebs-it-task-server
npm install
npm run start
```

## Conclusion

The **Nebs IT Notice Publisher System** is a complete admin panel that follows the provided Figma design.  
It enables administrators to create, publish, manage, and track employee notices efficiently with a modern interface and scalable backend.
