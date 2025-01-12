// composant profile affiche prénom et nom si existant sinon un texte entier
// composant profile affiche image de profil si existante sinon rond gris

import './profile.css'

const Profile = ({profile}) => {
        const profileSplit = profile.name.split(" ")
        return(
            <div className="profile-container"> 
                {profileSplit.length > 1 ? <p>{profileSplit[0]}<span>{profileSplit[1]}</span></p> : <p>{profileSplit[0]}</p>}
                {profile.picture ? <img src={profile.picture}/> : <div className="default-profile"></div>}
            </div>
        )
}

export default Profile