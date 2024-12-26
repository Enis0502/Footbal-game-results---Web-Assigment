document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");
    const API_KEY = "6af80fef2d8c4a408f67996b9bf9619b";
    const API_URL = `https://newsapi.org/v2/everything?q=Premier%20League&language=en&apiKey=${API_KEY}`;

    async function fetchNews() {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.articles.length === 0) {
                newsContainer.innerHTML = `<p>No news available at the moment.</p>`;
                return;
            }

            displayNews(data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
            newsContainer.innerHTML = `<p>Failed to fetch news. Please try again later.</p>`;
        }
    }

    function displayNews(articles) {
        const maxNewsCount = 10;
        const limitedArticles = articles.slice(0, maxNewsCount);
    
        newsContainer.innerHTML = "";
    
        const newsGrid = document.createElement("div");
        newsGrid.classList.add("news-grid");
    
        limitedArticles.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");
    
            newsItem.innerHTML = `
                <img src="${article.urlToImage || 'default-image.jpg'}" alt="${article.title}" class="news-image">
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
    
            newsGrid.appendChild(newsItem);
        });
    
        newsContainer.appendChild(newsGrid);
    }

    fetchNews();
});