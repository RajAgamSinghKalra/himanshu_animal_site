// Contact page functionality
// These functions are now globally accessible via `window.`

window.getContactContent = () => `
      <section id="contact" class="section">
          <div class="page-header">
              <div class="container">
                  <h1>Contact Us</h1>
                  <p>Get in touch with our team - we're here to help!</p>
              </div>
          </div>

          <div style="padding: 80px 0;">
              <div class="container">
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px;">
                      <div>
                          <h2 style="font-size: 2rem; color: #2c3e50; margin-bottom: 30px;">Get In Touch</h2>
                          <div style="margin-bottom: 30px;">
                              <h3 style="color: #e67e22; margin-bottom: 10px; font-size: 1.2rem;">📍 Visit Us</h3>
                              <p style="color: #7f8c8d; line-height: 1.6;">123 Animal Lane<br>Pet City, PC 12345</p>
                          </div>
                          <div style="margin-bottom: 30px;">
                              <h3 style="color: #e67e22; margin-bottom: 10px; font-size: 1.2rem;">📞 Call Us</h3>
                              <p style="color: #7f8c8d; line-height: 1.6;">(555) 123-4567</p>
                          </div>
                          <div style="margin-bottom: 30px;">
                              <h3 style="color: #e67e22; margin-bottom: 10px; font-size: 1.2rem;">📧 Email Us</h3>
                              <p style="color: #7f8c8d; line-height: 1.6;">info@pawsandhearts.com</p>
                          </div>
                          <div style="margin-bottom: 30px;">
                              <h3 style="color: #e67e22; margin-bottom: 10px; font-size: 1.2rem;">🕒 Hours</h3>
                              <p style="color: #7f8c8d; line-height: 1.6;">Monday - Friday: 9:00 AM - 6:00 PM<br>
                              Saturday: 10:00 AM - 4:00 PM<br>
                              Sunday: 12:00 PM - 4:00 PM</p>
                          </div>
                      </div>
                      <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                          <h2 style="font-size: 2rem; color: #2c3e50; margin-bottom: 30px;">Send us a Message</h2>
                          <form id="contact-form" onsubmit="handleContactForm(event)">
                              <div style="margin-bottom: 25px;">
                                  <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 500;">Name *</label>
                                  <input type="text" name="name" required style="width: 100%; padding: 12px 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; font-family: inherit; transition: border-color 0.3s ease;">
                              </div>
                              <div style="margin-bottom: 25px;">
                                  <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 500;">Email *</label>
                                  <input type="email" name="email" required style="width: 100%; padding: 12px 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; font-family: inherit; transition: border-color 0.3s ease;">
                              </div>
                              <div style="margin-bottom: 25px;">
                                  <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 500;">Subject *</label>
                                  <select name="subject" required style="width: 100%; padding: 12px 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; font-family: inherit; transition: border-color 0.3s ease;">
                                      <option value="">Select a subject</option>
                                      <option value="adoption">Adoption Inquiry</option>
                                      <option value="volunteer">Volunteer Opportunities</option>
                                      <option value="donation">Donation</option>
                                      <option value="general">General Question</option>
                                  </select>
                              </div>
                              <div style="margin-bottom: 25px;">
                                  <label style="display: block; margin-bottom: 8px; color: #2c3e50; font-weight: 500;">Message *</label>
                                  <textarea name="message" rows="5" required style="width: 100%; padding: 12px 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; font-family: inherit; transition: border-color 0.3s ease; resize: vertical; min-height: 120px;"></textarea>
                              </div>
                              <button type="submit" class="btn btn-primary btn-full">Send Message</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  `

window.initializeContact = () => {
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", window.handleContactForm)
  }
}

window.handleContactForm = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // In a real application, this would send the data to a server
  alert(`Thank you for your message, ${name}! We'll get back to you at ${email} as soon as possible.`)

  // Reset form
  e.target.reset()
}
