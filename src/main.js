import "./style.css";

const products = [
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    description: "Rich chocolate cake with silky fudge frosting.",
  },
  {
    id: 2,
    name: "Strawberry Dream",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
    description: "Soft vanilla cake with strawberries and cream.",
  },
  {
    id: 3,
    name: "Red Velvet",
    price: 2200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZ2KP-nCvLQ2ZwW7QdJzgv05xdc_YCXSG8qBHHcBLxAXGKjLGxlIkVFMMVdTZ26v6en6mGBGeI7zdXtvplPMB_qcOBb3htEVFOd5y9A&s=10",
    description: "Velvety layers finished with cream cheese frosting.",
  },
  {
    id: 4,
    name: "Lotus Biscoff",
    price: 2300,
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=85",
    description: "Creamy Biscoff cake with crunchy biscuit crumbs.",
  },
  {
    id: 5,
    name: "Vanilla Celebration",
    price: 1700,
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1000&q=85",
    description: "Light, fluffy vanilla cake for every celebration.",
  },
  {
    id: 6,
    name: "Chocolate Cupcakes",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1000&q=85",
    description: "Six soft chocolate cupcakes with creamy frosting.",
  },
];

let cart = JSON.parse(localStorage.getItem("crumb-house-cart")) || [];

const app = document.querySelector("#app");

function money(amount) {
  return `Rs. ${amount.toLocaleString()}`;
}

function cartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function cartTotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function saveCart() {
  localStorage.setItem("crumb-house-cart", JSON.stringify(cart));
}

function render() {
  app.innerHTML = `
    <!-- NAVBAR -->

    <header class="navbar">

      <a href="#home" class="brand">
        <div class="brand-icon">⌂</div>

        <div>
          <div class="brand-name">
            <span>Crumb</span> House
          </div>

          <div class="brand-subtitle">
            — HOME BAKERY —
          </div>
        </div>
      </a>

      <nav class="desktop-nav">
        <a class="active" href="#home">⌂ <span>Home</span></a>
        <a href="#cakes">🧁 <span>Cakes</span></a>
        <a href="#about">♡ <span>About</span></a>
        <a href="#contact">✉ <span>Contact</span></a>
      </nav>

      <button class="cart-button" id="openCart">
        🛒
        <span>${cartCount()}</span>
      </button>

      <button class="menu-button" id="menuButton">
        ☰
      </button>

    </header>


    <!-- MOBILE MENU -->

    <div class="mobile-menu" id="mobileMenu">

      <button id="closeMenu">×</button>

      <a href="#home">⌂ Home</a>
      <a href="#cakes">🧁 Cakes</a>
      <a href="#about">♡ About</a>
      <a href="#contact">✉ Contact</a>

    </div>


    <!-- HERO -->

    <main>

      <section class="hero" id="home">

        <div class="hero-glow"></div>

        <div class="hero-content">

          <div class="hero-logo">

            <div class="logo-decoration">⌂</div>

            <div class="hero-logo-text">
              <span>Crumb</span>
              <strong>House</strong>
            </div>

            <div class="heart-decoration">♥</div>

          </div>

          <p class="hero-title">
            Freshly baked,<br>
            made just for you.
            <span>♥</span>
          </p>

          <p class="hero-description">
            Cakes, cupcakes & brownies<br>
            baked to order.
          </p>

     <a
  href="https://wa.me/923001234567"
  target="_blank"
  class="whatsapp-hero"
>
            <span class="whatsapp-icon">◉</span>
            <strong>Order on WhatsApp</strong>
            <span>→</span>
          </a>

          <div class="hero-features">

            <div>
              <span>♧</span>
              <p>Fresh<br><b>Ingredients</b></p>
            </div>

            <i></i>

            <div>
              <span>♡</span>
              <p>Made<br><b>with Love</b></p>
            </div>

            <i></i>

            <div>
              <span>⌂</span>
              <p>Home<br><b>Bakery</b></p>
            </div>

          </div>

        </div>


        <div class="cake-area">

          <div class="cake-glow"></div>

          <div class="cake-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90"
              alt="Chocolate cake"
            >
          </div>

          <div class="cake-floating-card">
            <span>✦</span>
            <b>Sweet</b>
            <small>Moments</small>
            <span>♥</span>
          </div>

        </div>

        <div class="hero-spark spark-one">✦</div>
        <div class="hero-spark spark-two">♥</div>
        <div class="hero-spark spark-three">✦</div>
        <div class="hero-spark spark-four">♡</div>

      </section>


      <!-- INTRO -->

      <section class="intro-section">

        <div class="section-label">
          ✦ OUR LITTLE BAKERY ✦
        </div>

        <h2>
          Happiness is better
          <br>
          <em>with cake.</em>
        </h2>

        <p>
          We bake sweet little moments with fresh ingredients,
          homemade care and a whole lot of love.
        </p>

      </section>


      <!-- CAKES -->

      <section class="cakes-section" id="cakes">

        <div class="section-heading">

          <div>
            <span class="section-label">✦ OUR FAVORITES ✦</span>

            <h2>
              Pick your
              <em>sweet</em>
            </h2>
          </div>

          <p>
            Freshly baked cakes made specially
            for your happiest moments.
          </p>

        </div>


        <div class="products-grid">

          ${products
            .map(
              (product, index) => `
                <article class="product-card ${
                  index === 0 ? "big-card" : ""
                }">

                  <div class="product-image">

                    <img
                      src="${product.image}"
                      alt="${product.name}"
                    >

                    ${
                      index === 0
                        ? `<span class="popular-badge">♥ BESTSELLER</span>`
                        : ""
                    }

                    <button
                      class="add-button"
                      data-add="${product.id}"
                    >
                      +
                    </button>

                  </div>

                  <div class="product-content">

                    <div>
                      <h3>${product.name}</h3>
                      <p>${product.description}</p>
                    </div>

                    <strong>
                      ${money(product.price)}
                    </strong>

                  </div>

                </article>
              `
            )
            .join("")}

        </div>

      </section>


      <!-- ABOUT -->

      <section class="about-section" id="about">

        <div class="about-image">

          <img
            src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1100&q=85"
            alt="Fresh bakery treats"
          >

          <div class="about-sticker">
            <span>♥</span>
            Made<br>
            with<br>
            love
          </div>

        </div>


        <div class="about-content">

          <span class="section-label">
            ✦ OUR STORY ✦
          </span>

          <h2>
            A little bakery
            <br>
            with a <em>big heart.</em>
          </h2>

          <p>
            Crumb House started with a simple idea:
            make cakes that taste as good as they look
            and make every celebration feel a little sweeter.
          </p>

          <p>
            Every order is baked fresh, decorated carefully
            and prepared with the same care we'd give to
            a cake for our own family.
          </p>

          <a href="#cakes" class="cream-button">
            Meet our cakes →
          </a>

        </div>

      </section>


      <!-- WHY US -->

      <section class="why-section">

        <div class="section-label">
          ✦ WHY CRUMB HOUSE ✦
        </div>

        <h2>
          Sweet things,
          <br>
          <em>made properly.</em>
        </h2>


        <div class="why-grid">

          <div class="why-card">

            <span class="why-icon">♧</span>

            <b>01</b>

            <h3>Fresh Ingredients</h3>

            <p>
              Quality ingredients go into every
              cake we bake.
            </p>

          </div>


          <div class="why-card featured">

            <span class="why-icon">♥</span>

            <b>02</b>

            <h3>Made With Love</h3>

            <p>
              Every order gets personal attention
              from our kitchen.
            </p>

          </div>


          <div class="why-card">

            <span class="why-icon">⌂</span>

            <b>03</b>

            <h3>Home Bakery</h3>

            <p>
              Small batches mean fresh cakes
              made especially for you.
            </p>

          </div>

        </div>

      </section>


      <!-- REVIEWS -->

      <section class="reviews-section">

        <div class="section-heading center">

          <span class="section-label">
            ✦ CUSTOMER LOVE ✦
          </span>

          <h2>
            Made them smile.
            <br>
            <em>Made us happy.</em>
          </h2>

        </div>


        <div class="reviews">

          <article class="review-card">

            <div class="stars">★★★★★</div>

            <p>
              "The chocolate cake was absolutely
              delicious. Everyone loved it!"
            </p>

            <b>— Sarah K.</b>

          </article>


          <article class="review-card highlighted">

            <div class="stars">★★★★★</div>

            <p>
              "The cake looked beautiful and tasted
              even better. Definitely ordering again!"
            </p>

            <b>— Hira M.</b>

          </article>


          <article class="review-card">

            <div class="stars">★★★★★</div>

            <p>
              "Exactly what I wanted for my daughter's
              birthday. So fresh and pretty!"
            </p>

            <b>— Ayesha R.</b>

          </article>

        </div>

      </section>


      <!-- FINAL CTA -->

      <section class="final-section" id="contact">

        <div class="final-decoration">♥</div>

        <span class="section-label">
          ✦ READY FOR SOMETHING SWEET? ✦
        </span>

        <h2>
          Let's make your
          <br>
          <em>moment sweeter.</em>
        </h2>

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          class="big-order-button"
        >
          <span>◉</span>
          Order on WhatsApp →
        </a>

      </section>

    </main>


    <!-- FOOTER -->

    <footer>

      <div class="footer-brand">

        <div class="brand-name">
          <span>Crumb</span> House
        </div>

        <p>
          Freshly baked.<br>
          Made just for you.
        </p>

      </div>


      <div class="footer-links">

        <b>EXPLORE</b>

        <a href="#home">Home</a>
        <a href="#cakes">Cakes</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>

      </div>


      <div class="footer-contact">

        <b>FIND US</b>

        <p>📍 Lahore, Pakistan</p>
        <p>📱 +92 300 1234567</p>
        <p>📸 @crumbhouse</p>

      </div>

      <div class="copyright">
        © 2026 Crumb House · Baked with ♥
      </div>

    </footer>


    <!-- CART OVERLAY -->

    <div class="cart-overlay" id="cartOverlay"></div>


    <!-- CART -->

    <aside class="cart-drawer" id="cartDrawer">

      <div class="cart-top">

        <div>
          <span class="section-label">YOUR ORDER</span>
          <h2>Sweet picks 🧁</h2>
        </div>

        <button id="closeCart">×</button>

      </div>


      <div class="cart-list" id="cartList"></div>


      <div class="cart-bottom">

        <div class="total">
          <span>Total</span>
          <strong id="totalPrice">Rs. 0</strong>
        </div>

        <button id="orderWhatsApp" class="checkout-button">
          Order on WhatsApp →
        </button>

      </div>

    </aside>
  `;

  setupEvents();
  renderCart();
}


/* ---------------- CART ---------------- */

function addToCart(id) {
  const product = products.find((item) => item.id === id);

  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart();
  renderCart();
  updateCartBadge();
  openCart();
}


function updateQuantity(id, change) {
  const item = cart.find((product) => product.id === id);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id !== id);
  }

  saveCart();
  renderCart();
  updateCartBadge();
}


function renderCart() {
  const list = document.querySelector("#cartList");
  const total = document.querySelector("#totalPrice");

  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="empty-cart">
        <span>🧁</span>
        <h3>Your cart is empty</h3>
        <p>Add a sweet treat to get started.</p>
      </div>
    `;

    total.textContent = "Rs. 0";

    return;
  }


  list.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">

          <img
            src="${item.image}"
            alt="${item.name}"
          >

          <div class="cart-item-details">

            <h3>${item.name}</h3>

            <strong>
              ${money(item.price)}
            </strong>

            <div class="quantity">

              <button data-minus="${item.id}">
                −
              </button>

              <span>${item.quantity}</span>

              <button data-plus="${item.id}">
                +
              </button>

            </div>

          </div>

        </div>
      `
    )
    .join("");


  total.textContent = money(cartTotal());


  document.querySelectorAll("[data-minus]").forEach((button) => {
    button.addEventListener("click", () => {
      updateQuantity(Number(button.dataset.minus), -1);
    });
  });


  document.querySelectorAll("[data-plus]").forEach((button) => {
    button.addEventListener("click", () => {
      updateQuantity(Number(button.dataset.plus), 1);
    });
  });
}


function updateCartBadge() {
  document.querySelector("#openCart span").textContent = cartCount();
}


/* ---------------- WHATSAPP ---------------- */

function orderOnWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please choose a cake first.");
    return;
  }

  let message =
    "Hi Crumb House! 🍰%0A%0AI'd like to order:%0A%0A";

  cart.forEach((item) => {
    message +=
      `• ${item.name} × ${item.quantity} — ${money(
        item.price * item.quantity
      )}%0A`;
  });

  message +=
    `%0A💰 Total: ${money(cartTotal())}%0A%0AThank you! ♥`;

  window.open(
    `https://wa.me/923001234567?text=${message}`,
    "_blank"
  );
}


/* ---------------- CART UI ---------------- */

function openCart() {
  document.querySelector("#cartDrawer").classList.add("open");
  document.querySelector("#cartOverlay").classList.add("show");
  document.body.classList.add("locked");
}


function closeCart() {
  document.querySelector("#cartDrawer").classList.remove("open");
  document.querySelector("#cartOverlay").classList.remove("show");
  document.body.classList.remove("locked");
}


/* ---------------- MOBILE MENU ---------------- */

function openMenu() {
  document.querySelector("#mobileMenu").classList.add("show");
}


function closeMenu() {
  document.querySelector("#mobileMenu").classList.remove("show");
}


/* ---------------- EVENTS ---------------- */

function setupEvents() {

  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.add));
    });
  });


  document
    .querySelector("#openCart")
    .addEventListener("click", openCart);


  document
    .querySelector("#closeCart")
    .addEventListener("click", closeCart);


  document
    .querySelector("#cartOverlay")
    .addEventListener("click", closeCart);


  document
    .querySelector("#orderWhatsApp")
    .addEventListener("click", orderOnWhatsApp);


  document
    .querySelector("#menuButton")
    .addEventListener("click", openMenu);


  document
    .querySelector("#closeMenu")
    .addEventListener("click", closeMenu);


  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

}


render();