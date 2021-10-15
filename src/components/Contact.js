import Navbar from './Navbar';
import Cart from './Cart';

function Contact() {
    return (
        <div className="Contact">
            <Navbar />
            <Cart />
            <h3>Contact Us</h3>
            <div class="contact-form">
                <input type="text" placeholder="Your Name" />
                <br />
                <input type="email" placeholder="Your email address" />
                <br />
                <textarea rows="4" placeholder="Your message"></textarea>
                <br />
                <button className="checkoutbtn">Send Message</button>
                <br />
                <span>
                    Thank you for your message, we will be in touch in no time!
                </span>
            </div>
        </div>
    );
}

export default Contact;
