// 'use client';

// import { List, ListItem, ListIcon } from '@chakra-ui/react';
// import { MdDoneAll } from 'react-icons/md';

// export default function SkillSet() {
//   return (
//     <>
//       <section
//         id="skills"
//         className='relative z-10 w-full bg-neutrals-900 py-32 flex flex-col justify-center min-h-screen'
//       >
//         <div>
//           <h2 className='text-3xl text-lime-500 py-3'>SKILLS</h2>
//         </div>

//         <List spacing={2}>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Web: Node, HTML5, CSS3, CSS-in-JS, ECMAScript (&gt;ES6), TypeScript,
//             JavaScript
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Abstract: Micro Frontends, Microservices, React, Redux, Hooks,
//             Webpack, WebGL, Nestjs, Nextjs, JS modules (CJS, ESM), Bootstrap,
//             Storybook
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Designing UI & UX: Adobe Photoshop, Figma, Sketch
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Workflow: Docker based Development and DevOps oriented
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Code: Docker integrated VS Code, Git, Bitbucket, Code review, Release
//             management
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Cloud: AWS, Azure
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             CI/CD Pipelines: Jenkins, GitHub Actions, AWS Code Pipeline, Azure,
//             Heroku build toolset
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Package Management: NPM, PNPM
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Testing: Jest, Enzyme, Cypress
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Frameworks: Firebase, jQuery, Express, Google Analytics, MongoDB,
//             DynamoDb, PostgreSQL, Redis, Dynamoose, Graphql, OAuth
//           </ListItem>
//           <ListItem>
//             <ListIcon as={MdDoneAll} color='orange.500' />
//             Standards: WCAG, OWASP security, W3C
//           </ListItem>
//         </List>
//       </section>
//     </>
//   );
// }

import Image from 'next/image';


export default function SkillSet() {
  const skills = [
    { name: 'typescript', alt: 'typescript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'javascript', alt: 'javascript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'nodejs', alt: 'nodejs', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg' },
    { name: 'expressjs', alt: 'expressjs', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'bitbucket', alt: 'bitbucket', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg' },
    { name: '', alt: 'bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg' },
    { name: '', alt: 'confluence', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original-wordmark.svg' },
    { name: '', alt: 'css3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg' },
    { name: '', alt: 'docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg' },
    { name: '', alt: 'dotnet', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: '', alt: 'figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: '', alt: 'firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg' },
    { name: '', alt: 'git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg' },
    { name: '', alt: 'github', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: '', alt: 'graphql', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg' },
    { name: '', alt: 'handlebars', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg' },
    { name: '', alt: 'html', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' },
    { name: '', alt: 'jest', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { name: '', alt: 'jenkins', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'jira', alt: 'jira', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg' },
    { name: 'jquery', alt: 'jquery', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg' },
    { name: 'material-ui', alt: 'material-ui', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'mongodb', alt: 'mongodb', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
    { name: 'sql', alt: 'sql', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'nest', alt: 'nest', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
    { name: 'next', alt: 'next', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'npm', alt: 'npm', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'postgress', alt: 'postgress', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg' },
    { name: 'react', alt: 'react', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' },
    { name: 'redis', alt: 'redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain-wordmark.svg' },
    { name: 'tailwindcss', alt: 'tailwindcss', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'terraform', alt: 'terraform', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  ] as const;

  return (
    <section
      id="skills"
      className='relative z-10 w-full bg-neutrals-900 py-32 flex flex-col justify-center min-h-screen'
    >
      <div>
        <h2 className='text-3xl text-lime-500 py-3'>SKILLS</h2>
      </div>
      <div className='relative h-screen'>
        <div className='grid grid-cols-6 text-center'>
          {skills.map((skill) => (
            <div className='max-w-75 max-h-75'>
              < Image
                className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                src={skill.src}
                alt={skill.alt}
                width={120}
                height={120}
                priority
              />
            </div>
          ))}
        </div>
      </div >
    </section>
  );
}

