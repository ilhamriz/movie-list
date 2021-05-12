import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../atoms/Arrow";
import Card from "../molecules/Card";

function Films({title, films}) {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 1000,
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <Arrow />,
    prevArrow: <Arrow prev={true} />,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 817,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 544,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 273,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      <h2>{title}</h2>
      <section>
        <Slider {...settings}>
          {films.map((film, idx) => 
            <Card key={idx} data={film} constant={true} />
          )}
        </Slider>
      </section>
    </div>
  )
}

export default Films
