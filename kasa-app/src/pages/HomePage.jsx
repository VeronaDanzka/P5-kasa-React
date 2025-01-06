import Banner from '../components/Banner'
import bannerHome from '../assets/images/banner/banner-home.png';

const HomePage = () => {
    return(
        <main className="home-container">
            <Banner title="Chez vous, partout et ailleurs" img={bannerHome}/> 
        </main>
    )
}

export default HomePage