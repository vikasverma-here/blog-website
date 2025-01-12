
import { trendingThisMonth } from "./dummydata.js";
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navList = document.querySelector('nav ul');


hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('show');
});

console.log(trendingThisMonth)

const trendingDataContainer = document.getElementById('trendingData');

// Function to render the blog cards
function renderBlogs(blogs) {
  blogs.forEach((blog) => {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');
    blogCard.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}">
      <div class="blog-content">
        <h3>${blog.title}</h3>
        <p>${blog.description}</p>
        <div class="tags">Tags: ${blog.tags.join(", ")}</div>
        <div class="author-date">
          <span>${blog.author}</span>
          <span>${blog.date}</span>
        </div>
        <a href="https://medium.com/" >Read more</a>
      </div>
    `;
    trendingDataContainer.appendChild(blogCard);
  });
}

// Call the function to display the blogs
renderBlogs(trendingThisMonth);