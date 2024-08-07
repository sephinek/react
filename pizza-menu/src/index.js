import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

const OPENHOUR = 11;
const CLOSEHOUR = 21;

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Order() {
  return (
    <div className='order'>
      <p>
        We're currently open until {CLOSEHOUR}:00. Come visit us or order
        online.
      </p>
      <button className='btn'>Order</button>
    </div>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={`pizza${pizza.soldOut ? ' sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredient}</p>
      <span>{pizza.soldOut ? 'Sold out' : pizza.price}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const isOpen = hour >= OPENHOUR && hour <= CLOSEHOUR;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order />
      ) : (
        <p>
          We're happy to welcome you between {OPENHOUR}:00 and {CLOSEHOUR}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement('footer', null, "We're currently open!");
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById('root'));
