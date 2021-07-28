 const contactPage = () => {
    const contactContainer = document.createElement('div')
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML = `
    <div class="hero">
    <h1>Contact us</h1>
  </div>
  <div class="contact-container">
    <div class="info">
      <div class="address">
        <p>
          <i class="fi-xnsuxl-map-marker-solid"></i>No 6 Fish River Street, Lenasia,<br />Johannesburg, South Africa 1827
        </p>
      </div>
      <div class="hours">
        <p>
          <i class="fi-cnsuhl-clock-solid"></i
          ><span>Mon-Fri:</span>9am-5pm<br /><span>Sat-Sun:</span
          >9am-12pm
        </p>
      </div>
      <div class="phone">
        <p><i class="fi-xnsrxl-phone-solid"></i>(277)-888 5555</p>
      </div>
      <div class="contact-form pb-5">
        <form onsubmit="return false">
          <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
          <div class="input-box p-3">
            <input type="text" placeholder="Full name" class="text-center" required/>
       
          </div>
          <div class="input-box text-center pb-3">
            <input type="text" placeholder="email" class="text-center" required/>

          </div>
          <div class="input-box text-center pb-3">
            <textarea placeholder="message" class="text-center" required></textarea>
          </div>
          <div class='submit'>
          <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus"
      width="600"
      height="450"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  </div>`;

contactContainer.appendChild(contact);
return contactContainer;
}

export default contactPage