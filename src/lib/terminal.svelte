<script>
    import {TypeWriter} from 'svelte-typewrite';
</script>
<div class="flex flex-col justify-start items-start bg-gray-950 font-mono text-green-500 min-h-screen w-full p-4 sm:p-6 overflow-hidden">
    <div class="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-4 sm:p-6 max-w-xs sm:max-w-sm mx-auto w-full">
         <!-- Window Buttons -->
         <div class="flex space-x-2 p-2 rounded-t-lg">
             <div class="w-3 h-3 rounded-full bg-red-500"></div>
             <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
             <div class="w-3 h-3 rounded-full bg-green-500"></div>
         </div> 
         <!-- Terminal Content -->
         <span class="text-red-500">root</span>@portfolio: 
         <span class="text-white">
             <TypeWriter texts={[' # under development']} typeSpeed={150} />
         </span>
     </div>
 </div>
 
