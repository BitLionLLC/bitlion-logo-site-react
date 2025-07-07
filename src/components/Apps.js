import appStoreLogo from '../assets/app_store.svg'
import plantIdPic from '../assets/plantId.PNG'
import './Apps.css'

const Apps = () => {
    return (
        <div className="apps-container">
            <h1>Our Apps</h1>
            <div className="app-container">
                <a href='https://apps.apple.com/us/app/budget-plant-id/id6747782540' className='app-link'><h1>Budget Plant ID</h1></a>
                <a href='https://apps.apple.com/us/app/budget-plant-id/id6747782540'><img src={plantIdPic} alt="plant id pic" width={300} /></a>
                <a href='https://apps.apple.com/us/app/budget-plant-id/id6747782540'><img src={appStoreLogo} alt="app store logo"  className='app-store-logo'/></a>
                <h2>
                    Identify plants without an expensive subscription!
                </h2>
            </div>
        </div>
    )
}

export default Apps;