# Random Joke Generator

This is a simple and responsive React application that fetches and displays random jokes from the JokeAPI. It's designed to provide a seamless user experience across various devices, from mobile phones to large desktop screens, with dynamic content sizing.

---

## Features

* **Random Joke Generation:** Fetches a new, random joke with each click.
* **Responsive Design:** Adapts its layout and text size for optimal viewing on mobile, tablet, and desktop devices.
* **Dynamic Height Adjustment:** The joke display area automatically adjusts its height based on the length of the joke, ensuring no content is cut off and maintaining a clean layout.
* **Loading State:** Provides clear "Loading..." feedback while fetching jokes.
* **Error Handling:** Gracefully handles API errors or network issues, displaying informative messages to the user.
* **Clean UI:** A simple, intuitive user interface focused on readability.

---

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development and responsive design.
* **[JokeAPI](https://v2.jokeapi.dev/):** The external API used to fetch jokes.

---

## How to Run Locally

Follow these steps to get a local copy of the project up and running:

1.  **Clone the repository:**
    ```bash
    https://github.com/ShoreNexx/random-joke.git
    cd random-joke
    ```


2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

    The application will open in your default browser at `http://localhost:5173`.

---

## Usage

Simply open the application in your browser. A random joke will appear automatically. Click the **"Next Joke"** button to fetch another one!

---

## Contributing

Feel free to fork this repository, open issues, or submit pull requests if you have any suggestions or improvements!
