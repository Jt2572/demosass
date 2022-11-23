import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import itemsCarousel from '../assets/itemscarousel';


const Carousel = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={37}
            totalSlides={itemsCarousel.length}
            isPlaying={true}
            className='carousel'
        >
            <ButtonBack className='carousel__buttons'>
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">  <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293" /> </svg>
            </ButtonBack>

            <Slider>
                {itemsCarousel.map(ic =>
                    <Slide index={ic.index}>
                        <img src={ic.image} className="carousel__slide" alt='img' />
                    </Slide>
                )}
            </Slider>

            <ButtonNext className='carousel__buttons  carousel__buttons__left'>
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">                   <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" /> </svg>
            </ButtonNext>

            <div className='carousel__dots__cont'>
                {itemsCarousel.map(i =>
                    <Dot className='carousel__dots' slide={i.index}>
                        <span className='carousel__dots__dot'> <br /> </span>
                    </Dot>
                )}
            </div>

            <h3>THE BEST FOR ANY SEASON</h3>

        </CarouselProvider>
    )
}
export default Carousel;

