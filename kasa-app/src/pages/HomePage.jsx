import Banner from '../components/banner/Banner'
import bannerHome from '../assets/images/banner/banner-home.png';

const HomePage = () => {
    return(
        <main>
            <Banner title="Chez vous," span="partout et ailleurs" img={bannerHome}/> 
        </main>
    )
}

export default HomePage