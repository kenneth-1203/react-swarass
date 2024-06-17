import { TextParallaxContent } from "@/components/parallax-scroll";

const items = [
  {
    heading: "Dinner & Get Togethers",
    description: `We understand that organization dinners are a way for various companies to show their appreciation for the clients and staffs, highlight important company annual dinners and just have a good time socializing and being together.`,
    images: [
      "images/dinner/dinner-1.jpg",
      "images/dinner/dinner-2.jpg",
      "images/dinner/dinner-3.jpg",
      "images/dinner/dinner-4.jpg",
      "images/dinner/dinner-5.jpg",
      "images/dinner/dinner-6.jpg",
      "images/dinner/dinner-7.jpg",
      "images/dinner/dinner-8.jpg",
    ],
  },
  {
    heading: "Corporate Launches",
    description: `We have a wide experience in creating events for launches and officiating events for various products, buildings, programs, initiatives etc. This can often be coordinated with your PR or marketing teams to create the necessary exposure or coverage required`,
    images: [
      "images/corporate/corporate-1.jpg",
      "images/corporate/corporate-2.jpg",
      "images/corporate/corporate-3.jpg",
      "images/corporate/corporate-4.jpg",
      "images/corporate/corporate-5.jpg",
      "images/corporate/corporate-6.jpg",
      "images/corporate/corporate-7.jpg",
      "images/corporate/corporate-8.jpg",
    ],
  },
  {
    heading: "Exhibition",
    description: `Create memorable booth designs that make them stand out during their exbitions`,
    images: [
      "images/exhibition/exhibition-1.jpg",
      "images/exhibition/exhibition-2.jpg",
      "images/exhibition/exhibition-3.jpg",
      "images/exhibition/exhibition-4.jpg",
      "images/exhibition/exhibition-5.jpg",
      "images/exhibition/exhibition-6.jpg",
      "images/exhibition/exhibition-7.jpg",
      "images/exhibition/exhibition-8.jpg",
    ],
  },
  {
    heading: "Conference",
    description: `Conference, convention, meeting or seminar - these type of events are commonly held to introduce new products, share knowledge, announce fresh sales goals, provide periodic reviews as well as revealing of new incentive schemes`,
    images: [
      "images/conference/conference-1.jpg",
      "images/conference/conference-2.jpg",
      "images/conference/conference-3.jpg",
      "images/conference/conference-4.jpg",
      "images/conference/conference-5.jpg",
      "images/conference/conference-6.jpg",
    ],
  },
  {
    heading: "Roadshows & Multiple On The Road Campaigns",
    description: `Our consistency in replicating your desired setup for each roadshow in different locations is something we take pride in. We believe that this consistency will help add value to how your brand is perceived and create the awareness your product or service desires.`,
    images: [
      "images/roadshow/roadshow-1.jpg",
      "images/roadshow/roadshow-2.jpg",
      "images/roadshow/roadshow-3.jpg",
      "images/roadshow/roadshow-4.jpg",
    ],
  },
  {
    heading: "Awards & Appreciation Presentation",
    description: `You can expect us to be able to create the perfect ceremony for you, be it for awards, cheque presentation, prize giving and so forth. We can not only help set the stage but also help design the mockups or create dazzling displays to help create the scene and make it memorable.`,
    images: [
      "images/awards/awards-1.jpg",
      "images/awards/awards-2.jpg",
      "images/awards/awards-3.jpg",
      "images/awards/awards-4.jpg",
    ],
  },
];

const Activities = () => {
  return (
    <section id="Activities" className="relative bg-background mb-20">
      <div className="bg-background w-full py-3">
        <h1 className="mx-auto w-fit text-2xl sm:text-4xl font-semibold">
          Activities
          <span className="flex mx-auto h-1.5 w-1/2 bg-primary my-2" />
        </h1>
      </div>
      <div className="">
        {items.map((card, index) => (
          <TextParallaxContent
            images={card.images}
            key={index}
            heading={card.heading}
            subheading={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Activities;
