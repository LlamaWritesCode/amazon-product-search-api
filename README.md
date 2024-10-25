# 🚀 Amazon Product Search API 

A simple Node.js API to fetch Amazon product details, reviews, offers, and search results using the [ScraperAPI](https://www.scraperapi.com/). Built with Express.js.

## 📚 Table of Contents
- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [⚙️ Setup](#-setup)
- [🔐 Environment Variables](#-environment-variables)
- [📡 Endpoints](#-endpoints)
- [📈 Examples](#-examples)
- [📜 License](#-license)

## 🌟 Overview

This API allows you to access Amazon product details, reviews, offers, and search results by making requests to different endpoints. It uses ScraperAPI to handle the complexities of web scraping Amazon.

## ✨ Features

- 🔍 Get Amazon product details by product ID
- 📝 Fetch product reviews by product ID
- 💸 Retrieve offers for a specific product by product ID
- 🔎 Search for products on Amazon using a query string
- 🖥️ Built with **Express.js** for quick and easy server setup


## ⚙️ Setup

1. **Clone the repository**:
      ```bash
      git clone https://github.com/your-username/amazon-product-api-scraper.git
      cd amazon-product-api-scraper
  
2.  **Install dependencies:**
      ```bash
      npm install

3. **Set up your environment variables (see [🔐 Environment Variables](#-environment-variables)).**

4. **Start the server:**
      ```bash
      npm start
**The server will run on http://localhost:8000 by default.**

## 🔐 Environment Variables

   Create a `.env` file in the project root and add your ScraperAPI key:
   
         API_KEY=your_scraperapi_key
         PORT=8000
         
         
## 📡 Endpoints

### 🏠 Home
- **URL:** `/`
- **Method:** `GET`
- **Description:** Welcome message for the API.

---

### 📦 Get Product Details
- **URL:** `/products/:productId`
- **Method:** `GET`
- **Description:** Retrieve product details by product ID.
- **Example:** `/products/B08N5WRWNW?api_key=your_scraperapi_key`

---

### 📝 Get Product Reviews
- **URL:** `/products/:productId/reviews`
- **Method:** `GET`
- **Description:** Fetch product reviews by product ID.
- **Example:** `/products/B08N5WRWNW/reviews?api_key=your_scraperapi_key`

---

### 💸 Get Product Offers
- **URL:** `/products/:productId/offers`
- **Method:** `GET`
- **Description:** Retrieve offers for a specific product by product ID.
- **Example:** `/products/B08N5WRWNW/offers?api_key=your_scraperapi_key`

---

### 🔎 Search Products
- **URL:** `/search/:searchQuery`
- **Method:** `GET`
- **Description:** Search for products on Amazon using a query string.
- **Example:** `/search/laptop?api_key=your_scraperapi_key`

## 📈 Examples

You can use tools like **Postman** or your web browser to test the API endpoints. Simply replace the placeholders with actual values.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

