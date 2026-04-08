document.addEventListener('DOMContentLoaded', () => {
    
    
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
    animatedElements.forEach(el => observer.observe(el));

    
    const collections = {
        women: [
            'https://i.pinimg.com/736x/c1/03/6a/c1036a1e0b043d3ef37bd39e0ec135c5.jpg', 
            'https://i.pinimg.com/1200x/6a/92/aa/6a92aa2a95d02a68a442012bf071bf18.jpg',
            'https://i.pinimg.com/736x/09/15/c9/0915c98b21d8cdbea79af0f37a587e41.jpg', 
            'https://i.pinimg.com/1200x/12/8e/0b/128e0bf58ab4e760065a31af31359a00.jpg', 
            'https://i.pinimg.com/736x/5c/76/5a/5c765afdea702772fa279bb2b2a033c3.jpg', 
            'https://i.pinimg.com/1200x/1c/b8/a5/1cb8a567e21d97f9e59ae780f392a565.jpg',
            'https://i.pinimg.com/1200x/05/0c/70/050c70f40e0710062a611aa5525a4a8a.jpg',
            'https://i.pinimg.com/1200x/2b/3c/fd/2b3cfd5d9d60ce48c5afa61fb77f4d20.jpg',
            'https://i.pinimg.com/736x/25/17/10/251710c189c7dc3bd6c4c1406deb2254.jpg',
            'https://i.pinimg.com/736x/0d/52/45/0d5245c2e58d100e64c66a9374fe1e6f.jpg',
            'https://i.pinimg.com/736x/54/4e/ab/544eab9ed1e823532d0ccd9ef95fc058.jpg'  
        ],
        men: [
            'https://i.pinimg.com/736x/a1/90/b3/a190b3280ff540284df9a06b0bee3c20.jpg',
            'https://i.pinimg.com/736x/3d/9d/74/3d9d74c7d539f53417837c7ea62ed8c6.jpg', 
            'https://i.pinimg.com/736x/14/14/d6/1414d60ddd745ddf682b2212c51bfeb1.jpg', 
            'https://i.pinimg.com/736x/75/b8/04/75b8043fc6b1856dba81b31897232841.jpg', 
            'https://i.pinimg.com/1200x/cd/57/d3/cd57d3b4887c698cae5a85c21f3358f8.jpg', 
            'https://i.pinimg.com/736x/95/35/97/953597947b1a358efbb8f958e7ef4849.jpg',
            'https://i.pinimg.com/736x/0e/c7/f3/0ec7f35c1ac08fef410300897ea89ed1.jpg',
            'https://i.pinimg.com/736x/79/09/ab/7909ab604a7539675a2f94fb650bdb0e.jpg'  
        ],
        kids: [
            'https://i.pinimg.com/736x/f1/aa/9f/f1aa9fc30bcca2c9853e1a3b49f26a13.jpg',
            'https://i.pinimg.com/1200x/99/17/1c/99171c7725163b5898cda335471d9394.jpg',
            'https://i.pinimg.com/1200x/bb/b0/7d/bbb07d1ac8aaf52eaae677cf17cc7ff9.jpg',
            'https://i.pinimg.com/1200x/d2/e8/09/d2e80982097df757f253eda8f2110f12.jpg',
            'https://i.pinimg.com/736x/20/22/2a/20222a5793676f6ecea762200ab6646a.jpg',
            'https://i.pinimg.com/736x/df/f7/82/dff78274ad9b381627d1bc8c4d129371.jpg',
            'https://i.pinimg.com/736x/82/51/af/8251afc2b8ef5baf471c88093d1f6ec0.jpg',
            'https://i.pinimg.com/1200x/a0/aa/bf/a0aabfdd7010ba447d093f812e688ce2.jpg',
            'https://i.pinimg.com/736x/3e/ad/92/3ead927865dcb9029548082b8ed21bc6.jpg',
            'https://i.pinimg.com/1200x/55/d7/be/55d7be3d5775d6653ff585d5a4e3e885.jpg'
              // Dress
        ],
        home: [
            'https://i.pinimg.com/474x/d4/e3/6b/d4e36be6fc8e1241649b98a5eb7db60f.jpg',
            'https://i.pinimg.com/736x/ed/bd/eb/edbdebf316b5b8da8a5c26e1ab3f65ba.jpg', // Cushion
            'https://i.pinimg.com/736x/02/e4/16/02e416f80a9211d42e3d3aacedd19f26.jpg',
            'https://i.pinimg.com/1200x/90/4f/2c/904f2cbb3fb4a0de683dec6f14497423.jpg', // Table Cloth
            'https://i.pinimg.com/1200x/4c/d2/ac/4cd2acb3a67fb55fd77132604e2d2067.jpg',
            'https://i.pinimg.com/1200x/16/f0/b7/16f0b75c70c643e2731a0239124a62fb.jpg',
            'https://i.pinimg.com/736x/ff/f4/6c/fff46c91f58dfd7a066c722b072c9415.jpg', // Curtains
            'https://i.pinimg.com/1200x/a0/fd/90/a0fd90925d6108b9e8a151cd644f0381.jpg', // Rug
            'https://i.pinimg.com/1200x/78/02/f9/7802f91023936a8d55437264a2e1122a.jpg', // Decor
            'https://i.pinimg.com/736x/c9/38/43/c938432d27394a1ad33fdbae063ab13d.jpg',
            'https://i.pinimg.com/1200x/e6/88/bb/e688bb299fd3fc3936cfa7bae0a073e1.jpg'  // Linen
        ]
    };

    
    window.loadCategory = function(category) {
        const displayArea = document.getElementById('product-display');
        
        
        displayArea.innerHTML = '';
        
      
        const images = collections[category];

        if(images) {
            images.forEach((url, index) => {
                const div = document.createElement('div');
                div.className = 'product-item';
                
                div.style.animationDelay = `${index * 0.1}s`;
                
                const img = document.createElement('img');
                img.src = url;
                img.alt = `${category} collection item`;
                
                div.appendChild(img);
                displayArea.appendChild(div);
            });
            
            
            displayArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };
    
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


