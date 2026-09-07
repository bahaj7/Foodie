import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const products = [
    {
      id: 1,
      name: 'برجر كلاسيكي',
      description: 'برجر لذيذ مع خس وطماطم وجبنة',
      price: 25,
      category: 'البرجر',
      image: 'https://via.placeholder.com/300x200?text=Burger'
    },
    {
      id: 2,
      name: 'برجر دجاج',
      description: 'برجر مع دجاج مشوي وصلصة خاصة',
      price: 30,
      category: 'البرجر',
      image: 'https://via.placeholder.com/300x200?text=Chicken+Burger'
    },
    {
      id: 3,
      name: 'بيتزا ماريجريتا',
      description: 'بيتزا بالجبن والطماطم والريحان',
      price: 35,
      category: 'البيتزا',
      image: 'https://via.placeholder.com/300x200?text=Margherita+Pizza'
    },
    {
      id: 4,
      name: 'بيتزا اللحم',
      description: 'بيتزا مع لحم بقري وبصل وفلفل',
      price: 40,
      category: 'البيتزا',
      image: 'https://via.placeholder.com/300x200?text=Meat+Pizza'
    },
    {
      id: 5,
      name: 'شاورما دجاج',
      description: 'شاورما دجاج مشوية مع الخس والطحينة',
      price: 20,
      category: 'الشاورما',
      image: 'https://via.placeholder.com/300x200?text=Chicken+Shawarma'
    },
    {
      id: 6,
      name: 'شاورما لحم',
      description: 'شاورما لحم مشوية مع الخضار والصلصة',
      price: 25,
      category: 'الشاورما',
      image: 'https://via.placeholder.com/300x200?text=Meat+Shawarma'
    },
    {
      id: 7,
      name: 'كوكا كولا',
      description: 'مشروب بارد منعش',
      price: 5,
      category: 'المشروبات',
      image: 'https://via.placeholder.com/300x200?text=Coca+Cola'
    },
    {
      id: 8,
      name: 'عصير برتقال',
      description: 'عصير برتقال طازج',
      price: 8,
      category: 'المشروبات',
      image: 'https://via.placeholder.com/300x200?text=Orange+Juice'
    },
    {
      id: 9,
      name: 'كيك الشوكولاتة',
      description: 'كيك شوكولاتة لذيذ',
      price: 15,
      category: 'الحلويات',
      image: 'https://via.placeholder.com/300x200?text=Chocolate+Cake'
    },
    {
      id: 10,
      name: 'آيس كريم الفانيليا',
      description: 'آيس كريم بنكهة الفانيليا',
      price: 10,
      category: 'الحلويات',
      image: 'https://via.placeholder.com/300x200?text=Vanilla+Ice+Cream'
    }
  ];

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  return (
    <div className="App">
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cartItems.length}
      />
      
      {currentPage === 'home' && (
        <Home products={products} onAddToCart={addToCart} />
      )}
      
      {currentPage === 'cart' && (
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
