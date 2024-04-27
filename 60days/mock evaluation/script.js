// script.js
const productListing = document.getElementById('productListing');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const sortOptions = document.getElementById('sortOptions');

// Fetch products from FakeStoreAPI
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        // Populate product listing
        displayProducts(data);

        // Populate category filter dropdown
        populateCategories(data);
    });

// Function to display products
function displayProducts(products) {
    // Clear previous products
    productListing.innerHTML = '';

    // Loop through products and create product items
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        `;
        productListing.appendChild(productItem);
    });
}

// Function to populate category filter dropdown
function populateCategories(products) {
    const categories = [...new Set(products.map(product => product.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Event listeners for category filter, search input, and sort options
categoryFilter.addEventListener('change', filterByCategory);
searchInput.addEventListener('input', searchProducts);
sortOptions.addEventListener('change', sortProducts);

// Implement filtering by category
function filterByCategory() {
    const selectedCategory = categoryFilter.value;
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const filteredProducts = selectedCategory ?
                data.filter(product => product.category === selectedCategory) :
                data;
            displayProducts(filteredProducts);
        });
}

// Implement search functionality
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const matchingProducts = data.filter(product =>
                product.title.toLowerCase().includes(searchTerm)
            );
            displayProducts(matchingProducts);
        });
}

// Implement sorting by price
function sortProducts() {
    const sortOrder = sortOptions.value;
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const sortedProducts = [...data].sort((a, b) => {
                return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
            });
            displayProducts(sortedProducts);
        });
}
