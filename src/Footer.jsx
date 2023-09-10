import "./footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <a
        href="https://github.com/vicentevill"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="__social" src="/github-mark-white.svg" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/vicente-villarreal-44b804266/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="__social" src="/linkedin.svg" alt="" />
      </a>
      <a
        href="https://my-website-pi-three.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="__social" src="/my-site.svg" alt="" />
      </a>
    </footer>
  );
}

export default Footer;
