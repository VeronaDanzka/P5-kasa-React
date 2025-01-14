import Banner from '../components/banner/Banner'
import bannerAbout from '../assets/images/banner/banner-about.png'
import about from '../data/about.json'
import Collapse from '../components/collapse/Collapse'

const AboutPage = () => {
    return(
        <main className="about-container"> 
            <Banner img={bannerAbout}/>
            <div className="about-collapse">
                {about.map(aboutElement => (
                    <Collapse key={aboutElement.id} title={aboutElement.title} elements={aboutElement.text}/>
                ))} 
            </div>
        </main>
    )
}

export default AboutPage