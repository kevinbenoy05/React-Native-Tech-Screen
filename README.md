# React Native Tech Screen - Task Manager App
This is a basic Task Manager application developed using React Native and Expo, done as part of the Chapter One Front-End Tech Screen. It is an app through which users can manage their list of tasks by creating new ones, completing them, and deleting them.
## Features
- Add a Task: Users can enter the description of a task into a text field and add it to a task list. The "Add Task" button is disabled if the field is empty to avoid adding blank tasks.
- Mark as Complete: Each task can be marked as complete. Completed tasks are highlighted visually with a strikethrough and status text color change.
- Delete a Task: Tasks can easily be deleted from the list with a delete button.
- Visual Feedback: The app gives immediate visual feedback to user actions. A transient notification message is displayed at the bottom of the screen to indicate that a task has been added, done, or removed.
- Clean UI: The interface is designed to be clean and intuitive, with a clear separation between task details, status, and actions.
## Using the Task Manager
### Prequisites
- Node.js and NPM installed on your machine
- Expo Go app on iOS/Android device, or an emulator set up on computer
### Installation
1. Clone the Repository: `git clone https://github.com/kevinbenoy05/React-Native-Tech-Screen`
2. Go to the project folder in bash terminal: `cd [Parent_Directory_Location]\React-Native-Tech-Screen`
3. Install all required dependencies: `npm install`
4. Run the application by using `npx expo start`. You can then scan the QR Code to load on iOS/Andriud or your emulary. 
## 3rd Party Sources
- Used Nativewind and Tailwind CSS to style React Native components
- Used `react-native-vector-icons` image library for the check and trash buttons - specifically the `Feather` script
- React Native Tutorial as this is my first time working with React Native: (JS Mastery)[https://www.youtube.com/watch?v=f8Z9JyB2EIE&t=8348s&pp=ygUVUmVhY3QgTmF0aXZlIFR1dG9yaWFs]
- Used AI tools to help generate and find styling classes in order to focus on core React logic

