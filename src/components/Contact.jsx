export default function Contact(){
    return (
        <div id="contact" className="contact">
            <h2 className="contact-title">Send Us a Message</h2>
            <form action="https://formspree.io/f/xwkdebbw" method="POST" className="contact-form">
                <input 
                    name="name"
                    className="input-name" 
                    type="text" 
                    placeholder="Your name" 
                    required
                />
                <input 
                    name="email"
                    className="input-mail" 
                    type="email" 
                    placeholder="Your mail" 
                    required
                />
                <textarea 
                    name="feedback"
                    className="input-feedback" 
                    type="text" 
                    placeholder="Send me your feedback"
                />
                <button type="submit" className="submit" data-aos="zoom-in" data-aos-duration="500">Submit</button>
            </form>
        </div>
    )
}