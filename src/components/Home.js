import Navbar from './Navbar';
import homeimage from '../images/home.jpg';
import Cart from './Cart';

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <Cart />
            <h2>Choose you, </h2>
            <h2>Choose your Style. </h2>
            <img src={homeimage} alt="" width="70%"></img>
        </div>
    );
}

export default Home;
