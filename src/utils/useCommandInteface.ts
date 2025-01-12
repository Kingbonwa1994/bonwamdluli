import { useState } from 'react';

type Command = {
  name: string;
  description: string;
  action: () => void;
};

export function useCommandInterface(commands: Command[]) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleCommand = () => {
    const command = commands.find(cmd => cmd.name === input.trim().toLowerCase());
    if (command) {
      command.action();
      setOutput(`Executing: ${command.description}`);
    } else {
      setOutput('Command not recognized. Type "help" for available commands.');
    }
    setInput('');
  };

  const handleHelp = () => {
    setOutput(commands.map(cmd => `${cmd.name}: ${cmd.description}`).join('\n'));
    setInput('');
  };

  return { input, setInput, output, handleCommand, handleHelp };
}

