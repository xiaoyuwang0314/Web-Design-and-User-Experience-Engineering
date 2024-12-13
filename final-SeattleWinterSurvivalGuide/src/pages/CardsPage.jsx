import './CardsPage.css'
import climbing from '../assets/images/climbing.jpg'
import catCafe from '../assets/images/cat-cafe.jpg'
import museum from '../assets/images/museum.jpg'
import shootingRange from '../assets/images/shooting-range.jpg'
import iceSkating from '../assets/images/ice-skating.jpg'
import craft from '../assets/images/craft.jpg'

const CardsPage = () => {
  return (
    <div className="cards-page">
      <h1 className="page-title">Indoor Activities</h1>
      <div className="cards-grid">
        <div className="card">
          <img src={climbing} alt="A climber with safety harness scaling an indoor climbing wall" />
          <h2>Indoor Rock Climbing</h2>
          <p>Challenge yourself on indoor climbing walls, perfect for rainy days. Check out these popular locations:</p>
          <ul className="card-list">
            <li><a href="https://seattleboulderingproject.com/" target="_blank" rel="noopener noreferrer">Seattle Bouldering Project</a></li>
            <li><a href="https://edgeworksclimbing.com/" target="_blank" rel="noopener noreferrer">Edgeworks Climbing</a></li>
          </ul>
        </div>

        <div className="card">
          <img src={catCafe} alt="An Abyssinian cat stretching lazily in a cat cafe" />
          <h2>Cat Cafés</h2>
          <p>Enjoy hot beverages while spending time with adorable cats. Visit our recommended cafes:</p>
          <ul className="card-list">
            <li><a href="https://www.seattlemeowtropolitan.com/" target="_blank" rel="noopener noreferrer">Seattle Meowtropolitan</a></li>
            <li><a href="https://nekocatcafe.com/" target="_blank" rel="noopener noreferrer">Neko Cat Cafe</a></li>
          </ul>
        </div>

        <div className="card">
          <img src={museum} alt="A wave-shaped metallic building exterior of the museum" />
          <h2>Museum Exploration</h2>
          <p>Discover art, culture, and innovation at Seattle's finest museums. Explore these popular venues:</p>
          <ul className="card-list">
            <li><a href="https://www.mopop.org/" target="_blank" rel="noopener noreferrer">Museum of Pop Culture</a></li>
            <li><a href="https://www.chihulygardenandglass.com/" target="_blank" rel="noopener noreferrer">Chihuly Garden and Glass</a></li>
          </ul>
        </div>

        <div className="card">
          <img src={shootingRange} alt="An automatic rifle and two boxes of ammunition placed on a shooting range table" />
          <h2>Indoor Shooting Range</h2>
          <p>Experience target shooting in a safe, controlled environment. Visit these professional ranges:</p>
          <ul className="card-list">
            <li><a href="https://www.bellevueindoorrange.com/" target="_blank" rel="noopener noreferrer">Bellevue Indoor Range</a></li>
            <li><a href="https://www.westcoastarmory.com/" target="_blank" rel="noopener noreferrer">West Coast Armory</a></li>
          </ul>
        </div>

        <div className="card">
          <img src={iceSkating} alt="Close-up shot of ice skater's feet on the rink" />
          <h2>Ice Skating</h2>
          <p>Enjoy year-round ice skating fun, perfect for all skill levels. Find a rink near you:</p>
          <ul className="card-list">
            <li><a href="https://www.krakencommunityiceplex.com/" target="_blank" rel="noopener noreferrer">Kraken Community Iceplex</a></li>
            <li><a href="https://lynnwoodicecenter.com/" target="_blank" rel="noopener noreferrer">Lynnwood Ice Center</a></li>
          </ul>
        </div>

        <div className="card">
          <img src={craft} alt="Craft supplies including books, flowers, and photographs arranged on a workshop table" />
          <h2>Craft Workshops</h2>
          <p>Express your creativity through various craft activities. Join workshops at these locations:</p>
          <ul className="card-list">
            <li><a href="https://www.potterynorthwest.org/" target="_blank" rel="noopener noreferrer">Pottery Northwest</a></li>
            <li><a href="https://seattlerecreative.org/" target="_blank" rel="noopener noreferrer">Seattle Recreative</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsPage
