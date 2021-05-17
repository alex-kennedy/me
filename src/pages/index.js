import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import proj01 from '../assets/images/projects/solar-system-updated.png'
import proj02 from '../assets/images/projects/quantum-hydrogen.png'

const DEFAULT_IMAGES = [
  {
    id: '2',
    src: proj02,
    thumbnail: proj02,
    caption: 'Quantum Hydrogen',
    description:
      'A visualisation of electron locations in a hydrogen atom. The shapes are derived from Quantum Mechanics. The details are a little painful, but the shapes are pretty!',
    liveLink: 'https://alexk.nz/quantum-hydrogen',
    gitLink: 'https://github.com/alex-kennedy/quantum-hydrogen',
  },
  {
    id: '1',
    src: proj01,
    thumbnail: proj01,
    caption: 'Solar System',
    description:
      'The live (approximate) locations of planets and hundreds of thousands of asteroids in the Solar System. Does a bunch of physics on the client-side with some Web Assembly via Rust.',
    liveLink: 'https://alexk.nz/solar-system',
    gitLink: 'https://github.com/alex-kennedy/solar-system',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Alex Kennedy'
    const siteDescription = 'My personal site.'

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
              <ul className="icons">
                <li>
                  <a
                    href="https://github.com/alex-kennedy"
                    className="icon fa-github"
                  >
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://nz.linkedin.com/in/alex-kennedy"
                    className="icon fa-linkedin"
                  >
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:apkennedy@me.com"
                    className="icon fa-envelope-o"
                  >
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
            </header>
            <p>
              I am a student, actor and proud Physics nerd. My home is the
              beautiful rural town of &#332;haup&#333;, New Zealand. I remember
              the day my dad grudgingly brought home our first computer, what
              can be done with one has captivated me ever since. I love
              exoplanets, the glare of stage lights, learning, talking, and
              educating.
            </p>
          </section>

          <section id="experience">
            <h1>Experience</h1>
            <h2>Google - Software Engineer</h2>
            <h4>Feb 2021 - Present</h4>I am currently a Site Reliability
            Engineer in the Google Cloud Storage team.
          </section>

          <section id="publications">
            <h1>Publications</h1>
            Kennedy, A., Nash, G., Rattenbury, N. J., and Kempa-Liehr, A. W.,
            "Modelling the projected separation of microlensing events using
            systematic time-series feature engineering",{' '}
            <i>Astronomy and Computing</i>, vol. 35, 2021.{' '}
            <a href="https://dx.doi.org/10.1016/j.ascom.2021.100460">
              doi:10.1016/j.ascom.2021.100460.
            </a>
          </section>

          <section id="education">
            <h1>Education</h1>
            <h2>University of Auckland</h2>
            <h4>2016 - 2020</h4>
            <p>
              Bachelor of Engineering (Hons) - Engineering Science
              <br />
              <i>conjoint</i>
              <br />
              Bachelor of Science - Physics
            </p>
            <h2>University of California - Berkeley</h2>
            <h4>Fall 2018</h4>
            Reciprocal Exchange Program - Physics
            <br />
            <br />
            <h3>Honours and Awards</h3>
            <p>Senior Scholar Award in the Faculty of Science (2020)</p>
            <p>Cecil M Segedin Prize In Engineering Science (2020)</p>
            <p>Department of Physics Scholarship (2020)</p>
            <p>Beca Part IV Engineering Award (2019)</p>
            <p>University of Auckland Scholarship - full tuition (2016-2018)</p>
            <p>Named on Engineering Dean's Honours List each year eligible.</p>
            <h4>First in Course Awards</h4>
            <ul>
              <li>Particle Physics and Astrophysics (PHYSICS 356, 2020)</li>
              <li>Engineering Science Design II (ENGSCI 363, 2020)</li>
              <li>Experimental Physics (PHYSICS 390, 2020)</li>
              <li>World Archaeology (ANTHRO 101, 2020)</li>
              <li>
                Integer and Multi-objective Optimisation (ENGSCI 761, 2019)
              </li>
              <li>Innovating for a Knowledge Society (SCIGEN 201, 2018)</li>
              <li>Frontiers of Physics (PHYSICS 245, 2017)</li>
              <li>Introduction to Operations Research (ENGSCI 255, 2017)</li>
              <li>
                Advanced Mechanics and Mathematical Modelling (ENGGEN 150, 2016)
              </li>
            </ul>
          </section>

          <section>
            <h1>Projects</h1>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({
                  id,
                  src,
                  thumbnail,
                  caption,
                  description,
                  liveLink,
                  gitLink,
                }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                  liveLink,
                  gitLink,
                })
              )}
            />
          </section>

          <section id="internships">
            <h1>Internships</h1>

            <h2>Google - Software Engineering Intern</h2>
            <h4>Nov 2019 - Feb 2020</h4>

            <p>
              Created an internal visualisation tool for network demand
              planning.
            </p>

            <a href="https://google.com">google.com</a>

            <h2>Quantiful - Junior Data Scientist</h2>
            <h4>Nov 2017 - Aug 2018</h4>
            <p>Summer internship and subsequent part time work.</p>

            <p>
              I worked to develop Quantiful’s minimum viable product; the client
              interface, machine learning pipeline, analytics platform and data
              engineering back-end.{' '}
            </p>
            <a href="https://quantiful.ai">quantifu.ai</a>

            <h2>HD Geotechnical, Hamilton – Junior Engineering Technician</h2>
            <h4>Nov 2016 – Feb 2017</h4>
            <a href="https://hdgeo.co.nz">hdgeo.co.nz</a>
          </section>

          <section>
            <h1>Leadership</h1>
            <h2>Resident Advisor – O’Rorke Hall, 2017</h2>
            <p>
              I learned the value of being a compassionate, engaged and
              emotionally aware leader and team member.{' '}
            </p>

            <h2>Dean’s Leadership Programme – Sir Colin Maiden Scholar 2017</h2>
            <p>
              A selective programme recognising and developing leadership skills
              and potential.
            </p>
          </section>

          <section>
            <h1>Culture</h1>
            <h2>Auckland Engineering Revue</h2>
            <h4>2020 – Plot Director</h4>
            <h4>2019 – Executive Director</h4>
            <h4>2018 – Assistant Director</h4>
            <h4>2017 – Lead Role</h4>

            <p>
              The Engineering Revue is an annual stage show redefining what it
              means to be an Engineer. I helped lead our exceptional team of
              nearly 100 students, who each year put on an original show of
              sketches, dances, a main plot, videos, and band performances. Our
              goal is to break the mould, and prove our faculty is a home for
              all.{' '}
            </p>

            <h2>UC Berkeley BareStage</h2>
            <h4>
              2018 Production of George Orwell's <i>1984</i> - O'Brien
            </h4>

            <h2>UC Berkeley Theater4Charity</h2>
            <h4>Fall 2018</h4>
            <p>
              Winner of <i>Best Supporting Actor in a One Act</i> and{' '}
              <i>Best One-Liner in a One Act</i>.{' '}
            </p>

            <h2>
              Shakespeare Globe Centre New Zealand - Young Shakespeare Company
            </h2>
            <h4>2016</h4>
            <p>
              I had the honour to perform at Shakespeare’s Globe Theatre in
              London while a member of the Shakespeare Globe Centre New Zealand
              Young Shakespeare Company.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
