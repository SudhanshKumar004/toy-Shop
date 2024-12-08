// Example toy products in JSON format with categories
let productsData = [
    {
        "id": 1,
        "name": "Doll",
        "price": 19.99,
        "image": "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/490803854/665/490803854-1.webp",
        "category": "dolls"
    },
    {
        "id": 2,
        "name": "Toy Truck",
        "price": 22.50,
        "image": "https://m.media-amazon.com/images/I/71LLsCJLuML.jpg",
        "category": "cars"
    },
    {
        "id": 3,
        "name": "Princess Doll",
        "price": 21.99,
        "image": "https://shop.mattel.com.au/cdn/shop/files/HLW08_MAX_Assets_Bucket_-_Basic_Product_Image_2.jpg?v=1704689558&width=1100",
        "category": "dolls"
    },
    {
        "id": 4,
        "name": "Spider Man Figure",
        "price": 28.00,
        "image": "https://www.funcorp.in/cdn/shop/files/51Vcf0IXjYL._SL1000.jpg?v=1715952227",
        "category": "actionFigures"
    },
    {
        "id": 5,
        "name": "Cute Panda Bear",
        "price": 19.75,
        "image": "https://m.media-amazon.com/images/I/510y3YBXpdL._AC_UF1000,1000_QL80_.jpg",
        "category": "stuffedAnimals"
    },
    {
        "id": 6,
        "name": "Rolls Royce Car",
        "price": 22.99,
        "image": "https://samstoy.in/cdn/shop/files/Sams-Toy-Rolls-Royce-Kids-Car-Battery-Operated-Toy-Car-Ride-on-Car-samstoy-in-4427.jpg?v=1724874538",
        "category": "cars"
    },
    {
        "id": 7,
        "name": "Small Doll",
        "price": 19.99,
        "image": "https://5.imimg.com/data5/SELLER/Default/2021/7/OW/BC/JO/111360885/new-product.jpeg",
        "category": "dolls"
    },
    {
        "id": 8,
        "name": "Big Doll",
        "price": 21.99,
        "image": "https://i.guim.co.uk/img/media/f1a41d0a93ffc8d6802cec61ab913b34574c52ac/901_0_4131_2480/master/4131.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=104090b727e95177091994aeccc95aef",
        "category": "dolls"
    },
    {
        "id": 9,
        "name": "Talking Doll",
        "price": 24.99,
        "image": "https://images-cdn.ubuy.co.in/653502d5ff63d1246b52818d-playkidiz-talking-baby-doll-14-talking.jpg",
        "category": "dolls"
    },
    {
        "id": 10,
        "name": "Iron Man",
        "price": 25.00,
        "image": "https://rukminim2.flixcart.com/image/850/1000/k2m6ufk0/action-figure/z/e/5/40-off-avengers-endgame-iron-man-toy-action-figure-kidzholic-original-imafhxpqbtqjqxyw.jpeg?q=90&crop=false",
        "category": "actionFigures"
    },
    {
        "id": 11,
        "name": "Bat Man",
        "price": 29.99,
        "image": "https://images-cdn.ubuy.co.in/64e6c3f7ae0c047bce596027-batman-12-inch-rebirth-batman-action.jpg",
        "category": "actionFigures"
    },
    {
        "id": 12,
        "name": "Captain America",
        "price": 32.00,
        "image": "https://m.media-amazon.com/images/I/61NzfEAXOyL._AC_UF1000,1000_QL80_.jpg",
        "category": "actionFigures"
    },
    {
        "id": 13,
        "name": "Teddy Bear",
        "price": 20.50,
        "image": "https://m.media-amazon.com/images/I/617OBlRSVTL._AC_UF1000,1000_QL80_.jpg",
        "category": "stuffedAnimals"
    },
    {
        "id": 14,
        "name": "Fluffy Rabbit",
        "price": 17.99,
        "image": "https://m.media-amazon.com/images/I/61dbWXyJBYL._AC_UF1000,1000_QL80_.jpg",
        "category": "stuffedAnimals"
    },
    {
        "id": 15,
        "name": "Toy Train",
        "price": 30.00,
        "image": "https://baybee.co.in/cdn/shop/files/618zBvz1ctL._SL1500.jpg?v=1682579356",
        "category": "cars"
    },
    {
        "id": 16,
        "name": "Police Car",
        "price": 19.99,
        "image": "https://images-cdn.ubuy.co.in/6678ff422f394679ef57556f-car-toy-plastic-pursuit-rescue-vehicle.jpg",
        "category": "cars"
    },
    {
        "id": 17,
        "name": "Teddy Bear (Large)",
        "price": 39.99,
        "image": "https://www.ultrasofttoys.com/images/product_images/large/7019UST.jpg",
        "category": "stuffedAnimals"
    },
    {
        "id": 18,
        "name": "Giant Unicorn Plush",
        "price": 50.00,
        "image": "https://m.media-amazon.com/images/I/51C5TrSt-GL.jpg",
        "category": "stuffedAnimals"
    },
    {
        "id": 19,
        "name": "Wonder Woman",
        "price": 29.00,
        "image": "https://m.media-amazon.com/images/I/71erWt+7WiL.jpg",
        "category": "actionFigures"
    },
    {
        "id": 20,
        "name": "Porsche",
        "price": 2000,
        "image":"https://kyaratoys.com/cdn/shop/files/51YWssIGIAL.jpg?v=1720717537&width=800",
        "category": "cars"
    }
];


// For product load
function loadProducts(filteredCategory) {
    if (filteredCategory === undefined) {
        filteredCategory = 'all'; 
    }

    let pcontainer = document.querySelector('#products');
    pcontainer.innerHTML = ''; 

    let filterproduct;
    if (filteredCategory === 'all') {
        filterproduct = productsData;
    } else {
        filterproduct = productsData.filter(function(product) {
            return product.category === filteredCategory;
        });
    }

    let productshow = filterproduct.map(function(p) {
        return `
            <div class="product">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>$${p.price.toFixed(2)}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    }).join(''); 

    pcontainer.innerHTML = productshow;
}

loadProducts();

// array to store cart items;
    let cart = []; 


    // Function to add a product to the cart
    function addToCart(productId) {
    let product = productsData.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || []; //parse to convert data into obj
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}


    // Function to update the cart count
    function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = document.querySelector('#cart-count');
    cartCount.innerHTML = cart.length;
}

// Function to navigate to the cart page
function goToCartPage() {
    window.location.href = 'cart.html';
}

