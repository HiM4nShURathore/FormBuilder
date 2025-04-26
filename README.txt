# Collaborative To-Do Web App

This project is a collaborative to-do web application built using the **MERN** stack (MongoDB, Express, React, Node.js) with basic functionalities like form creation, task management, and board collaboration.

## Overview

The app allows users to:
- Create boards and tasks.
- Manage and assign tasks.
- Collaborate on boards with different roles.
- Use mobile OTP login (though this feature may need further refinement).
  
### **Time Constraints:**
Due to ongoing exams, time was limited, and as a result, not all functionalities are as polished as desired. However, the core functionalities are working, and there is a roadmap for further enhancements.

## Setup

### Backend Setup:
1. Navigate to the `backend/` folder.
2. Run `npm install` to install all dependencies.
3. Create a `.env` file and add your environment variables (e.g., MongoDB URI).
4. Start the server with `npm start` or `node server.js`.
5. Ensure the server is running on `http://localhost:5000`.

### Frontend Setup:
1. Navigate to the `frontend/` folder.
2. Run `npm install` to install all dependencies.
3. Run `npm run dev` to start the frontend development server.
4. Open the application in your browser at `http://localhost:3000`.

## Future Enhancements

### 1. **Mobile OTP Login:**
   - Currently, the mobile OTP login is a basic feature and can be extended for better security and scalability using services like Twilio or Firebase Authentication.
   - Adding OTP verification can be improved by handling edge cases and refining error messages.

### 2. **Form Builder Enhancements:**
   - The form builder allows users to create forms, but it currently lacks features such as **form validation** (e.g., required fields, length validation, etc.).
   - Implementing **field ordering** functionality for rearranging form fields dynamically will improve the builder.

### 3. **Form Submission Feedback:**
   - Currently, form submissions only show a basic alert. We can enhance this by adding **toast notifications** for success/failure responses.

### 4. **User Roles and Permissions:**
   - The current app supports basic CRUD operations, but **user roles (Admin, User, etc.)** can be expanded.
   - Implement user role validation to ensure that users can only perform allowed actions based on their role.

### 5. **Task Status Updates:**
   - Implement a **drag-and-drop interface** for updating task statuses (e.g., from "To Do" to "In Progress" to "Completed").
   - This can be added using libraries like `react-beautiful-dnd`.

### 6. **Database and Form Response Handling:**
   - Connect the forms to store responses in the database, allowing users to view their submissions.
   - This will involve creating models for form responses and a dedicated page to view responses.

### 7. **Styling Improvements:**
   - Currently, the app's styling is functional but could use improvements for a more modern look.
   - Consider adding CSS frameworks like **Bootstrap** or **Material UI** for a more polished UI.

### 8. **Search Functionality:**
   - Add a **search bar** to filter tasks and boards by keywords, making it easier to find specific items.

### 9. **Advanced Notifications:**
   - Implement a notification system that will alert users when a task has been assigned, updated, or completed.

### 10. **File Uploads:**
   - Allow users to upload files (e.g., images, PDFs) to tasks and forms.

## Known Issues

- **Exams**: Due to ongoing exams, time constraints limited the development process, resulting in some missing features or incomplete functionalities.
- **Form Options**: The form builder currently does not support multi-select for dropdown or checkbox fields.

## Contributions

Feel free to fork the repository and submit pull requests. All improvements and suggestions are welcome!

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please reach out to me at [Your Email].
