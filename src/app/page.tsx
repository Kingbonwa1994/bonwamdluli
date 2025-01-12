'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useTypewriter } from '../utils/useTypewriter'
import { useJitter } from '../utils/useJitter'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SiTypescript, SiNextdotjs, SiReact, SiExpo, SiMongodb, SiPostgresql, SiPayloadcms } from 'react-icons/si'
import { FaAws, FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa'
import { FaXTwitter, FaThreads } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { SkillsCenter } from '@/components/SkillsCenter'

type Command = 'about' | 'skills' | 'projects' | 'contact' | 'webapps' | 'nativeapps';

export default function PortfolioHomepage() {
  const typewriterText = useTypewriter("Welcome to Bonwa Mdluli's portfolio...", 100)
  const jitter = useJitter(0.5, 50)
  const colorAnimation = useAnimation()
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [sheetOpen, setSheetOpen] = useState(false)
  const [activeCommand, setActiveCommand] = useState<Command | null>(null)

  useEffect(() => {
    colorAnimation.start({
      backgroundColor: ['#f0e7db', '#e6d8c3', '#f0e7db'],
      transition: { duration: 5, repeat: Infinity, ease: 'linear' }
    })
  }, [colorAnimation])

  const handleCommand = () => {
    const command = input.trim().toLowerCase() as Command;
    if (['about', 'skills', 'projects', 'contact', 'webapps', 'nativeapps'].includes(command)) {
      setActiveCommand(command);
      setSheetOpen(true);
      setOutput(`Executing: ${command}`);
    } else if (command === 'help') {
      setOutput('Available commands: about, skills, projects, contact, webapps, nativeapps');
    } else {
      setOutput('Command not recognized. Type "help" for available commands.');
    }
    setInput('');
  };

  const renderSheetContent = () => {
    switch (activeCommand) {
      case 'about':
        return (
          <>
            <SheetHeader>
              <SheetTitle>About Bonwa Mdluli</SheetTitle>
              <SheetDescription>
                Bonwa Mdluli is a software architect specializing in launching startups with cutting-edge technologies.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <p>With years of experience in the tech industry, Bonwa has helped numerous startups bring their ideas to life using the latest and most efficient technologies. His expertise spans across web and mobile development, cloud architecture, and database design.</p>
            </div>
          </>
        );
      case 'skills':
        return (
          <>
            <SheetHeader>
              <SheetTitle>Technical Skills</SheetTitle>
              <SheetDescription>
                Bonwa&apos;s expertise in various technologies
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <SkillsCenter />
            </div>
          </>
        );
      case 'projects':
        return (
          <>
            <SheetHeader>
              <SheetTitle>Projects</SheetTitle>
              <SheetDescription>
                Some of Bonwa&apos;s notable projects
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="h-[400px] mt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Project 1</h3>
                  <p>Description of Project 1...</p>
                </div>
                <div>
                  <h3 className="font-bold">Project 2</h3>
                  <p>Description of Project 2...</p>
                </div>
                {/* Add more projects as needed */}
              </div>
            </ScrollArea>
          </>
        );
      case 'contact':
        return (
          <>
            <SheetHeader>
              <SheetTitle>Contact Information</SheetTitle>
              <SheetDescription>
                Get in touch with Bonwa
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <p>Email: bonwa@example.com</p>
              <p>LinkedIn: linkedin.com/in/bonwamdluli</p>
              <p>GitHub: github.com/bonwamdluli</p>
            </div>
          </>
        );
      case 'webapps':
        return (
          <>
            <SheetHeader>
              <SheetTitle>Web Applications</SheetTitle>
              <SheetDescription>
                Web technologies Bonwa specializes in
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 flex space-x-4 overflow-x-auto pb-4">
              {[
                { Icon: SiReact, name: 'React', color: '#61DAFB' },
                { Icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
                { Icon: SiTypescript, name: 'TypeScript', color: '#007ACC' },
                { Icon: SiPayloadcms, name: 'PayloadCMS', color: '#000000' },
              ].map((app) => (
                <div key={app.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <app.Icon className="text-3xl" style={{ color: app.color }} />
                  </div>
                  <span className="mt-2 text-sm text-white">{app.name}</span>
                </div>
              ))}
            </div>
          </>
        );
      case 'nativeapps':
        return (
          <>
            <SheetHeader>
              <SheetTitle>Native Applications</SheetTitle>
              <SheetDescription>
                Mobile technologies Bonwa works with
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 flex space-x-4 overflow-x-auto pb-4">
              {[
                { Icon: SiReact, name: 'React Native', color: '#61DAFB' },
                { Icon: SiExpo, name: 'Expo', color: '#000020' },
              ].map((app) => (
                <div key={app.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <app.Icon className="text-3xl" style={{ color: app.color }} />
                  </div>
                  <span className="mt-2 text-sm text-white">{app.name}</span>
                </div>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-[hsl(var(--text-off-white))]">
      <header className="p-4" style={{
        background: 'linear-gradient(135deg, #000000, #FF0000, #000000)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container mx-auto flex justify-center space-x-4">
          {[
            { Icon: FaXTwitter, href: 'https://x.com/BonwaMdluli', color: '#1DA1F2' },
            { Icon: FaFacebookF, href: 'https://facebook.com/mdlulik', color: '#4267B2' },
            { Icon: FaInstagram, href: 'https://www.instagram.com/mdluliekingbonwa/', color: '#E1306C' },
            { Icon: FaWhatsapp, href: 'https://wa.me/+27659505243', color: '#25D366' },
            { Icon: FaLinkedinIn, href: 'https://linkedin.com/in/yourusername', color: '#0077B5' },
            { Icon: FaGithub, href: 'https://github.com/Kingbonwa1994', color: '#333' },
            { Icon: FaThreads, href: 'https://threads.net/@yourusername', color: '#000000' },
            { Icon: FaDiscord, href: 'https://discordapp.com/users/youruserid', color: '#7289DA' },
            { Icon: MdEmail, href: 'mailto:bonwamdlulu@gmail.com', color: '#D44638' },
          ].map(({ Icon, href, color }, index) => (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Icon size={24} color={color} />
            </a>
          ))}
        </div>
      </header>
      <motion.div 
        className="flex-grow flex flex-col items-center justify-center p-4 overflow-hidden"
        style={{ 
          backgroundImage: "url('/worn-paper.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        animate={colorAnimation}
      >
        <motion.div 
          className="relative w-full max-w-4xl"
          style={{ x: jitter.x, y: jitter.y }}
        >
          <motion.div 
            className="absolute inset-0 bg-black opacity-10"
            style={{ x: jitter.x * 1.5, y: jitter.y * 1.5 }}
          />
          <motion.div 
            className="absolute inset-0 bg-white opacity-20"
            style={{ x: jitter.x * 0.5, y: jitter.y * 0.5 }}
          />
          <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg shadow-lg" style={{background: 'var(--card-gradient)'}}>
            <h1 className="text-4xl font-bold mb-4 font-mono">
              {typewriterText}
              <span className="animate-blink">|</span>
            </h1>
            <div className="font-mono text-[hsl(var(--text-off-white))]">
              <p className="mb-2">&gt; Enter a command (type 'help' for available commands):</p>
              <div className="flex items-center space-x-2">
                <span className="mr-2">&gt;</span>
                <div className="flex-grow bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 p-[2px] rounded-md">
                  <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleCommand()}
                    className="w-full bg-black text-[hsl(var(--text-off-white))] border-none focus:ring-0 placeholder-gray-500"
                    placeholder="Enter command..."
                  />
                </div>
                <Button onClick={handleCommand}>Execute</Button>
              </div>
              <pre className="mt-2 whitespace-pre-wrap">{output}</pre>
            </div>
          </div>
        </motion.div>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetContent className="bg-gradient-to-br from-gray-900 to-black text-[hsl(var(--text-off-white))]" style={{background: 'var(--card-gradient)'}}>
            <div className="bg-black bg-opacity-50 h-full overflow-auto rounded-lg p-6">
              {renderSheetContent()}
            </div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </div>
  )
}

