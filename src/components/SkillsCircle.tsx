import { motion } from 'framer-motion';
import { 
  SiTypescript, SiNextdotjs, SiReact, SiExpo, SiMongodb, 
  SiPostgresql, SiPayloadcms
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const skills = [
  { Icon: SiTypescript, name: 'TypeScript' },
  { Icon: SiNextdotjs, name: 'Next.js' },
  { Icon: SiReact, name: 'React' },
  { Icon: SiExpo, name: 'Expo' },
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: SiPostgresql, name: 'PostgreSQL' },
  { Icon: FaAws, name: 'AWS' },
  { Icon: SiPayloadcms, name: 'PayloadCMS' },
];

export function SkillsCircle() {
  return (
    <div className="relative w-64 h-64">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center"
          style={{
            top: `${32 + 30 * Math.sin(index * (2 * Math.PI) / skills.length)}%`,
            left: `${32 + 30 * Math.cos(index * (2 * Math.PI) / skills.length)}%`,
          }}
          whileHover={{ scale: 1.2 }}
        >
          <skill.Icon className="text-2xl" title={skill.name} />
        </motion.div>
      ))}
    </div>
  );
}

