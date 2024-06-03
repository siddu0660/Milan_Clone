import "../App.css";
import logo from "./Images/gymkhana.png"
const Info = () => {
    return (
        <div className="Info">
            <div className="QuickLinks">
                <span style={{fontWeight:"bolder",fontSize:"24"}}>Quick Links</span><br/><br/>
                <a href="https://iith.ac.in/" className="infoMatter">
                IIT Hyderabad
                </a><br/>
                <a href="https://elan.org.in/" className="infoMatter">
                Elan & nVision
                </a><br/>
                <a href="https://ecell.iith.ac.in/" className="infoMatter">
                Entrepreneurship Cell
                </a><br/>
                <a href="https://nss.iith.ac.in/" className="infoMatter">
                NSS IIT Hyderabad
                </a><br/>

                <a href="https://iith.ac.in/" className="infoMatter">
                Milan 2K25
                </a><br/>
                <a href="https://elan.org.in/" className="infoMatter">
                Hostels IITH
                </a><br/>
                <a href="https://ecell.iith.ac.in/" className="infoMatter">
                EBSB
                </a><br/>
                <a href="https://nss.iith.ac.in/" className="infoMatter">
                SUNSHINE
                </a><br/>
            </div>
            <img src={logo} alt="" id="logo"/>
            <div className="Contact">
                <h2>Contact Us</h2>
                <address>
                    Indian Institute of technology Hyderabad.<br/>
                    NH-65, Sangareddy, Kandi, Telangana 502285<br/>
                </address><br/>
                Direction : <a href="https://maps.app.goo.gl/2E931H9qvLoFNrqWA" id="handle" >Maps</a><br/>
                Phone : (+91) 9111280778<br/>
                Mail us at : <a href="mailto:media_secy@gymkhana.iith.ac.in" id="handle" >Email
                media_secy@gymkhana.iith.ac.in</a><br/>
                <a href="https://www.instagram.com/iit_hyderabad/?hl=en" id="handle">
                    Instagram
                </a><br/>
                <a href="https://www.linkedin.com/company/students-gymkhana-iit-hyderabad/" id="handle">
                    Linkedin
                </a>
                
            </div>
        </div>
    );
}

export default Info