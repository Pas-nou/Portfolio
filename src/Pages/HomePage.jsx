import SmokeAnimation from "../Components/SmokeAnimation";
import BodyAnimation from "../Components/BodyAnimation";
import TailAnimation from "../Components/TailAnimation";
import NoseAnimation from "../Components/NoseAnimation";
import EyesAnimation from "../Components/EyesAnimation";
import MustacheAnimation from "../Components/MustacheAnimation";
import EarRightAnimation from "../Components/EarRightAnimation";
import EarLeftAnimation from "../Components/EarLeftAnimation";

function HomePage() {

    return (
        <section className="homepage-container">

            {/* * Smoke */}
            <SmokeAnimation className="smoke-homepage" />

            {/* * Mug */}
            <img className="mug-homepage" src="../src/assets/images/MUG.svg" alt="" />

            {/* * Computer */}
            <section className="computer-homepage">
                <h1 className="homepage-title">
                    <span className="homepage-font-1">Pascal Renou</span>
                    <span className="homepage-font-2">|</span>
                    <span className="homepage-font-3">Portfolio</span>
                </h1>
                <img className="computer-homepage-image" src="../src/assets/images/MACBOOK_PRO.svg" alt="Computer" />
            </section>

            {/* DESK */}
            <img className="desk-homepage" src="../src/assets/images/DESK.svg" alt="desk" />

            {/* * Cat */}
            <section className="cat-homepage">
                <TailAnimation className="tail-cat-homepage" />
                <BodyAnimation className="body-cat-homepage" />
                <EarRightAnimation className="ear-right-cat-homepage" />
                <EarLeftAnimation className="ear-left-cat-homepage" />
                <section className="head-cat-homepage" />
                <MustacheAnimation className="mustaches-cat-homepage" />
                <EyesAnimation className="eyes-cat-homepage" />
                <NoseAnimation className="nose-cat-homepage" />
            </section>

            {/* * Full screen */}
            <section className="background-container">
                <section className="particles-homepage" />
                <section className="noise-homepage" />
            </section>


        </section>
    )
}

export default HomePage;