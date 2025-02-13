<script>
    import { onMount } from 'svelte';
  
    let currentTime = '';
  
    // Function to update the current time
    const updateTime = () => {
      const now = new Date();
      currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
  
    // Initialize the clock when the component mounts
    onMount(() => {
      // Update time immediately
      updateTime();
  
      // Set interval to update the time every minute (60000 ms)
      const interval = setInterval(() => {
        updateTime();
      }, 60000);
  
      // Cleanup interval when the component is destroyed
      return () => clearInterval(interval);
    });
  </script>
  
  <div class="clock">
    <p>{currentTime}</p>
  </div>
  