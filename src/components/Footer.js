import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/alex-kennedy" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://nz.linkedin.com/in/alex-kennedy" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto:apkennedy@me.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Photo taken August, 2018 in Marin, California</li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Alex Kennedy</li><li>Template: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
