export default function Contact() {
    return (
        <main>
            <section className="py-5">
                <div className="container px-5">
                    <div className="bg-light rounded-4 py-5 px-4 px-md-5 mt-4">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <a href={`https://api.whatsapp.com/send/?phone=556299468%E2%80%916788&amp;amp;text`} style={{ textDecoration: "none" }}>
                                <p className="lead fw-normal text-muted mb-0 animated-wiggle">Let`s work together!</p>
                            </a>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">

                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}