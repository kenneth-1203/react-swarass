import Carousel from "@/components/carousel";

const Gallery = () => {
  return (
    <section
      id={"Gallery"}
      className="flex flex-col py-12 sm:py-20 bg-background"
    >
      <div className="mb-20">
        <h1 className="mx-auto w-fit text-2xl sm:text-4xl font-semibold">
          Gallery
          <span className="flex mx-auto h-1.5 w-1/2 bg-primary my-2" />
        </h1>
        <Carousel
          images={[
            "images/carousel-1.png",
            "images/carousel-2.png",
            "images/carousel-3.png",
            "images/carousel-4.png",
            "images/carousel-5.png",
            "images/carousel-6.png",
            "images/carousel-7.png",
            "images/carousel-8.png",
            "images/carousel-9.png",
            "images/carousel-10.png",
          ]}
        />
      </div>
    </section>
  );
};

export default Gallery;
