<script lang="ts">
  import { executeCommand, type CommandOutput } from "$lib/commands";
  import { cascade } from "svelte-typewriter";
  import { onMount } from "svelte";
  import {TypeWriter} from "svelte-typewrite";
  import MenuBar from './MenuBar.svelte';

  let inputRef: HTMLInputElement | null = null;
  let command = "";
  let output: CommandOutput[] = [
      {
          command: "",
          response:
              `<span class="secondary-text">Welcome to my portfolio. Enter 'help' to begin. <br><br>`,
      },
  ];
  let history: string[] = [];
  let historyIndex = -1;
  let isSudoMode = false; // Tracks sudo state
  let awaitingSudoPassword = false; // Tracks if password is being entered

  onMount(() => {
      if (inputRef) {
          inputRef.focus();
          inputRef.select();
      }
  });

  const handleInput = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
          if (awaitingSudoPassword) {
              // Simulate sudo password check
              if (command === "password123") { // Replace with actual secure check
                  output = [...output, { command: "sudo", response: `<span class="main-output">Password accepted. You now have admin rights.</span>` }];
                  isSudoMode = true; // Enable sudo mode
              } else {
                  output = [...output, { command: "sudo", response: `<span class="main-output">Incorrect password.</span>` }];
              }
              awaitingSudoPassword = false;
              command = "";
          } else {
              const result = executeCommand(command);
              
              if (command === "sudo") {
                  awaitingSudoPassword = true;
                  output = [...output, { command: "sudo", response: `<span class="main-output">Enter password: </span>` }];
              } else if (Array.isArray(result)) {
                  output = result;
              } else {
                  output = [...output, result];
                  if (command === "clear") {
                      output = []; // Clear terminal output
                  }
              }

              history = [...history, command];
              historyIndex = history.length;
              command = "";
          }
      } else if (e.key === "ArrowUp") {
          if (historyIndex > 0) {
              historyIndex -= 1;
              command = history[historyIndex];
          }
      }
  };

  const formatResponse = (response: string) => response.split("\n");
</script>
<!-- Terminal container -->
<div class="flex flex-col justify-start items-center bg-gray-950 font-mono text-green-500 min-h-screen w-full p-4 sm:p-6">
  <div class="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl w-full max-w-3xl mx-auto flex flex-col overflow-hidden">
      <!-- Window Buttons -->
      <div class="flex items-center space-x-2 p-2 rounded-t-lg bg-black/30">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
          <div class="text-gray-100 text-sm ml-2">~/home/root/</div>
      </div>

      <!-- Terminal output -->
      <div class="bg-zinc-900 text-green-500 font-mono text-lg flex-1 p-4 overflow-y-auto h-[500px] min-h-[50vh]">
        {#each output as line}
              <div>
                  {#if line.command}
                      {#if isSudoMode === true}
                          <span class="mr-2 main-text">root@portfolio:~$</span>{line.command}
                      {:else}
                          <span class="mr-2 main-text">guest@portfolio:~$</span>{line.command}
                      {/if}
                  {/if}
                  <div use:cascade={{ interval: 30 }}>
                      {#each formatResponse(line.response) as resLine}
                          <p>{@html resLine}</p>
                      {/each}
                  </div>
              </div>
          {/each}

          <!-- Input field with scaling -->
          <div class="flex items-center">
              
                  {#if command === "sudo" || isSudoMode === true}
                  <span class="mr-2 main-text">root@portfolio:~$</span>
                    {:else}
                  <span class="mr-2 main-text">guest@portfolio:~$</span>
                  {/if}
              <span class="main-input">{command}</span>
              <b class="cursor">█</b>
              <input
                  class="absolute left-[-9999px] w-auto"
                  type="text"
                  bind:value={command}
                  bind:this={inputRef}
                  on:keydown={handleInput}
              />
          </div>
      </div>
  </div>
  <MenuBar />

  <style>
      .cursor {
          display: inline-block;
          width: 10px;
          animation: blink 1s step-start infinite;
      }

      @keyframes blink {
          50% {
              opacity: 0;
          }
      }
  </style>
</div>
