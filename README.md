# Weather App 🌤️

A simple and responsive **Weather Application** built using **HTML, CSS, and JavaScript**. This app fetches real-time weather data using the **OpenWeatherMap API** and displays current weather details for any searched city.

---

🌐 Live Preview
Check out the live version of the project here:

 https://muhammadmoiz-stack.github.io/Weather-App/
---

## 🚀 Features

* Search weather by city name
* Displays:

  * Current temperature (°C)
  * Weather condition
  * Humidity
  * Wind speed
* Dynamic weather icons based on conditions (Clear, Rain, Clouds, Snow, etc.)
* Error handling for invalid city names with a **404 error image**
* Fully **mobile responsive** design
* Clean and user-friendly UI

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (including responsive media queries)
* JavaScript (Fetch API, DOM manipulation)
* OpenWeatherMap API

---

## 📂 Project Structure

```
weather-app/
│── index.html
│── style.css
│── media.css
│── app.js
│── images/
│   └── (weather icons & 404 image)
│── README.md
```

---

## 🔑 API Setup

1. Create a free account on **OpenWeatherMap**
2. Get your API key
3. Replace the API key in `app.js`:

```js
const APIKey = "YOUR_API_KEY_HERE";
```

---

## 📱 Responsive Design

The app is optimized for mobile devices using a separate `media.css` file, ensuring a smooth experience on smaller screens.

---

## ❗ Error Handling

* If a user searches for an invalid city name:
  * An alert message is shown
  * Weather image changes to a 404 error image

---

## 📌 Future Improvements

* Search using Enter key
* Loading animation while fetching data
* Auto-detect user location
* 5-day weather forecast

---

## 👤 Author

**Muhammad Moiz**
Student | Web Development Learner

---

Feel free to fork, improve, or give feedback on this project!
