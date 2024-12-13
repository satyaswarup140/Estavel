# Stonepedia Homepage

Stonepedia Homepage is a React-based responsive and visually appealing website that showcases premium stones, their categories, applications, and customer testimonials. It is designed to provide a seamless browsing experience with user-friendly navigation and an aesthetically pleasing design.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Demo
Check out the live demo of the project:
[Stonepedia Homepage](https://github.com/satyaswarup140/-Stonepedia.git)

---

## Features
- **Home Section**: A welcoming banner with a search bar and navigation links.
- **About Section**: Brief information about the company and its vision.
- **Products Section**: Highlights premium stones, categorized for easy browsing.
- **Testimonials Section**: Displays customer reviews with images.
- **Footer**: Contains quick links, company details, and social media icons.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.

---

## Technologies Used

### Frontend:
- React
- HTML5
- CSS3

### Icons and Fonts:
- Font Awesome
- Google Fonts

### Development Tools:
- Node.js
- Webpack
- Babel

---

## Installation
To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/satyaswarup140/-Stonepedia.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Stonepedia
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

---

## Project Structure
```
Stonepedia/
├── public/
│   ├── images/          # Static images like hero-bg, testimonials
│   └── index.html       # Main HTML file
├── src/
│   ├── components/      # React components (Navbar, Footer, etc.)
│   ├── styles/          # CSS files
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies and scripts
├── README.md            # Documentation
└── ...
```

---

## Usage

### Adding Content:
1. **Testimonials**: Add more testimonials in the `Testimonials.jsx` component by updating the array of testimonial objects.
2. **Images**: Place new images in the `public/images/` folder and use the correct paths in the JSX components.

### Modifying Styles:
- Update the respective CSS files in the `src/styles/` folder for customizing the layout and design.

---

## Screenshots

**Homepage Banner:**
![Hero Section](https://via.placeholder.com/800x400)

**Products Section:**
![Products](https://via.placeholder.com/800x400)

**Footer:**
![Footer](https://via.placeholder.com/800x400)

---

## Contributing
We welcome contributions! If you'd like to enhance the project:

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add YourFeature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/YourFeature
    ```
5. Open a Pull Request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

