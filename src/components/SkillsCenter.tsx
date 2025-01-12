import { SiTypescript, SiNextdotjs, SiReact, SiExpo, SiMongodb, SiPostgresql, SiPayloadcms } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { motion } from 'framer-motion'

const skills = [
  { Icon: SiTypescript, name: 'TypeScript', color: '#007ACC' },
  { Icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiExpo, name: 'Expo', color: '#000020' },
  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { Icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  { Icon: FaAws, name: 'AWS', color: '#FF9900' },
  { Icon: SiPayloadcms, name: 'PayloadCMS', color: '#000000' },
]

export function SkillsCenter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <skill.Icon className="text-4xl" style={{ color: skill.color }} />
          </div>
          <span className="mt-2 text-sm font-semibold text-[hsl(var(--text-off-white))]">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

