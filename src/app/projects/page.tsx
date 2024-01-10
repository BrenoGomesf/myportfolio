export default function Projects() {
    return (
        <main>
            <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <a href="https://roderotas.com" style={{ textDecoration: 'none' }} >
                                                <h2 className="fw-bolder curso-pointer text-black">Rode Rotas 1</h2>
                                            </a>
                                            <p>I developed the administrative system and e-commerce platform, utilizing Nest.js for the API and Angular for the frontend. Throughout the project, I established efficient communications with other APIs, such as Pagar.me, enriching my experience in payment solutions. Additionally, I integrated the Total Bus API. I have expertise in user log registrations, contributing to a more comprehensive and efficient system approach.</p>
                                        </div>
                                        <img className="img-fluid" src="https://roderotas.com/assets/images/logoRode-1.png" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <a href="https://smartmiles.com.br/" style={{ textDecoration: 'none' }} >
                                                <h2 className="fw-bolder curso-pointer text-black">Smart Miles</h2>
                                            </a>
                                            <p>I spearheaded the development of a robust administrative website in Angular, playing a central role in the platform`s ongoing evolution. In addition to contributing to the initial development, I led the creation and implementation of new features, ensuring an enhanced user experience aligned with ever-evolving needs.</p>
                                        </div>
                                        <img style={{ width: "15rem" }} className="img-fluid" src="https://smartmiles.com.br/assets/logo/LOGO%20SMART%20MILES_01-4fd598920d6662747001bc0758b3164280dab3a9e64eb0cd51ad00c50613a5b1.png" alt="..." />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Let`s build something together</h2>
                        <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a>
                    </div>
                </div>
            </section>
        </main>
    )
}