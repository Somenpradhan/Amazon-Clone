document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const productBoxes = document.querySelectorAll('.product-box');
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;


    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        productBoxes.forEach(box => {
            const title = box.querySelector('.product-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });


    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartCountElement.textContent = cartCount;
            alert('Item added to cart!');
        });
    });
});
