import image1 from "../images/saveales-1.png";
import image2 from "../images/saveales-2.png";
import image3 from "../images/saveales-3.png";
import image4 from "../images/saveales-4.png";
import image5 from "../images/saveales-5.png";
import image6 from "../images/saveales-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

export default function PortfolioSaveTheAles() {
  return (
    <>
      <article className="save-the-ales">
        <Swiper navigation={true}>
          <SwiperSlide>
            <img src={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image6} />
          </SwiperSlide>
        </Swiper>

        <p className="save-the-ales__text">
          This is an online food ordering app made for the bar
          <b className="save-the-ales__title"> Save The Ales.</b> <br />{" "}
          Realized at the end of IT-Academy course
        </p>
        <a
          className="save-the-ales__btn"
          target="_blank"
          href="https://github.com/AselAkmatova/SaveTheAles-2021"
        >
          View on GitHub
        </a>
      </article>
    </>
  );
}
