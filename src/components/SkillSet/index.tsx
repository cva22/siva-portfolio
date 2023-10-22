import Image from 'next/image';
import { Caption } from '../ui/typography';
import MatrixBackground from '@/components/matrix-background';
import abc from '../../assets/gitHub.svg'

const skills = [
  { category: 'programming language & framework', name: 'typescript', alt: 'typescript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { category: 'programming language & framework', name: 'javascript', alt: 'javascript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { category: 'programming language & framework', name: 'react', alt: 'react', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' },
  { category: 'programming language & framework', name: 'nest', alt: 'nest', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
  { category: 'programming language & framework', name: 'next', alt: 'next', src: 'https://raw.githubusercontent.com/ithivesolutions/siva-portfolio/main/src/assets/skills/next.svg' },
  { category: 'tools', name: 'npm', alt: 'npm', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { category: 'programming language & framework', name: 'nodejs', alt: 'nodejs', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg' },
  { category: 'programming language & framework', name: 'expressjs', alt: 'expressjs', src: 'https://raw.githubusercontent.com/ithivesolutions/siva-portfolio/main/src/assets/skills/express.svg' },
  { category: 'infrastructure', name: 'aws', alt: 'aws', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { category: 'infrastructure', name: 'azure', alt: 'azure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { category: 'infrastructure', name: 'firebase', alt: 'firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg' },
  { category: 'database', name: 'postgress', alt: 'postgress', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg' },
  { category: 'tools', name: 'bitbucket', alt: 'bitbucket', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg' },
  { category: 'programming language & framework', name: 'bootstrap', alt: 'bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg' },
  { category: 'tools', name: 'confluence', alt: 'confluence', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original-wordmark.svg' },
  { category: 'programming language & framework', name: 'css3', alt: 'css3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg' },
  { category: 'tools', name: 'docker', alt: 'docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg' },
  { category: 'programming language & framework', name: 'dotnet', alt: 'dotnet', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { category: 'design', name: 'figma', alt: 'figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { category: 'tools', name: 'git', alt: 'git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg' },
  { category: 'tools', name: 'github', alt: 'github', src: 'https://raw.githubusercontent.com/ithivesolutions/siva-portfolio/main/src/assets/skills/gitHub.svg' },
  { category: 'programming language & framework', name: 'graphql', alt: 'graphql', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg' },
  { category: 'programming language & framework', name: 'handlebars', alt: 'handlebars', src: 'https://raw.githubusercontent.com/ithivesolutions/siva-portfolio/main/src/assets/skills/handlebars.svg' },
  { category: 'programming language & framework', name: 'html', alt: 'html', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' },
  { category: 'programming language & framework', name: 'jest', alt: 'jest', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { category: 'tools', name: 'jenkins', alt: 'jenkins', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { category: 'tools', name: 'jira', alt: 'jira', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg' },
  { category: 'programming language & framework', name: 'jquery', alt: 'jquery', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg' },
  { category: 'programming language & framework', name: 'material-ui', alt: 'material-ui', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { category: 'database', name: 'mongodb', alt: 'mongodb', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
  { category: 'database', name: 'sql', alt: 'sql', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
  { category: 'tools', name: 'redis', alt: 'redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain-wordmark.svg' },
  { category: 'programming language & framework', name: 'tailwindcss', alt: 'tailwindcss', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { category: 'infrastructure', name: 'terraform', alt: 'terraform', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { category: 'database', name: 'dynamodb', alt: 'dynamodb', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { category: 'design', name: 'photoshop', alt: 'photoshop', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg' },


] as const;

type Skill = {
  category: string;
  name: string;
  alt: string;
  src: string;
};

function groupByCategory(skills: readonly Skill[]): Record<string, Skill[]> {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};


export default function SkillSet() {

  const groupedSkills = groupByCategory(skills);

  return (
    <section
      id="skills"
      className='relative z-10 w-full bg-neutrals-900 py-32 flex flex-col justify-center min-h-screen'
    >
      <MatrixBackground /*client: visible*/ />
      <div>
        <div className="w-full py-28 max-lg:mx-auto max-lg:w-11/12 max-lg:max-w-7xl lg:pl-10 xl:pl-20">
          <Caption className='border-primary/30 bg-primary/10 text-primary after:bg-primary/10' id='adout-caption'>Skills</Caption>
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className='py-10'>
              <Caption className='border-neutrals-300/30 bg-neutrals-300/10 text-neutrals-300 after:bg-neutrals-300/10' id='category-caption'>{category}</Caption>
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-center'>
                {skills.map((skill, index) => (
                  <div key={index} className='max-w-75 max-h-75'>
                    < Image
                      className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                      src={skill.src}
                      alt={skill.alt}
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div >
      </div>
    </section>
  );
}

