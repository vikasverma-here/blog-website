document.addEventListener("DOMContentLoaded", () => {
    const url = "https://newsapi.org/v2/everything?q=modi&sortBy=popularity&apiKey=018087701f8f4d1da5ec6258f13c9b0c";
    const root = document.querySelector(".root");
    const searchForm = document.getElementById("searchForm");
    const inputField = document.getElementById("input");

    const fetchArticles = async (query) => {
        const searchUrl = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=018087701f8f4d1da5ec6258f13c9b0c`;

        try {
            const data = await fetch(searchUrl);
            const response = await data.json();
            const news = response.articles;

            root.innerHTML = "";

            news.map((item) => {
                const articleDiv = document.createElement("div");
                articleDiv.classList.add("article");

                articleDiv.innerHTML = `
                    <img src="${item.urlToImage || 'https://via.placeholder.com/800x400?text=No+Image+Available'}" alt="${item.title || 'No Title'}" class="article-image" />
                    <h2>${item.title || "No Title Available"}</h2>
                    <p>${item.description || "No Description Available"}</p>
                    <p><strong>Author:</strong> ${item.author || "Unknown"}</p>
                    <p><strong>Published At:</strong> ${new Date(item.publishedAt).toLocaleString()}</p>
                    <a href="${item.url}" target="_blank">Read More</a>
                    <hr />
                `;

                root.appendChild(articleDiv);
            });
        } catch (error) {
            console.error("Error fetching the news:", error);
            root.innerHTML = `<p>Failed to load news. Please try again later.</p>`;
        }
    };

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const searchQuery = inputField.value.trim();

        if (searchQuery) {
            fetchArticles(searchQuery);
        } else {
            alert("Please enter a search term.");
        }
    });
});
