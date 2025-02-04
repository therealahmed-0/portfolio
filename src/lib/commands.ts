export interface CommandOutput {
  command: string;
  response: string;
}

interface Command {
  name: string;
  description: string;
  execute: () => CommandOutput | CommandOutput[];
}

export let userIp: string = 'unknown'; // Default value in case IP fetching fails

export const fetchUserIp = async () => {
  try {
      const response = await fetch('https://myip.wtf/text');
      userIp = (await response.text()).trim();
  } catch (error) {
      console.error("Failed to fetch IP:", error);
  }
};

/* IP detection disabled due to incompatibility with Vercel */
// await fetchUserIp();

export const commands: Command[] = [
  {
      name: 'help',
      description: 'Display available commands',
      execute: () => {
          const commandList = commands
              .map(cmd => `<span class="primary-output">${cmd.name}</span> <span class="secondary-output">${cmd.description}</span>`)
              .join('<br>');
          return {
              command: 'help',
              response: `<br><span class="main-output">Available commands:</span><br>${commandList}`,
          };
      },
  },
  {
      name: 'clear',
      description: 'Clear the terminal',
      execute: () => {
          return []; // Returns an empty array to signal clearing the terminal
      },
  },
  {
      name: 'whoami',
      description: 'Display user information',
      execute: () => {
          return {
              command: 'whoami',
              response: `<br><span class="main-output">guest@${userIp || 'unknown'}</span>`,
          };
      },
  },
  {
      name: 'sudo',
      description: `Control the website using this. You'll need a password!`,
      execute: () => {
          return {
              command: 'sudo',
              response: `<span class="main-output">Enter password: </span>`,
          };
      }
  }
];

export const executeCommand = (cmd: string): CommandOutput | CommandOutput[] => {
  const command = cmd.trim().toLowerCase(); // Ensure case insensitivity

  if (command === '') {
      return { command, response: `<span class="main-output">Please enter a command.</span>` };
  }

  const foundCommand = commands.find(c => c.name === command);
  if (foundCommand) {
      return foundCommand.execute();
  }

  return {
      command: cmd,
      response: `<span class="error-output">Command not found: ${cmd}</span>`,
  };
};
