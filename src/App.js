/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
`;

const headerItemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #374151;
  font-size: 1.125rem;
  font-weight: 500;

  img {
    margin-right: 3.4rem;
  }
  nav {
    padding: 0 16px;
  }

  button {
    color: #2563eb;
    background-color: #dbeafe;
    border: none;
    padding: 0.8rem 1.25rem;
    margin-left: 2rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.75rem;
  }
`;

const firstSectionStyles = css`
  width: 80vw;
  margin: auto;
  padding-top: 6rem;
  padding-bottom: 9rem;
  display: flex;
  align-items: center;
  gap: 10rem;

  div {
    padding: 1.5rem;
  }
`;

const leftContainer = css`
  max-width: 41rem;
`;

const boxTemplate = css`
  border: 2px solid;
  box-shadow: 2px 2px;
  height: fit-content;
  border-radius: 0.3rem;
  background-color: #ffffff;
  padding: 1.25rem;
`;

const boxButton = css`
  border-color: #111827;
  font-family: Outfit, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 40px;
  color: #111827;
  background-position: 100% 100%;
  :hover {
    background: linear-gradient(#f9fafb, #f9fafb 50%, #ffffff 50%, #ffffff);
    background-size: 100% 200%;
    transition: background 0.5s;
  }
`;

const blueBadge = css`
  background-color: #60a5fa;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-size: 0.813rem;
  padding: 0.625rem 1.25rem;
  border-radius: 9999px;
`;

const h1Heading = css`
  font-family: Outfit, sans-serif;
  font-size: 4.4rem;
  color: #111827;
  font-weight: 700;
  padding: 0;
  margin: 2rem 0 0 0;
  line-height: 4.4rem;
`;

const paragraph = css`
  color: #4b5563;
  line-height: 1.4rem;
`;

const blueParagraph = css`
  color: #2563eb;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0.5rem 0 0.75rem 0;
  padding: 0;
`;

const largeText = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const iconHeaderBox = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 !important;
  margin: 0 !important;
`;

const boxEffectTilted = css`
  transform: rotate(-1deg);
  max-width: 41rem;
`;

const boxEffectTilt = css`
  :hover {
    transform: scale(1.05) rotate(-2deg);
  }
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <div css={headerItemStyle}>
          <a>
            <img
              src="https://landingpage.fyi/images/logo-fyi.svg"
              alt="landing page fyi logo"
            />
          </a>
          <nav>Landing Page Tools</nav>
          <nav>Landing Page Checklist</nav>
          <nav>Blog</nav>
        </div>
        <div css={headerItemStyle}>
          <nav>Submit</nav>
          <button>Subscribe</button>
        </div>
      </header>

      <main>
        <section css={firstSectionStyles}>
          <div css={leftContainer}>
            <span css={blueBadge}>Landing Page Tools</span>
            <h1 css={h1Heading}>Best collection of landing page tools.</h1>
            <p css={[paragraph, largeText]}>
              Build your best landing page with these hand-picked examples, and
              learn from the pros.
            </p>
            <button css={[boxTemplate, boxButton]}>Discover tools</button>
          </div>
          <div css={[boxTemplate, boxEffectTilted, boxEffectTilt]}>
            <div css={iconHeaderBox}>
              <img src="/landingIcon.svg" alt="company logo" />
              <h3>100+ Landing Page Tools</h3>
            </div>
            <p css={blueParagraph}>STEP BY STEP</p>
            <p css={paragraph}>
              A curated library of landing page resources. You'll have
              up-to-date landing pages in no time.
            </p>
          </div>
        </section>
      </main>
      <footer style={{ minHeight: '200px', border: '2px solid purple' }}>
        Footer
      </footer>
    </>
  );
}

export default App;
