import { Link } from "@tanstack/react-router";

export function InstagramLink() {
  return (
    <a
      href="https://www.instagram.com/base.zeroum/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="B01 no Instagram"
      className="inline-flex items-center gap-2 text-sm text-on-dark-muted transition hover:text-brand-blue"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
      <span>@base.zeroum</span>
    </a>
  );
}

export function EmailLink() {
  return (
    <a
      href="mailto:felipe.garcez@basezeroum.com.br"
      className="text-sm text-brand-blue hover:underline"
    >
      felipe.garcez@basezeroum.com.br
    </a>
  );
}

export function BlogLink() {
  return (
    <Link
      to="/blog"
      className="text-sm text-brand-blue hover:underline"
    >
      Blog
    </Link>
  );
}
