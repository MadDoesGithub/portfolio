import React from "react";


function Card() {
  return (
<div data-theme="dracula" class="hero min-h-screen bg-base-200 rounded-box">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="https://cdn.discordapp.com/avatars/445934419686064128/73f3faf560b1f24ee78d1e140affad4f.png?size=1024" class="max-w-xs rounded-lg shadow-2xl mask mask-squircle"/> 
    <div>
      <h1 class="mb-5 text-4xl font-semibold">
            👋Hey, I'm <span class="font-bold">Mad</span>
          </h1> 
      <p class="mb-5">
      I'm Imad, but I use the nickname "Mad" for my online profiles. I'm a mediocre developer residing in Saudi Arabia, and working as an executive at <a class="link link-hover font-semibold" href="https://madhosting.tech">Mad Hosting.</a>
          </p> 
      <a class="btn btn-md md:btn-md lg:btn-md xl:btn-md btn-outline btn-primary" href="/contact">Contact</a>
    </div>
  </div>
</div>
  );
}

export default Card;