# 🌍 Currency Converter (AWS Capstone Project)

A lightweight, containerized currency converter web application that fetches live exchange rates using an external API and is deployed on **AWS ECS (Fargate)** with backend integration via **API Gateway + Lambda** and monitoring using **CloudWatch**.

## 🚀 Features

- Fetches real-time exchange rates using `fetch()`
- Converts any amount between two currencies
- Handles invalid input gracefully with error messages
- Uses async/await for clean asynchronous code
- Displays results dynamically in the web page

## 📂 Project Structure
currency-converter/
│── index.html     # Main HTML file (form & result display)
│── script.js      # JavaScript logic for fetching & converting
│── style.css      # Optional styling (if added)
│── README.md      # Project documentation


## ⚙️ How It Works
- User enters an amount and selects From Currency and To Currency in the form.
- The app makes a request to FreeCurrencyAPI to fetch the latest rates.
- The conversion is calculated and displayed inside the page.
- If the API call fails, an error message is shown.

## 📦 AWS Deployment Architecture

- **Frontend:** Nginx container running on AWS ECS (Fargate)
- **Backend:** AWS API Gateway + AWS Lambda
- **Monitoring:** AWS CloudWatch Dashboard
- **Container Registry:** Amazon ECR


## 📖 Usage

- Clone the repo or copy the files.
- Get a free API key from FreeCurrencyAPI
- Replace YOUR_API_KEY in script.js with your actual key:


---

## Live ECS Application

![ECS App](./images/Live%20ECS%20Web%20App.png)

---

## 🔌 API Gateway Test (Successful Response)

![API Test](./images/API%20Gateway%20test.png)
![API Test](./images/API%20Gateway%20Test%20Screenshot.png)

---

## 📊 CloudWatch Dashboard (Lambda Monitoring)
Displays Lambda Invocations and Errors metrics.

![CloudWatch](./images/Capstone-Dashboard.png)