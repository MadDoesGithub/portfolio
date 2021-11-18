import React from "react";

function Card() {
  return (
    <div
      data-theme="dracula"
      class="hero min-h-screen bg-base-200 rounded-box"
      section="home"
    >
      <div class="flex-col hero-content lg:flex-row-reverse">
        <img
          src="https://cdn.discordapp.com/avatars/445934419686064128/73f3faf560b1f24ee78d1e140affad4f.png?size=1024"
          class="max-w-xs rounded-lg shadow-2xl mask mask-squircle"
        />
        <div>
          <h1 class="mb-5 text-4xl font-semibold">
            👋Hey, I'm <span class="font-bold">Mad</span>
          </h1>
          <p class="mb-5">
            I'm Imad, but I use the nickname "Mad" for my online profiles. I'm a
            mediocre developer residing in Saudi Arabia, and working as an
            executive at{" "}
            <a
              class="link link-hover font-semibold"
              href="https://madhosting.tech"
            >
              Mad Hosting.
            </a>
          </p>
          {/* <p class="mb-5">
            <a>
              To list a few of my specialties, I do node.js, React Native, web
              development, system administration, UI Design, and visual effects.
            </a>
          </p> */}
          <a
            class="btn btn-md md:btn-md lg:btn-md xl:btn-md btn btn-primary"
            href="#contact-modal"
          >
            Contact
          </a>
          <p class="mb-2" />
          <a
            class="btn btn-md md:btn-md lg:btn-md xl:btn-md btn-outline btn-primary"
            href="#about-me"
          >
            About Me
          </a>
          <div id="contact-modal" class="modal">
            <div class="modal-box">
              <p class="mb-5 font-bold">Don't be shy, let's chat.</p>
              <p class="mb-5"></p>
              <p class="mb-5 mockup-code">
                ㅤemail:{" "}
                <a href="mailto:imad@madhosting.tech">
                  <b>imad@madhosting.tech</b>
                </a>
              </p>
              <p class="mb-5 mockup-code">
                ㅤdiscord: <b>Mad#7010</b>
              </p>
              <p class="mb-5 mockup-code">
                ㅤgithub:{" "}
                <a href="github.com/MadDoesGithub">
                  <b>github.com/MadDoesGithub</b>
                </a>
              </p>
              <div class="modal-action">
                <a href="#home" class="btn btn-primary">
                  Close
                </a>
              </div>
            </div>
          </div>
          <div id="secret" class="modal">
            <div class="modal-box">
              <p class="mb-5"><a class="font-semibold link-accent bg-base-200">moonlight</a> </p>
              <p class="mb=5"><a class="font-semibold link-accent bg-base-200"></a>
tvvuspnoa, fvb'yl vby tvvuspnoa
aol spnoa zopulz puav tf lflz
<br /><br />
P kpku'a mhss puav svcl dpao aol tvvu,
P dhsrlk puav svcl dpao aol tvvu,
dpao tf lflz dpkl vwlu.
aol spnoa zopulz puav vby lflz.
<br /> <br />
P svcl fvb sprl aol tvvu,
zv ilhbapmbs, fla zv tbjo opkklu.
iba, aol jyhalz dhpaz mvy iylhrpun
aol spnoa zopulz puav vby lflz.
<br /> <br />
aolyl hyl uv dvykz av klzjypil ovd tbjo dl hss svcl fvb
dl hwwyljphal fvb tvyl aohu fvb aopur fvb kv.
huk aol spnoa zopulz puav vby lflz..
<br /><br />
yltltily, dl'yl fvby myplukz
huf aptl fvb'yl kvdu, dl'ss il hyvbuk
huk aol spnoa zopulz puav vby lflz.
<br /><br />
tvvuspnoa, fvb'yl vby tvvuspnoa,
aol spnoa zopulz puav tf lflz.
 </p>
 <p class="mb-5"></p>
 <p class="md-5 font-semibold link-secondary">je t'aime tellement au clair de lune.</p>
 <p class="mb-5 font-medium">anyone who solves this will get a prize.</p>
              <div class="modal-action">
                <a href="#home" class="btn btn-primary">
                  Close
                </a>
              </div>
            </div>
          </div>
          <div id="about-me" class="modal">
            <div class="modal-box">
              <h2 class="mb-5 font-bold">About Me</h2>
              <p class="mb-5">
                Hey, I'm Mad - a mediocre developer residing in Saudi Arabia. I
                use Node.js, React.js, TailwindCSS, and a bit of Java for my
                projects. I am always trying to improve and practice, which has
                led me to know the coding knowledge I know today.
              </p>
              <p class="mb-5"></p>
              <p class="mb-5">
                I own a server providing business, Mad Hosting, and have been
                providing these services for the past 7 months. I plan to stick
                for the long run, and run this business as long as I can, and
                hope for the best 🤞.
              </p>

              <h2 class="mb-5 font-bold">Skills / Technologies I'm Learning</h2>
              <ul class="mb-5">
                <li>Node.js</li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java</li>
                <li>TailwindCSS</li>
                <li>Git</li>
                <li>Linux</li>
                <li>Docker</li>
                <li>Microsoft Azure</li>
              </ul>
              <a
                class="mb-5 link link-hover link-accent"
                href="https://github.com/MadDoesGithub/portfolio"
                s
              >
                This site is open-source and built with 🖤
              </a>
              <div class="modal-action">
                <a href="#home" class="btn btn-primary">
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
