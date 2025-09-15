This is a Nuxt 4 project that uses Tailwind CSS and TypeScript. The project is focused on generating QR codes with customizable options. The main features include:
- QR code generation with various customization options (size, color, error correction level, etc.)
- A user-friendly interface for inputting data and selecting options
- Responsive design for optimal viewing on different devices

## The structure of the project
- `components/`: Contains reusable Vue components such as `Navbar`, `QrCodeDisplay`, and `QrCodeForm`. 
- `pages/`: Contains the main pages of the application, including the index page.
- `public/`: Contains static assets like images and icons. 
- `store/`: Contains the states of single page of the entire application.
- `layouts/`: Contains the layouts of the entire application.

## Pattern
The project follows a component-based architecture, where each feature is encapsulated within its own component. This promotes reusability and maintainability of the code.
This is the simple structure of project:
- index.vue of the single page and within it there are specific components like Navbar, QrCodeForm and QrCodeDisplay.
- this page talks directly with specific store to manage the states of page.
- to communicate with each other, the two pages will use their respective stores.