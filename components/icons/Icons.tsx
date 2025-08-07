
import React, { memo } from 'react';
import { IconProps } from '../../types.ts';

export const SparklesIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3L9.5 9.5L3 12L9.5 14.5L12 21L14.5 14.5L21 12L14.5 9.5L12 3z"/>
        <path d="M4 4L5 6"/><path d="M19 4L18 6"/>
        <path d="M4 19L5 17"/><path d="M19 19L18 17"/>
    </svg>
));

export const MenuIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
));

export const BrainIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9.8 2.3c.4-.3.9-.3 1.3 0l3.1 2.3c.4.3.6.8.6 1.3V8c0 .6-.2 1.1-.6 1.5l-3.1 2.3c-.4.3-.9.3-1.3 0L6.7 9.5c-.4-.3-.6-.8-.6-1.3V6c0-.6.2-1.1.6-1.5l3.1-2.2Z"/>
        <path d="m6.5 16.5-3.4-2.5c-.4-.3-.6-.8-.6-1.3V10c0-.6.2-1.1.6-1.5L6.5 6"/>
        <path d="m17.5 16.5 3.4-2.5c.4-.3.6-.8-.6-1.3V10c0-.6-.2-1.1-.6-1.5L17.5 6"/>
        <path d="M12 13v9"/><path d="M12 2v2.5"/>
        <path d="m4.5 8.5-2.2 1.3"/><path d="m19.5 8.5 2.2 1.3"/>
        <path d="m4.5 15.5-2.2-1.3"/><path d="m19.5 15.5 2.2-1.3"/>
    </svg>
));

export const DnaIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2v20"/>
        <path d="M17 5c-2.1 1.3-3 2.5-3 5a5 5 0 0 1-10 0c0-2.5.9-3.7 3-5"/>
        <path d="M7 19c2.1-1.3 3-2.5 3-5a5 5 0 0 1 10 0c0 2.5-.9 3.7-3 5"/>
    </svg>
));

export const ActivityIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
));

export const LightbulbIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/><path d="M10 22h4"/>
  </svg>
));

export const UsersIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
));

export const AwardIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17.35 22l-5.35-3-5.35 3 1.873-9.11Z"/>
  </svg>
));

export const ClockIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
));

export const CheckCircleIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
  </svg>
));

export const DownloadIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/>
    <line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
));

export const MailIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
));

export const PhoneIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.65A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
));

export const MapPinIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
));

export const ChevronLeftIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15 18-6-6 6-6"/>
  </svg>
));

export const ChevronRightIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
));

export const ChevronDownIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
));

export const LinkedinIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
));

export const XIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
));

export const GithubIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
));

export const OrcidIcon: React.FC<IconProps> = memo(({ size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path fill="#A6CE39" d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z"/>
        <path fill="#FFF" d="M9.1,17.2H6.9V9.2h2.2V17.2z M8,8.2C7.3,8.2,6.7,7.6,6.7,7s0.6-1.2,1.3-1.2s1.3,0.5,1.3,1.2S8.7,8.2,8,8.2z"/>
        <path fill="#FFF" d="M17.1,17.2h-2.2v-4.5c0-1.1-0.4-1.8-1.4-1.8c-0.7,0-1.2,0.5-1.4,1c-0.1,0.2-0.1,0.4-0.1,0.7v4.6h-2.2V9.2h2.2 v1.2c0.3-0.6,1-1.4,2.1-1.4c1.5,0,2.8,1.3,2.8,4.1V17.2z"/>
    </svg>
));

export const DocumentStackIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
));

export const BookOpenIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
));

export const BriefcaseIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
));

export const UploadCloudIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
));

export const CpuIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
));

export const FlaskConicalIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 2v7.38c0 .59.23 1.16.65 1.58L15.5 17.5V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2.5L13.35 11c.42-.42.65-.99.65-1.58V2h-4zM8.5 2h7"/></svg>
));

export const ShapesIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.28 12-4.24-4.24-4.24 4.24 4.24 4.24 4.24-4.24Z"/><path d="m12.72 2.72-4.24 4.24 4.24 4.24 4.24-4.24-4.24-4.24Z"/><path d="m6.72 8.48-4.24 4.24 4.24 4.24 4.24-4.24-4.24-4.24Z"/></svg>
));

export const LayersIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
));

export const BookTextIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5a2.5 2.5 0 0 1 0-5H20V9H6.5a2.5 2.5 0 0 1 0-5H20V2H6.5A2.5 2.5 0 0 1 4 4.5v15z"/><path d="M12 6h6"/><path d="M12 12h6"/></svg>
));

export const HeartPulseIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
));

export const HandshakeIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 15.5 10 20l-4-4 4-4"/><path d="M10 10.5 14.5 6l4 4-4 4"/><path d="M2 12h8"/><path d="M14 12h8"/></svg>
));

export const ClipboardEditIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M8 12h8"/><path d="M8 16h4"/></svg>
));

export const TargetIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
));

export const UsersCogIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><circle cx="20" cy="18" r="3"/><path d="M22 15.75a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2.5"/><path d="M18 15.75a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.5"/></svg>
));

export const UsersRoundIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 22H8a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4z"/></svg>
));

export const GaugeIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7z"/><path d="M12 2a10 10 0 0 1 10 10v1H2v-1A10 10 0 0 1 12 2z"/><path d="m14 12-2-4-2 4"/></svg>
));

export const RefreshCwIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
));

export const BinocularsIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m4 12 4-4 4 4-4 4-4-4zm8 0 4-4 4 4-4 4-4-4zm-2-4 4 0zm0 8 4 0z"/></svg>
));

export const PencilIcon: React.FC<IconProps> = memo(({ color = 'currentColor', size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
));