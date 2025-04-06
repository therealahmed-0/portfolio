<script>
    import RevisionNav from "$lib/RevisionNav.svelte";
    import Footer from "$lib/Footer.svelte";
</script>
<head>
    <title>
        Revision Bot
    </title>
</head>
<div class="fixed top-0 left-0 w-full z-50">
    <RevisionNav fill={"#008000"}/>
  </div>
<style>
    .grad {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100%;
  background-image: radial-gradient(90% 100% at 50% 0%, #06402B, transparent);
  overflow: hidden;
}
</style>
<main>
    <section class="h-screen w-full overflow-hidden " id="mainPage">
        <div class="grad">
            <div class="bg-gradient-to-b from-green-500 to-green-950 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-5xl font-bold p-5">
                RevisionBot - An effective way to revise online
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center pt-6 md:pt-12 lg:pt-18 text-white gap-6 font-mono">
                <a href="#about">
                    <button class="group p-4 rounded-xl bg-gradient-to-b from-green-600 to-green-900  hover:rounded-2xl ease-in-out duration-300 w-[50vw] md:w-[15vw] text-slate-400 hover:text-white">
                        Find out more
                    </button>
                </a>
                <span class="text-gray-600">
                    OR
                </span>
                <a href="https://github.com/therealahmed-0/RevisionBot/">
                    <button class="group p-4 rounded-xl bg-gradient-to-b from-green-600 to-green-900 ease-in-out hover:rounded-2xl duration-300 w-[50vw] md:w-[15vw] text-slate-400 hover:text-white">
                        Get Started
                    </button>
                </a>
            </div>
        </div>
    </section>
    <section id="about" class="flex flex-col items-center justify-center h-screen pt-20 md:pt-28 lg:pt-34 px-6 md:px-12 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-zinc-700 text-transparent bg-clip-text">What is RevisionBot?</h1>
        <p class="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mt-4">
            <span class="text-[#54ffc0]">RevisionBot</span> is an intelligent <span class="text-[#54ffc0]">WhatsApp chatbot</span> designed to make <span class="text-[#54ffc0]">GCSE revision</span> more interactive and accessible. Built using the <span class="text-[#54ffc0]">WhatsApp Web JS</span> library, this bot sends <span class="text-[#54ffc0]">random questions</span> stored in a <span class="text-[#54ffc0]">MongoDB database</span> directly to your chat, helping students stay on track with their <span class="text-[#54ffc0]">revision goals</span>.
          </p>
          <p class="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mt-4">
            It operates on a <span class="text-[#54ffc0]">low requirement server</span>, ensuring <span class="text-[#54ffc0]">fast performance</span> and <span class="text-[#54ffc0]">low overhead</span>, and is fully open source—allowing others to <span class="text-[#54ffc0]">customise</span> and <span class="text-[#54ffc0]">expand</span> its features.
          </p>
          <p class="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mt-4">
            Whether you're preparing for <span class="text-[#54ffc0]">Computer Science</span>, <span class="text-[#54ffc0]">Physics</span>, or any other subject, <span class="text-[#54ffc0]">RevisionBot</span> makes studying feel less like a chore and more like a conversation.
          </p>
    </section>
    <section id="demo" class="min-h-screen w-full flex flex-col items-center justify-center gap-8 p-4">
        <h1 class="bg-gradient-to-b from-green-500 to-green-950 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-5xl font-bold text-center">
            View a demo
        </h1>
        <div class="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 w-full">
            <img src="/syntax-message.gif" alt="message with command syntax"
                class="w-auto max-w-full max-h-[80vh] lg:max-h-[62vh] object-contain mx-auto rounded shadow" />
            <img src="/question-message.gif" alt="message with command question"
                class="w-auto max-w-full max-h-[80vh] lg:max-h-[62vh] object-contain mx-auto rounded shadow" />
            <img src="/photo-message.gif" alt="message with command question"
                class="w-auto max-w-full max-h-[80vh] lg:max-h-[62vh] object-contain mx-auto rounded shadow" />
        </div>
    </section>     
    <section class="h-screen flex flex-col md:flex-row justify-center items-center p-12 md:p-20 lg:p-28 text-white gap-6">
        <a href="https://www.github.com/therealahmed-0/RevisionBot" class="w-full md:w-1/3">
            <div class="group p-6 border border-white/20 rounded-md hover:bg-white/10 ease-in-out duration-300">
                <span class="group font-semibold text-xl md:text-2xl lg:text-4xl">
                    Try it now
                    <span class="inline-block transition-transform group-hover:translate-x-3">→</span>
                </span>
                <p class="mt-3 text-sm md:text-base">
                    Make sure to give a GitHub star if you enjoy.
                </p>
            </div>
        </a>
    </section>
</main>
<div id="Footer">
    <Footer />
</div>