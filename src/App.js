import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';


function App() {

  const [products, setProducts] = useState([
    {
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/391174/11/sv01/fnd/IND/fmt/png/RS-X-Geek-Unisex-Sneakers",
      title: "PUMA RS-X Geek Unisex Sneakers",
      price: 5499
    },
    {
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/387672/33/sv01/fnd/IND/fmt/png/Rider-Future-Vintage-Unisex-Sneakers",
      title: "PUMA Rider Future Vintage Unisex Sneakers",
      price: 4949
    },
    {
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/393533/01/sv01/fnd/IND/fmt/png/PUMA-x-THE-SMURFS-RS-X-Sneakers",
      title: "PUMA x THE SMURFS RS-X Sneakers",
      price: 7199
    },
    {
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/394756/02/sv01/fnd/IND/fmt/png/RS-X-Efekt-Energy-Unisex-Sneakers",
      title: "PUMA RS-X Efekt Energy Unisex Sneakers",
      price: 7299
    },
    {
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395875/02/sv01/fnd/IND/fmt/png/Blktop-Rider-Preppy-Unisex-Sneakers",
      title: "PUMA Blktop Rider Preppy Unisex Sneakers",
      price: 8999
    },
    {
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/396463/07/sv01/fnd/IND/fmt/png/Palermo-Unisex-Sneakers",
      title: "PUMA Palermo Unisex Sneakers",
      price: 6999
    }

  ])


  return (
    <>
      <Header />
      <main>
        <section>
          <h2>PUMA.COM</h2>
          <ul className='products'>
            {
              products.map((item) => {
                return <Product product={item} />
              })
            }
          </ul>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
