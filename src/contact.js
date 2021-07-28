const contactPage = () => {
  const contactContainer = document.createElement('div');
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  contact.setAttribute('data-tab-content', '');
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
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.5272280991567!2d27.855745014744457!3d-26.341804175978364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a9961e41864d%3A0xf07d0a6683223795!2sDelhi%20Delicious%20Headoffice!5e0!3m2!1sen!2sza!4v1627508384711!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>`;

  contactContainer.appendChild(contact);
  return contactContainer;
};

export default contactPage;