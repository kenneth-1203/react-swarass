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
        <div className="rounded-3xl p-1">
          <video className="h-dvh object-cover w-full" muted loop autoPlay playsInline>
            <source src="videos/bg-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
