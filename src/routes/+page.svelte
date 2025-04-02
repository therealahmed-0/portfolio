<script lang="ts">
  import Navbar from "$lib/Navbar.svelte";
  import { TypeWriter } from 'svelte-typewrite';
  import { autoHash } from '$lib/autoHash';
  import Footer from "$lib/Footer.svelte"

  let quotes = [
      "The world doesn't care about your excuses. All that matters is the result.",
      "Winners don't watch the clock. They work until the job is done.",
      "If you want extraordinary results, you have to put in extraordinary efforts.",
      "If failure makes you stronger, then you can never lose.",
      "Discipline is not a punishment, it's a practice of self-control and mastery.",
      "Success comes to those who are willing to risk for it.",
      "The amount of stress is the level of success you can enjoy.",
      "Do the impossible, and you will never doubt yourself again.",
      "The only thing holding you back is your own mindset.",
      "You must put in the effort to live the life you want.",
      "Success isn't about what you accomplish, it's about what you inspire others to do.",
      "Fear is the enemy of success; conquer it and you will conquer anything.",
      "The struggle you are enduring today is developing the strength you need for tomorrow."
  ];

  let selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

  function changeQuote() {
      let newQuote;
      do {
          newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      } while (newQuote === selectedQuote);
      selectedQuote = newQuote;
  }
</script>
<head>
  <style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.star {
    position: absolute;
    transform: rotateZ(45deg) translateX(-50%);
    top: 0;
    right: 0;
    left: initial;
}

.span {
    display: block;
    position: relative;
    background-image: linear-gradient(to right, #fff, transparent);
    filter: drop-shadow(0 0 6px #000);
    animation: shooting linear infinite;
    opacity: 0;
}

.span::before {
    content: "";
    background: linear-gradient(90deg,#fff,#0000);
    width: 300px;
    height: 1px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.star:nth-child(2) {
    right: 100px;
}
.star:nth-child(2) span {
    animation-delay: 1s;
}

.star:nth-child(3) {
    right: 450px;
}
.star:nth-child(3) span {
    animation-delay: 2s;
}

.star:nth-child(4) {
    right: -150px;
}
.star:nth-child(4) span {
    animation-delay: 3s;
}

.star:nth-child(5) {
    right: -350px;
}
.star:nth-child(5) span {
    animation-delay: 2s;
}

.star:nth-child(6) {
    right: 550px;
}
.star:nth-child(6) span {
    animation-delay: 4s;
}

.star:nth-child(7) {
    right: 50px;
}
.star:nth-child(7) span {
    animation-delay: 4s;
}

.star:nth-child(8) {
    right: 750px;
}
.star:nth-child(8) span {
    animation-delay: 5s;
}

.star:nth-child(9) {
    right: 250px;
}
.star:nth-child(9) span {
    animation-delay: 4s;
}

.star:nth-child(10) {
    right: 100px;
}
.star:nth-child(10) span {
    animation-delay: 1s;
}

@keyframes shooting {
    0% {
        transform: translateY(-200px) rotate(-90deg);
        opacity: 1;
    }
    100% {
        transform: translateY(600px) rotate(-90deg);
        opacity: 0;
    }
}
</style>
</head>
<div class="fixed top-0 left-0 w-full z-50">
  <Navbar fill={"#ff0000"}/>
</div>

<main>
  <div class="relative h-screen w-full overflow-hidden bg-gray-950">
    <!-- Shooting stars container -->
    <div class="absolute inset-0 pointer-events-none">
      <div>
        <div class="star"><span class="span"></span></div>
        <div class="star"><span class="span"></span></div>
        <div class="star"><span class="span"></span></div>
        <div class="star"><span class="span"></span></div>
        <div class="star"><span class="span"></span></div>
        <div class="star"><span class="span"></span></div>
        <div class="star"><span class="span"></span></div>
        <div class="star"><span class="span"></span></div>
        <div class="star"><span class="span"></span></div>
        <div class="star"><span class="span"></span></div>
      </div>
  </div>
    <!-- Main content -->
    <div class="flex flex-col h-screen justify-center items-center text-center relative z-10">
        <span class="bg-gradient-to-b from-red-500 to-red-900 bg-clip-text text-transparent text-xl md:text-2xl lg:text-5xl font-bold p-5">
            <TypeWriter 
                texts={[`"${selectedQuote}"`]} 
                ondeleteend={changeQuote}
            />
        </span>
        <div class="p-5">
            <span class="text-gray-600 text-[12px] md:text-[24px] lg:text-lg">
                Scroll down to learn more
            </span>
        </div>
    </div>
</div>

<style>
    .star {
        position: absolute;
        transform: rotateZ(45deg);
        top: -50px;
    }

    .star span {
        display: block;
        position: relative;
        background-image: linear-gradient(to right, #fff, transparent);
        filter: drop-shadow(0 0 6px #000);
        animation: shooting 5s linear infinite;
        opacity: 0;
        width: 140px;
        height: 2px;
    }

    .star span::before {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0px;
        border-radius: 100%;
        background-color: #fff;
        box-shadow: 0 0 6px #fff;
        width: 6px;
        height: 6px;
    }

    @keyframes shooting {
        0% {
            transform: translateY(-100px) translateX(0) rotate(-90deg) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        100% {
            transform: translateY(800px) translateX(100px) rotate(-90deg) scale(1.2);
            opacity: 0;
        }
    }
</style>

  <section id="About"  use:autoHash class="flex flex-col items-center justify-center h-screen pt-20 md:pt-28 lg:pt-34 px-6 md:px-12 text-center">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-zinc-700 text-transparent bg-clip-text">About Me</h1>
    <p class="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mt-4 md:mt-6">
        Hey, I'm <span class="text-red-400 font-semibold">Ahmed</span>, a passionate 
        <span class="text-blue-400">computer science enthusiast</span> specializing in 
        <span class="text-green-400">full-stack development, system design, and problem-solving</span>. 
        Currently, I'm exploring <span class="text-yellow-400">physical engineering and low-level programming</span> to build scalable, real-world solutions.
    </p>
    <p class="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mt-4">
        Beyond coding, I'm dedicated to <span class="text-purple-400">mathematics and physics</span>, pushing my limits through academic challenges. 
        I also train in <span class="text-orange-400">martial arts</span>, valuing discipline, resilience, and continuous growth.
    </p>
    <p class="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mt-4">
        My goal? To <span class="text-pink-400">create impactful projects</span>, explore the 
        <span class="text-teal-400">frontiers of technology</span>, and contribute to the global tech community. 🚀
    </p>
</section>
  <br>
  <br>
  <br>
  <div id="TechStack" class="flex justify-center items-center text-3xl md:text-4xl lg:text-5xl bg-gradient-to-b from-red-500 to-red-950 bg-clip-text text-transparent font-semibold">
    Tech Stack
  </div>
  <div class="w-full h-screen md:h-max lg:h-max bg-gray-950 text-white flex flex-col md:flex-row justify-center items-center gap-8 p-4">
    <div class="flex flex-col justify-center items-center text-center p-4 w-full">
      <a href="https://svelte.dev" aria-label="svelte">
        <svg class="w-24 h-24 aspect-square" viewBox="0 0 98.1 118" xmlns="http://www.w3.org/2000/svg">
          <path d="M91.8 15.6C80.9-0.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-0.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9 0.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3 0.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-0.4-18.2-5.7-25.5" fill="#ff3e00"/>
          <path d="M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3 0.2-0.9 0.4-1.7 0.6-2.6l0.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 0.3-0.1 1c-0.1 1.4 0.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7 0.6-0.2 1.2-0.4 1.7-0.7L65.5 72c1.4-0.9 2.3-2.2 2.6-3.8 0.3-1.6-0.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-0.6 0.2-1.2 0.4-1.7 0.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3 0.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-0.2 0.9-0.4 1.7-0.7 2.6l-0.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3 0.1-1c0.1-1.4-0.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-0.6 0.2-1.2 0.4-1.7 0.7L32.4 46.1c-1.4 0.9-2.3 2.2-2.6 3.8s0.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6 0.6-0.2 1.2-0.4 1.7-0.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-0.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5" fill="#ffffff"/>
        </svg>
      </a>
      <span class="text-center font-semibold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#ff3e00] to-orange-900 bg-clip-text text-transparent">
        SvelteKit
      </span>
    </div>
    <div class="flex flex-col justify-center items-center text-center p-4 w-full">
      <a href="https://firebase.google.com" aria-label="firebase">
        <svg class="w-24 h-24 aspect-square" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M213.918 560.499C237.166 569.856 262.387 575.408 288.87 576.333C324.71 577.585 358.792 570.175 389.261 556.099C352.724 541.744 319.634 520.751 291.392 494.651C273.086 523.961 246.01 547.113 213.918 560.499Z" fill="#FF9100"/>
          <path d="M291.389 494.66C226.923 435.038 187.815 348.743 191.12 254.092C191.228 251.019 191.39 247.947 191.58 244.876C180.034 241.89 167.98 240.068 155.576 239.635C137.821 239.015 120.626 241.217 104.393 245.788C87.1838 275.933 76.7989 310.521 75.5051 347.569C72.1663 443.18 130.027 526.723 213.914 560.508C246.007 547.121 273.082 523.998 291.389 494.66Z" fill="#FFC400"/>
          <path d="M291.39 494.657C306.378 470.671 315.465 442.551 316.523 412.254C319.306 332.559 265.731 264.003 191.581 244.873C191.391 247.944 191.229 251.016 191.121 254.089C187.816 348.74 226.924 435.035 291.39 494.657Z" fill="#FF9100"/>
          <path d="M308.231 20.8584C266 54.6908 232.652 99.302 212.475 150.693C200.924 180.129 193.665 211.748 191.546 244.893C265.696 264.023 319.272 332.579 316.489 412.273C315.431 442.57 306.317 470.663 291.355 494.677C319.595 520.804 352.686 541.77 389.223 556.124C462.56 522.224 514.593 449.278 517.606 362.997C519.558 307.096 498.08 257.273 467.731 215.219C435.68 170.742 308.231 20.8584 308.231 20.8584Z" fill="#DD2C00"/>
        </svg>
      </a>
      <span class="text-center font-semibold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#FF9100] via-[#FFC400] via-[#FF9100] to-[#DD2C00] bg-clip-text text-transparent">
        Firebase
      </span>
    </div>
    <div class="flex flex-col justify-center items-center text-center p-4 w-full">
      <a href="https://tailwindcss.com" aria-label="tailwind">
        <svg class="w-24 h-24 aspect-square" viewBox="0 0 256 154" xmlns="http://www.w3.org/2000/svg">
          <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="#38B2AC"/>
        </svg>
      </a>
      <span class="text-center font-semibold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#38B2AC] to-cyan-700 bg-clip-text text-transparent">
        TailwindCSS
      </span>
    </div>
  </div>
  <div use:autoHash class="h-screen flex flex-col pt-22 md:pt-30 lg:pt-36 px-6 md:px-12 text-center">
    <div class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-slate-800 text-transparent bg-clip-text">
        Projects
    </div>
    <section id="Projects" class="flex flex-col md:flex-row justify-center items-center pt-12 md:pt-20 lg:pt-28 text-white gap-6">
        <a href="/RevisionBot" class="w-full md:w-1/3">
            <div class="group p-6 border border-white/20 rounded-md hover:bg-white/10 ease-in-out duration-300">
                <span class="group font-semibold text-xl md:text-2xl lg:text-4xl">
                    Revision Bot 
                    <span class="inline-block transition-transform group-hover:translate-x-3">-></span>
                </span>
                <p class="mt-3 text-sm md:text-base">
                    An effective solution to online quizzing using the WWebJS library, allowing WhatsApp messages with questions to be sent for effective revision anytime, anywhere.
                </p>
            </div>
        </a>
        <a href="#bottleOS" class="w-full md:w-1/3">
            <div id="bottleOS" class="group p-6 border border-white/10 rounded-md bg-white/10 text-slate-400">
                <span class="group font-semibold text-xl md:text-2xl lg:text-4xl">
                    Bottle OS 
                    <span class="inline-block">-></span>
                </span>
                <p class="mt-3 text-sm md:text-base">
                    A compact operating system for a smart water bottle with an integrated display, featuring real-time temperature monitoring and AI-powered interactions. Coming Soon.
                </p>
            </div>
          </a>
        </section>
</main>
<Footer />
