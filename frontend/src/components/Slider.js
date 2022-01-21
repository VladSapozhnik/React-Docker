import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderItem from "./SliderItem";

function Slider () {
    const styles = {
        slider: {
            display: 'flex',
            justifyContent: 'center'
        }
    }

    const settings = {
        width: '600px',
        autoPlay: true,
        interval: 10000,
        showThumbs: false,
        infiniteLoop: true,
        showStatus: false,
        dynamicHeight: false,
    };

    const array = [
        {
            title: 'Legend 1',
            img: 'images/1.jpg',
        },
        {
            title: 'Legend 2',
            img: 'images/1.jpg',
        },
        {
            title: 'Legend 3',
            img: 'images/1.jpg',
        },
        {
            title: 'Legend 4',
            img: 'images/1.jpg',
        }
    ]



    // const [test, setTest] = useState([])
    // useEffect(() => {
    //     axios.get('./static/slider.json').then(response => {
    //        setTest(response.data)
    //     })
    // }, [])
    //
    // console.log(test, test)


    return (
        <div style={styles.slider}>
            <Carousel
                {...settings}
                // width="600px"
                // autoPlay={true}
                // interval={10000}
                // showThumbs={false}
                // infiniteLoop={true}
                // showStatus={false}
                // dynamicHeight={false}
            >
                {/*<div>*/}
                {/*    <img src="images/1.jpg" />*/}
                {/*    <p className="legend">Legend 1</p>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src="images/1.jpg" />*/}
                {/*    <p className="legend">Legend 2</p>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src="images/1.jpg" />*/}
                {/*    <p className="legend">Legend 3</p>*/}
                {/*</div>*/}
                {array.map((item, index) => {
                    return <SliderItem title={item.title} images={item.img} key={index} />
                })}
            </Carousel>
        </div>
    )
}

export default Slider