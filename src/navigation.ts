// Single source of truth for the nav tabs.
// Add / reorder / rename here and both the menu and the routes follow.
export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'O nas', path: '/o-nas' },
  { label: 'Dlaczego ACT?', path: '/dlaczego-act' },
  { label: 'Szkolenia i warsztaty', path: '/szkolenia-i-warsztaty' },
  { label: 'Mentoring', path: '/mentoring' },
  { label: 'Artykuły', path: '/artykuly' },
  { label: 'Kontakt', path: '/kontakt' },
];
