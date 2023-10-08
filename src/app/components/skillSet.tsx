'use client';

import { List, ListItem, ListIcon } from '@chakra-ui/react';

import { MdDoneAll } from 'react-icons/md';

export default function SkillSet() {
  return (
    <div>
      <div>
        <h2 className='text-3xl text-lime-500 py-3'>SKILL SNAPSHOT</h2>
      </div>

      <List spacing={2}>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Web: Node, HTML5, CSS3, CSS-in-JS, ECMAScript (&gt;ES6), TypeScript
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Abstract: Micro Frontends, Microservices, React, Redux, Hooks,
          Webpack, WebGL, Nestjs, Nextjs, JS modules (CJS, ESM), Bootstrap,
          Storybook
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Designing UI & UX: Adobe Photoshop, Figma, Sketch
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Workflow: Docker based Development and DevOps oriented
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Code: Docker integrated VS Code, Git, Bitbucket, Code review, Release
          management
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Cloud: AWS, Azure
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          CI/CD Pipelines: Jenkins, GitHub Actions, AWS Code Pipeline, Azure,
          Heroku build toolset
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Package Management: NPM, PNPM
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Testing: Jest, Enzyme, Cypress
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Frameworks: Firebase, jQuery, Express, Google Analytics, MongoDB,
          DynamoDb, Dynamoose, Graphql, OAuth
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Standards: WCAG, OWASP security, W3C
        </ListItem>
      </List>
    </div>
  );
}
