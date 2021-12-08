import { Layout } from '../components/layout/Layout';

export const HomeScreen = () => {

    return (
        <Layout>
            <section className="row">
                <div className="wrapper" style={{margin: "0 auto", width: "80%"}}>
                    <div className="col-md-12 pt-4">
                        <div className="card card-shadow">
                            <header className="card-header d-flex justify-content-center border-bottom border-warning border-5 rounded-3">
                                <h3>Bienvenido a SIIA UAS Alumnos</h3>
                            </header>
                            <main className="card-body">
                                <div className="row">
                                    <div className ="col-md-8 py-4">
                                        <div className ="card border-3 rounded-3">
                                            <header className ="card-header bg-white d-flex justify-content-center border-bottom border-5">
                                                <h4>Ultimas noticias</h4>
                                            </header>
                                            <main className ="card-body d-flex justify-content-center" style={{backgroundColor: "rgb(207, 207, 207)"}}>
                                                <div className ="cdb-iframe">
                                                    <iframe title="Facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fuas-oficial&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3121842831238166" width="500" height="500" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                                </div>
                                            </main>
                                        </div>
                                    </div>
                                    <div className ="col-md-4">
                                        <div className ="row">
                                            <div className ="col-md-12 pt-2">
                                                <div className ="card border-3 rounded-3">
                                                    <header className ="card-header d-flex justify-content-center border-bottom">
                                                        <h4>Calendario UAS 2021-2022</h4>
                                                    </header>
                                                    <main className ="card-body d-flex justify-content-center">
                                                        <img className ="img-fluid" width="200" height="50"src="http://sau.uas.edu.mx/images/calendario_2021-2022.jpg" alt="" />
                                                    </main>
                                                </div>
                                            </div>
                                            <div className ="col-md-12 py-4">
                                                <div className ="card border-3 rounded-3">
                                                    <header className ="card-header d-flex justify-content-center border-bottom">
                                                        <h4>Pagina oficial</h4>
                                                    </header>
                                                    <main className ="card-body d-flex justify-content-center">
                                                        <a href="/#">
                                                            <img className ="img-fluid" width="100" height="50" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffca.uas.edu.mx%2Fimages%2F2018%2F04%2F13%2Fuas.jpg&f=1&nofb=1" alt="" />
                                                            <br />
                                                            <span className ="btn btn-primary">Página Oficial</span>
                                                        </a>
                                                    </main>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <h4 className="text-white">© Derechos Reservados UAS</h4>
                </div>
            </footer>
        </Layout>
    )
};
