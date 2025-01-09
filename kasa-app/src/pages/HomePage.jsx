import Banner from '../components/banner/Banner'
import bannerHome from '../assets/images/banner/banner-home.png'
import logements from '../data/logements.json'
import Cards from '../components/cards/Cards'

const HomePage = () => {
    return(
        <main>
            <Banner title="Chez vous," span="partout et ailleurs" img={bannerHome}/>
            <div className="cards-container">
                {logements.map((logement) => (
                        <Cards key={logement.id} id={logement.id} cover={logement.cover} title={logement.title}/>
                    )
                )} 
            </div> 
        </main>
    )
}

export default HomePage