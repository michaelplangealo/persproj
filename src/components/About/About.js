import React from "react";
import "./About.css";
import purpp from "./purpp.mp4";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <div className="about-title-bar">
        <span>
          <a className="lochome">
            <Link to="/"> h o m e .</Link>
          </a>
          /
          <span className="loc">a b o u t .</span>
        </span>
        <hr className="title-line" />
      </div>
      <div className="about-container">
        <div className="about-text-box">
          <p className="actual-about">
            <div class="scrolling">
              <div class="chevron" />
              <div class="chevron" />
              <div class="chevron" />
              <span class="text">Scroll down</span>
            </div>
            the portuguese man o' war is a marine hydrozoan of the family
            Physaliidae found in the Atlantic, Indian, and Pacific Oceans. Its
            venomous long tentacles blah blah blah.<br />
            <br />
            the portuguese man o' war is in the same family as jellyfish. they
            float, look pretty, and sting. what differentiates them from their
            gelatinous breatheren is the fact they are actually composed of four
            different several different multicellular organisms which are
            physiologically integrated, as opposed to being a single
            multicellular organism. it's many, connected together, to create
            one.
            <br />
            much like our namesake, at man of war, we believe an outfit to be
            the man of war of the human body. an outfit is composed of several
            different pieces, but they all come together to create one
            functional image.
            <br />
            and just like a man of war, reactjs is an architectural program,
            utilizing many different components to make one working app.
            <br />
            jellyfish...clothing...making apps...pretty much all the same.
            <br />publication to be made and presented with the actual content
            still not being ready. Think of a news blog that's filled with
            content hourly on the day of going live. However, reviewers tend to
            be distracted by comprehensible content, say, a random text copied
            from a newspaper or the internet. The are likely to focus on the
            text, disregarding the layout and its elements. Besides, random text
            risks to be unintendedly humorous or offensive, an unacceptable risk
            in corporate environments. Lorem ipsum and its many variants have
            been employed since the early 1960ies, and quite likely since the
            sixteenth century. Lorem Ipsum: common examples layout based on
            Lorem Ipsum Most of its text is made up from sections 1.10.32–3 of
            Cicero's De finibus bonorum et malorum (On the Boundaries of Goods
            and Evils; finibus may also be translated as purposes). Neque porro
            quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit is the first known version ("Neither is there anyone
            who loves grief itself since it is grief and thus wants to obtain
            it"). It was found by Richard McClintock, a philologist, director of
            publications at Hampden-Sydney College in Virginia; he searched for
            citings of consectetur in classical Latin literature, a term of
            remarkably low frequency in that literary corpus. Cicero famously
            orated against his political opponent Lucius Sergius Catilina.
            Occasionally the first Oration against Catiline is taken for type
            specimens: Quo usque tandem abutere, Catilina, patientia nostra?
            Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline,
            will you abuse our patience? And for how long will that madness of
            yours mock us?) Cicero's version of Liber Primus (first Book),
            sections 1.10.32–3 (fragments included in most Lorem Ipsum variants
            in red): Cicero writing letters; from an early edition by Hieronymus
            Scotus Sed ut perspiciatis, unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam
            eaque ipsa, quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
            voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos, qui ratione voluptatem sequi nesciunt, neque
            porro quisquam est, qui dolorem ipsum, quia dolor sit amet,
            consectetur, adipisci[ng] velit, sed quia non numquam [do] eius modi
            tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit, qui in ea
            voluptate velit esse, quam nihil molestiae consequatur, vel illum,
            qui dolorem eum fugiat, quo voluptas nulla pariatur? Lorem Ipsum:
            translation The Latin scholar H. Rackham translated the above in
            1914: De Finibus Bonorum Et Malorum But I must explain to you how
            all this mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system, and
            expound the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself, because it
            is pain, but occasionally circumstances occur in which toil and pain
            can procure him some great pleasure. To take a trivial example,
            which of us ever undertakes laborious physical exercise, except to
            obtain some advantage from it? But who has any right to find fault
            with a man who chooses to enjoy a pleasure that has no annoying
            consequences, or one who avoids a pain that produces no resultant
            pleasure? On the other hand, we denounce with righteous indignation
            and dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoi
          </p>
        </div>
        <div className="next2u">
          <video preload="auto" autoPlay loop id="purpp">
            <source src={purpp} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
export default About;
