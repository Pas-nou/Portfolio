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
        <section className="background-homepage">

            {/* * Smoke */}
            <SmokeAnimation className="smoke-homepage" />

            {/* * Mug */}
            <section className="mug-homepage" />

            {/* * Computer */}
            <section className="computer-homepage">

                <section className="case-computer-homepage">
                    <section className="base-case-computer-homepage" />
                    <section className="handle-case-computer-homepage" />
                    <section className="rightpedestal-case-computer-homepage" />
                    <section className="leftpedestal-case-computer-homepage" />
                </section>

                <section className="display-computer-homepage">
                    <section className="outerframe-display-computer-homepage" />
                    <section className="innerframe-display-computer-homepage" />
                    <section className="display-display-computer-homepage" />
                    <section className="underd-display-computer-homepage" />
                </section>

                <section className="screen-computer-homepage">
                    <section className="informations-screen-computer-homepage">
                        <section className="notch-screen-computer-homepage" />
                        {/* <h1>      Coucou</h1> */}
                    </section>
                </section>
            </section>

            {/* DESK */}
            <section className="border-desk-homepage" />
            <section className="desk-homepage" />

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