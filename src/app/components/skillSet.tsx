'use client';

import { List, ListItem, ListIcon } from '@chakra-ui/react';

import { MdDoneAll } from 'react-icons/md';

export default function SkillSet() {
  return (
    <div>
      <div>
        <h2 className='text-3xl text-lime-500 py-3'>SKILL SNAPSHOT</h2>
      </div>
      {/* <div>
        <ul className='list-disc list-outside ml-12'>
          <li>
            Web: Node, HTML5, CSS3, CSS-in-JS, ECMAScript (&gt;ES6), TypeScript
          </li>
          <li>
            Abstract: Micro Frontends, Microservices, React, Redux, Hooks,
            Webpack, WebGL, Nestjs, Nextjs, JS modules (CJS, ESM), Storybook
          </li>
          <li>Designing UI & UX: Adobe Photoshop, Figma, Sketch</li>
          <ul className='list-disc list-outside'>
            <li>Workflow: Docker based Development and DevOps oriented</li>
            <ul className='list-disc list-outside ml-8'>
              <li>
                Code: Docker integrated VS Code, Git, Bitbucket, Code review,
                Release management
              </li>
              <li>Cloud: AWS, Azure</li>
              <li>
                CI/CD Pipelines: Jenkins, GitHub Actions, AWS Code Pipeline,
                Azure, Heroku build toolset
              </li>
              <li>Package Management: NPM, PNPM</li>
            </ul>
          </ul>
          <li>Testing: Jest, Enzyme</li>
          <li>
            Frameworks: Firebase, jQuery, Express, Google Analytics, MongoDB,
            DynamoDb, Dynamoose, Graphql, OAuth.
          </li>
          <li>Standards: WCAG, OWASP security, W3C</li>
        </ul>
      </div> */}

      <List spacing={2}>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Web: Node, HTML5, CSS3, CSS-in-JS, ECMAScript (&gt;ES6), TypeScript
        </ListItem>
        <ListItem>
          <ListIcon as={MdDoneAll} color='orange.500' />
          Abstract: Micro Frontends, Microservices, React, Redux, Hooks,
          Webpack, WebGL, Nestjs, Nextjs, JS modules (CJS, ESM), Storybook
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
          Testing: Jest, Enzyme
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
