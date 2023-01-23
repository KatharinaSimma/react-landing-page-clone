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
  font-size: 1.1rem;
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
    padding: 0.75rem 1.25rem;
    margin-left: 2rem;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 0.75rem;
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

      <main style={{ minHeight: '200px', border: '2px solid purple' }}>
        Main
      </main>
      <footer style={{ minHeight: '200px', border: '2px solid purple' }}>
        Footer
      </footer>
    </>
  );
}

export default App;
