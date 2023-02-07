import HomeCard from "./Components/HomeCard"
import Latest from "./Components/Latest"
import LatestStories from "./Components/LatestStories"
import MiddleCard from "./Components/MiddleCard"
import { useContext } from "react"
import { Context } from "./Routes"
function Home(){
    let val=useContext(Context)
    return (
        <>
            <h2 className="h1" style={{marginTop:'20px'}}>Tranding Box</h2>
            <HomeCard/>
            <MiddleCard val={val.FoodData} />
            <Latest val={val.BollywoodData} holly={val.FitnessData}/>
            <LatestStories/>
        </>
    )
}
export default Home