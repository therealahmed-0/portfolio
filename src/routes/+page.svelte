<script>
    import Navbar from "../lib/Navbar.svelte";
    import { TypeWriter } from 'svelte-typewrite';

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
        "Fear is the enemy of success; conquer it and you will conquer anything."
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


<div class="flex flex-col h-screen">
    <div class=" sticky top-0">
        <Navbar />
        <hr color="#4b5563">
    </div>
    <main class="flex flex-grow justify-center items-center">
        <div class="text-center">
            <span class="bg-gradient-to-b from-red-500 to-red-900 bg-clip-text text-transparent text-xl md:text-2xl lg:text-5xl font-bold p-5 ">
                <TypeWriter 
                    texts={[`"${selectedQuote}"`]} 
                    ondeleteend={changeQuote}
                />
            </span>
            <br>
            <div class="p-5">
                <span class="text-gray-600 p-5 text-[12px] md:text-[24px] lg:text-lg">
                    Scroll down to learn more
                </span>
            </div>
        </div>
    </main>
</div>

<div class="flex flex-col h-screen bg-gray-950" id="About">
    <div class="p-15 m-3">
        <h2 class="bg-gradient-to-b from-black via-gray-800 to-white bg-clip-text text-transparent font-semibold text-2xl md:text-4xl lg:text-6xl p-4 md:p-8 lg:p-12 ">
            About me
       </h2>
       <p class="text-gray-300 text-xl md:text-2xl lg:text-4xl ">
        Hi, my name is Ahmed. I am an aspiring computer science student, with strengths in full-stack devlopment, problem solving, and system design. Currently, learning skills like effective use of languages for machine learning, like python, I aspire to build scaleable solutions for real-world problems. Beyond computer science, I am dedicated to academics, and sports, like Mathematics and martial arts. My goal is to push my limits, develop innovative projects, and contribute meaningfully to the tech community.
       </p>
    </div>
</div>
<div class="w-full h-[100px] bg-grey-900 text-white flex flex-row justify-evenly items-center">
    <div class="flex flex-col justify-center items-center text-center"><a href="https://svelte.dev" aria-label="svelte"><svg stroke="currentColor" fill="#ff0000" stroke-width="0" role="img" viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.68 3.17a7.3 7.3 0 0 0-9.8-2.1l-5.6 3.56a6.36 6.36 0 0 0-2.89 4.3 6.66 6.66 0 0 0 .67 4.33 6.14 6.14 0 0 0-.95 2.4 6.84 6.84 0 0 0 1.16 5.16 7.33 7.33 0 0 0 9.8 2.12l5.6-3.56a6.36 6.36 0 0 0 2.88-4.3 6.66 6.66 0 0 0-.67-4.32 6.79 6.79 0 0 0-.2-7.59zM10.32 21.13a4.43 4.43 0 0 1-4.76-1.77c-.65-.9-.89-2.01-.7-3.11l.11-.53.1-.33.3.2c.66.5 1.4.86 2.19 1.1l.2.07-.02.2c-.02.28.06.59.22.83.33.47.9.7 1.45.55.12-.04.24-.08.34-.14l5.58-3.56c.28-.18.46-.45.53-.77.06-.33-.02-.67-.2-.94-.33-.46-.9-.67-1.45-.53-.12.04-.25.09-.35.15l-2.11 1.34a4.43 4.43 0 0 1-5.9-1.28 4.1 4.1 0 0 1-.7-3.11A3.85 3.85 0 0 1 6.92 6.9l5.57-3.56c.35-.22.73-.38 1.14-.5 1.8-.47 3.7.24 4.76 1.76a4.12 4.12 0 0 1 .57 3.64l-.1.33-.29-.2a7.42 7.42 0 0 0-2.2-1.1l-.2-.06.02-.2c.02-.29-.06-.6-.22-.84-.33-.47-.9-.67-1.45-.53-.12.04-.24.08-.34.14L8.59 9.37c-.28.19-.46.45-.52.78-.06.32.02.67.2.93.32.47.9.67 1.44.53.13-.04.25-.08.35-.14l2.13-1.36c.35-.23.74-.4 1.14-.51 1.81-.47 3.7.24 4.76 1.77.65.9.9 2.01.72 3.1a3.85 3.85 0 0 1-1.75 2.6l-5.58 3.55a4.9 4.9 0 0 1-1.16.51z"></path></svg></a> <span>SvelteKit</span></div>
    <div class="flex flex-col justify-center items-center text-center"><a href="https://firebase.google.com" aria-label="firebase"><svg stroke="currentColor" fill="#ff0000" stroke-width="0" role="img" viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z"></path></svg></a><span>Firebase</span></div>
    <div class="flex flex-col justify-center items-center text-center"><a href="https://v2.tailwindcss.com" aria-label="tailwind"><svg stroke="currentColor" fill="#ff0000" stroke-width="0" role="img" viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg><span>Tailwind</span></a></div>
</div>
<div class="h-screen">

</div>
