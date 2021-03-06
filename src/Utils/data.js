import laptopImage from "../Images/laptop.png";
import codeImage from "../Images/code.png";
import careesImage from "../Images/careers.png";

export const Data = [
  {
    name: "Left Container",
    secondaryTitle: "Design system",
    primaryTitle: "How do you handle component spacing in a design system?",
    description: (
      <p>
        Say you've got a <strong>&lt;Card /&gt;</strong> component. It's highly
        likely it shouldn't be butted right up against any other components with
        no spacing around it. That's true for… pretty much every component. So,
        how do you handle component spacing in a design system?
      </p>
    ),
    buttonText: "Read this",
    margin: true,
    image: laptopImage,
    secondSecondaryTitle: "Frontend",
    secondPrimaryTitle:
      "How to Favicon in 2022: Six files that fit most needs ",
    secondDescription:
      "Editor's note: With the arrival of the new year, this post has been slightly modified to reflect the fact that this content is still relevant!",
  },
  {
    flex: "big",
    order: "first",
    name: "Main Container",
    image: codeImage,
    secondSecondaryTitle: "colors",
    secondPrimaryTitle: "A whistle-stop tour of 4 new CSS color features",
    secondDescription: (
      <>
        <p>
          I was just writing in my <span>“What's new in since CSS3?"</span>{" "}
          article about recent and possible future changes to CSS colors. It's
          weirdly a lot. There are just as many or more new and upcoming ways to
          define colors than what we have now. I thought we'd take a really
          quick look.
        </p>{" "}
        <br />
        <p>
          First, a major heads up. This stuff is so complicated. I barely
          understand it. But here are some aspects:
        </p>{" "}
        <br />
        <ul>
          <li>
            Before all this upcoming change, we only had RGB as a color model,
            and everything dealt with that.{" "}
          </li>
          <li>
            We had different “color spaces” that handled it differently (e.g.
            the rgb() function mapped that RGB color model as a cube with linear
            coordinates, the hsl() function mapped that RGB color model as a
            cylinder) but it was all sRGB gamut.
          </li>
          <li>
            With the upcoming changes, we're getting new color models and (!)
            we're getting new functions that map that color model differently.
            So I think it's kind of a double-triple whammy.
          </li>
        </ul>
      </>
    ),
    secondaryTitle: "Subscription",
    primaryTitle: "Stay tuned & get new updates",
    description:
      "If you'd like to know when we release additional results or announce next year's edition, just leave us your email below",
    margin: true,
    buttonText: "Subscribe",
    devider: true,
    visibility: "none",
  },
  {
    name: "Right Container",
    secondaryTitle: "Web & Mobile Development",
    primaryTitle: "Building an adaptive favicon",
    description: (
      <p>
        A custom <span>favicon</span> is a great way to polish a web project. It
        displays on desktop browser tabs, and also inside "save for later"
        readers, other blog posts linking to your site, and more. Traditionally
        this has been done with the .ico file type, but recently browsers have
        allowed use of <span>SVG</span>, a vector format.
      </p>
    ),
    image: careesImage,
    secondSecondaryTitle: "Careers",
    secondPrimaryTitle: "Looking for you!",
    secondDescription: (
      <>
        <p>
          As part of your role, you will have the opportunity to develop from
          scratch, working closely with the product, design, and QA teams to
          deliver the best product. This is a great opportunity to join us and
          grow with other team members.
        </p>
        <br />
        <p>
          Send CV to <span>Jobsil@abra-it.com</span>
        </p>
      </>
    ),
  },
];
