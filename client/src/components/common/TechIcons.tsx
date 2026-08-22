import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ReactIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="-11.5 -10.23 23 20.47" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const TSIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M8 8h4M10 8v8M15 8h3v4a2 2 0 0 1-2 2h-1" />
  </svg>
);

export const JSIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M15 8c0 3-1.5 5-4 5h-1v3M9 8h2" />
  </svg>
);

export const TailwindIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3c-1.2 0-2.4.6-3 1.8L3 13.8c-.6 1.2-.6 2.6 0 3.8l3 5.4c.6 1.2 1.8 1.8 3 1.8h6c1.2 0 2.4-.6 3-1.8l3-5.4c.6-1.2.6-2.6 0-3.8l-3-5.4C17.4 3.6 16.2 3 15 3h-3z" />
    <path d="m8 12 4 4 4-4" />
  </svg>
);

export const NextIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 16V8l8 8V8" />
  </svg>
);

export const HTMLIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

export const CSSIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const NodeIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" />
    <path d="M12 6v12M8.5 8.5l7 7" />
  </svg>
);

export const ExpressIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const MongoIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C8.5 5 6 9 6 13c0 3.5 2.5 6 6 8 3.5-2 6-4.5 6-8 0-4-2.5-8-6-11z" />
    <path d="M12 6v10" />
  </svg>
);

export const GitIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9M6 9v6" />
  </svg>
);

export const FigmaIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 0 1 0 7H12V2z" />
    <path d="M12 9h3.5a3.5 3.5 0 0 1 0 7H12V9z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 5 19.5z" />
  </svg>
);

export const DockerIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 12.5c0 3-2.5 5.5-5.5 5.5h-9A5.5 5.5 0 0 1 2 12.5 5.5 5.5 0 0 1 7.5 7h.5v2h-.5A3.5 3.5 0 0 0 4 12.5a3.5 3.5 0 0 0 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5 0-.8-.3-1.6-.8-2.2l1.4-1.4c.9 1 1.4 2.3 1.4 3.6z" />
    <rect x="7" y="3" width="2" height="2" />
    <rect x="10" y="3" width="2" height="2" />
    <rect x="13" y="3" width="2" height="2" />
  </svg>
);

export const PostmanIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const GenericCodeIcon = ({ size = 20, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const getIconByName = (name: string, size = 18): React.ReactNode => {
  const normalized = name.toLowerCase().replace(/[\s.-]/g, "");
  if (normalized.includes("react")) return <ReactIcon size={size} />;
  if (normalized.includes("typescript")) return <TSIcon size={size} />;
  if (normalized.includes("javascript")) return <JSIcon size={size} />;
  if (normalized.includes("tailwind")) return <TailwindIcon size={size} />;
  if (normalized.includes("next")) return <NextIcon size={size} />;
  if (normalized.includes("html")) return <HTMLIcon size={size} />;
  if (normalized.includes("css")) return <CSSIcon size={size} />;
  if (normalized.includes("node")) return <NodeIcon size={size} />;
  if (normalized.includes("express")) return <ExpressIcon size={size} />;
  if (normalized.includes("mongo")) return <MongoIcon size={size} />;
  if (normalized.includes("git")) return <GitIcon size={size} />;
  if (normalized.includes("figma")) return <FigmaIcon size={size} />;
  if (normalized.includes("docker")) return <DockerIcon size={size} />;
  if (normalized.includes("postman")) return <PostmanIcon size={size} />;
  return <GenericCodeIcon size={size} />;
};
