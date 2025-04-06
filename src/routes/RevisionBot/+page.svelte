<script>
    import RevisionNav from "$lib/RevisionNav.svelte";
    import Footer from "$lib/Footer.svelte";
</script>
<div class="fixed top-0 left-0 w-full z-50">
    <RevisionNav fill={"#008000"}/>
  </div>
<main>
    <section class="h-screen w-full overflow-hidden" id="mainPage">
        <div class="flex flex-col h-screen justify-center items-center text-center relative z-10">
            <div class="bg-gradient-to-b from-green-500 to-green-950 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-5xl font-bold p-5">
                RevisionBot - An effective way to revise online
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center pt-6 md:pt-12 lg:pt-18 text-white gap-6 font-mono">
                <a href="#about">
                    <button class="group p-4 rounded-xl bg-gradient-to-b from-green-500 to-green-900  hover:rounded-2xl ease-in-out duration-300 w-[50vw] md:w-[15vw] text-slate-400 hover:text-white">
                        Find out more
                    </button>
                </a>
                <span class="text-gray-600">
                    OR
                </span>
                <a href="#demo">
                    <button class="group p-4 rounded-xl bg-gradient-to-b from-green-500 to-green-900 ease-in-out hover:rounded-2xl duration-300 w-[50vw] md:w-[15vw] text-slate-400 hover:text-white">
                        See a demo
                    </button>
                </a>
            </div>
        </div>
    </section>
    <section class="h-screen w-full overflow-hidden" id="#about">
        hello world
    </section>
</main>
<div id="Footer">
    <Footer />
</div>