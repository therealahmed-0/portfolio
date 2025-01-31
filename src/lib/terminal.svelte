<script>
    import {TypeWriter} from 'svelte-typewrite';
</script>
<div class="flex justify-start items-start bg-gray-950 font-mono text-green-500 h-screen w-screen p-5" >
   <div class="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 max-w-md mx-auto">
        <div class="flex space-x-2 p-2rounded-t-lg w-screen">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div> 
        <span class="text-red-500">root</span>@portfolio: <span class="text-white"><TypeWriter texts={[' # under devleopment']} typeSpeed={150} /></span>
    </div>
</div>
