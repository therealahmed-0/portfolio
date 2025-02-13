<script>
    import Clock from './Clock.svelte';
</script>
<div class="flex flex-col justify-start items-center bg-gray-950 font-mono text-green-500 min-h-screen w-full p-4 sm:p-6">
    <div class="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl w-full max-w-3xl mx-auto flex flex-col overflow-hidden">
        <!-- Window Buttons -->
        <div class="flex items-center space-x-2 p-2 rounded-t-lg bg-black/30">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <div class="text-gray-100 text-sm ml-2">Menu bar</div>
        </div>
        <div class="flex flex-row p-1">
            <div class="font-['consolas'] font-bold align-center text-white text-center" aria-label="time"><Clock /></div>
            <div class="flex justify-center items-center bg-blue-700 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-md w-[2rem] h-[2rem] mx-[3px] md:w-[2.25rem] md:h-[2.25rem] hover:"><svg width="30" height="30" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.695c.508.427.8 1.056.8 1.72v9.802a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 3 19.75V9.947c0-.663.292-1.292.8-1.72l6.75-5.694Z" fill="#fff"/></svg></div>
            <div class="flex justify-center items-center bg-orange-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-md w-[2rem] h-[2rem] mx-[3px] md:w-[2.25rem] md:h-[2.25rem]"><svg width="30" height="30" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm-.004 8.25a1 1 0 0 0-.992.885l-.007.116.003 5.502.007.117a1 1 0 0 0 1.987-.002L13 16.75l-.003-5.501-.007-.117a1 1 0 0 0-.994-.882ZM12 6.5a1.251 1.251 0 1 0 0 2.503A1.251 1.251 0 0 0 12 6.5Z" fill="#fff"/></svg></div>
            <div class="flex justify-center items-center bg-green-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-md w-[2rem] h-[2rem] mx-[3px] md:w-[2.25rem] md:h-[2.25rem]"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>  
