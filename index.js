const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 8000;

const generateBaseUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try{ 
        const response = await request(`${generateBaseUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response));
    } catch (error) {
        console.log(error);
    }
});

app.get('/products/:productId', async (req, res) => {
    const {productId} = req.params;
    const { api_key } = req.query;

    try{ 
        const response = await request(`${generateBaseUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`);
        res.json(JSON.parse(response));
    } catch (error) {
        console.log(error);
    }
});

app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try{ 
        const response = await request(`${generateBaseUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);
        res.json(JSON.parse(response));
    } catch (error) {
        console.log(error);
    }
});

app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    const { api_key } = req.query;

    try{ 
        const response = await request(`${generateBaseUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
        res.json(JSON.parse(response));
    } catch (error) {
        console.log(error);
    }
});

app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    const { api_key } = req.query;

    try{ 
        const response = await request(`${generateBaseUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        res.json(JSON.parse(response));
    } catch (error) {
        console.log(error);
    }
});