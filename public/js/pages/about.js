// About page functionality
function getAboutContent() {
  return `
        <section id="about" class="section active">
            <div class="page-header">
                <div class="container">
                    <h1>About Paws & Hearts</h1>
                    <p>Our mission to connect loving families with animals in need</p>
                </div>
            </div>

            <div style="padding: 80px 0;">
                <div class="container">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
                        <div>
                            <h2 style="font-size: 2.5rem; color: #2c3e50; margin-bottom: 30px;">Our Story</h2>
                            <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 20px;">Founded in 2008, Paws & Hearts began as a small rescue operation in a garage. Today, we're one of the region's most trusted animal adoption centers, having facilitated over 1,800 successful adoptions.</p>
                            <p style="color: #7f8c8d; line-height: 1.8; margin-bottom: 20px;">Our dedicated team of veterinarians, animal behaviorists, and volunteers work tirelessly to ensure every animal receives the care, love, and attention they deserve while waiting for their forever home.</p>
                            <h3 style="font-size: 1.5rem; color: #e67e22; margin: 30px 0 15px;">Our Mission</h3>
                            <p style="color: #7f8c8d; line-height: 1.8;">To rescue, rehabilitate, and rehome animals in need while educating the community about responsible pet ownership and the importance of spaying and neutering.</p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Our team caring for animals" style="width: 100%; height: auto; border-radius: 15px;">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}
