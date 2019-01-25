import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import proj01 from '../assets/images/projects/solar-system.png'
import proj02 from '../assets/images/projects/quantum-hydrogen.png'

const DEFAULT_IMAGES = [
    { id: '2', src: proj02, thumbnail: proj02, caption: 'Quantum Hydrogen', description: 'A visualisation of electron locations in a hydrogen atom. The shapes are derived from Quantum Mechanics. The details are a little painful, but the shapes are pretty!', liveLink: 'https://alexk.nz/quantum-hydrogen', gitLink: 'https://github.com/alex-kennedy/quantum-hydrogen'},
    { id: '1', src: proj01, thumbnail: proj01, caption: 'Solar System', description: 'Emulates celestial bodies. It is not yet complete, but I plan it to display the live(ish) locations of the hundreds of thousands of asteroids in our Solar System.', liveLink: 'https://alexk.nz/solar-system', gitLink: 'https://github.com/alex-kennedy/solar-system'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Alex Kennedy"
        const siteDescription = "My personal site."

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>I am Alex Kennedy. </h2>
                        </header>
                        <p>I am a student, actor and proud Physics nerd. My home is the beautiful rural town of &#332;haup&#333;, New Zealand. I remember the day my dad grudgingly brought home our first computer, what can be done with one has captivated me ever since. I love exoplanets, the glare of stage lights, learning, talking, and educating. If you want to talk to me, I'd love to hear from you! </p>
                    </section>

                    <section>
                        <h1>Projects</h1>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description, liveLink, gitLink }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            liveLink,
                            gitLink
                        }))} />
                    </section>

                    <section id="education">
                        <h1>Education</h1>

                        <h2>University of Auckland</h2>
                        <h4>2016 - 2020</h4>
                        <p>Bachelor of Engineering (Hons) - Engineering Science<br />
                        <i>conjoint</i><br />
                        Bachelor of Science - Physics</p>

                        <h2>University of California - Berkeley</h2>
                        <h4>Fall 2018</h4>
                        Reciprocal Exchange Program - Physics

                        <br /><br />
                        <h3>Honours and Awards</h3>
                        <p>University of Auckland Scholarship - full tuition.</p>
                        <p>Named on Engineering Dean's Honours List each year eligible.</p>

                        <h4>Top in Course Awards</h4>
                        <ul>
                            <li>Innovating for a Knowledge Society (2018)</li>
                            <li>Frontiers of Physics (2017)</li>
                            <li>Introduction to Operations Research (2017)</li>
                            <li>Advanced Mechanics and Mathematical Modelling (2016)</li>
                        </ul>

                    </section>

                    <section id="experience">
                        <h1>Experience</h1>

                        <h2>Quantiful - Junior Data Scientist</h2>
                        <h4>Nov 2017 - Aug 2018</h4>
                        <p>Summer internship and subsequent part time work.</p>

                        <p>I worked to develop Quantiful’s minimum viable product; the client interface, machine learning pipeline, analytics platform and data engineering back-end. </p>

                        <h2>HD Geotechnical, Hamilton – Junior Engineering Technician</h2>
                        <h4>Nov 2016 – Feb 2017</h4>
                    </section>

                    <section>
                        <h1>Leadership</h1>
                        <h2>Resident Advisor – O’Rorke Hall, 2017</h2>
                        <p>I learned the value of being a compassionate, engaged and emotionally aware leader and team member. </p>

                        <h2>Dean’s Leadership Programme – Sir Colin Maiden Scholar 2017</h2>
                        <p>A selective programme recognising and developing leadership skills and potential. </p>

                    </section>

                    <section>
                        <h1>Culture</h1>
                        <h2>Auckland Engineering Revue</h2>
                        <h4>2019 – Executive Director</h4>
                        <h4>2018 – Assistant Director</h4>
                        <h4>2019 – Lead Role</h4>
                        
                        <p>The Engineering Revue is an annual stage show redefining what it means to be an Engineer. I lead a team of 100+ students. Our goal is to break the mould, and prove our faculty is a home for all. </p>

                        <h2>UC Berkeley BareStage</h2>
                        <h4>2018 Production of Orwell's <i>1984</i></h4>

                        <h2>UC Berkeley Theater4Charity</h2>
                        <h4>Fall 2018</h4>
                        <p>Winner of <i>Best Supporting Actor in a One Act</i> and <i>Best One-Liner in a One Act</i>. </p>

                        <h2>Shakespeare Globe Centre New Zealand - Young Shakespeare Company</h2>
                        <h4>2016</h4>
                        <p>I had the honour to perform at Shakespeare’s Globe Theatre in London while a member of the Shakespeare Globe Centre New Zealand Young Shakespeare Company.</p>


                    </section>

                    {/* <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section> */}

                    {/* <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section> */}

                </div>

            </Layout>
        )
    }
}

export default HomeIndex