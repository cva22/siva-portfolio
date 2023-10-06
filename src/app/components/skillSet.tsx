export default function SkillSet() {
  return (
    <div>
      <div>
        <h2 className='text-3xl text-lime-500'>SKILL SNAPSHOT</h2>
      </div>
      <div>
        <ul className='list-disc list-inside'>
          <li>
            Web: Node, HTML5, CSS3, CSS-in-JS, ECMAScript (&gt;ES6), TypeScript
          </li>
          <li>
            Abstract: Micro Frontends, Microservices, React, Redux, Hooks,
            Webpack, WebGL, Nestjs, Nextjs, JS modules (CJS, ESM), Storybook
          </li>
          <li>Designing UI & UX: Adobe Photoshop, Figma, Sketch</li>
          <ul className='list-disc list-inside'>
            <li>Workflow: Docker based Development and DevOps oriented</li>
            <ul className='list-disc list-inside ml-8'>
              <li>
                Code: Docker integrated VS Code, Git, Bitbucket, Code review,
                Release management
              </li>
              <li>Cloud: AWS, Azure</li>
              <li>
                CI/CD Pipelines: Jenkins, GitHub Actions, AWS Code Pipeline,
                Azure, Heroku build toolset
              </li>
            </ul>
          </ul>
          <li>Package Management: NPM, PNPM</li>
          <li>Testing: Jest, Enzyme</li>
          <li>
            Frameworks: Firebase, jQuery, Express, Google Analytics, MongoDB,
            DynamoDb, Dynamoose, Graphql, OAuth.
          </li>
          <li>Standards: WCAG, OWASP security, W3C</li>
        </ul>
      </div>
    </div>
  );
}
