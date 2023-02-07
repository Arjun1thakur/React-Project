
import '../style/Cards.css'
import Addvertise from './Addvertise'
import TopPost from './TopPost'
import Slider from './Slider'
import LatestArc from './LatestArc'
import { Data } from '../data'

function Latest(data){
    let sliderimg=Data
    const random = Math.floor(Math.random() * sliderimg.length);
    return (
        <>
            <section>
            <h1 className="h1">Latest Bollywood Movies</h1>
            <div className="LatestArcticle flex g">
                <div className="left">
                    <LatestArc val={data.val}/>
                    <Slider val={sliderimg[random]}/>
                </div>
                <div className="right">
                    <Addvertise />
                    <TopPost val={data.holly} />
                </div>
            </div>
            </section>
        </>
    )
}
export default Latest