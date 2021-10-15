import Navbar from './Navbar';
import homeimage from '../images/home.jpg';
import Cart from './Cart';

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <Cart />
            <p>Choose you, </p>
            <p>Choose your Style. </p>
            <img src={homeimage} alt="" width="70%"></img>
        </div>
    );
}

export default Home;
