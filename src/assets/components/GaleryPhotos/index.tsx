import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardPhoto } from "./style";
import { useEffect, useState } from "react";
import { SlideCenter } from "../Galery/styles";

function GaleryPhotos() {
  const [numberSlide, setNumberSlide] = useState(5);
  const listPhotos = [
    { url: "/image/foto1.jpg" },
    { url: "/image/foto2.jpg" },
    { url: "/image/foto3.jpg" },
    { url: "/image/foto4.jpg" },
    { url: "/image/foto5.jpg" },
    { url: "/image/foto6.jpg" },
    { url: "/image/foto8.jpg" },
  ];

  useEffect(() => {
    function SlidesNumber() {
      if (window.innerWidth < 720) {
        return setNumberSlide(1);
      } else {
        return setNumberSlide(5);
      }
    }

    SlidesNumber();

    window.addEventListener("resize", SlidesNumber);

    return () => window.removeEventListener("resize", SlidesNumber);
  }, []);

  return (
    <>
      <Swiper
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          disableOnInteraction: false,
        }}
        speed={1000}
        freeMode={true}
        slidesPerView={numberSlide}
        pagination={{ clickable: true }}
        spaceBetween={5}
        loop={true}
      >
        {listPhotos.map((item) => (
          <SwiperSlide>
            <SlideCenter>
              <CardPhoto $card={item.url} />
            </SlideCenter>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default GaleryPhotos;
