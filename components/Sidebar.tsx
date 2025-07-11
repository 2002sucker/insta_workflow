// components/Sidebar.tsx

'use client';

import {
  BarChart3,
  Bot,
  Home,
  LifeBuoy,
  MessageSquare,
  Settings,
  UserCircle,
} from 'lucide-react';

// Define the type for a navigation item
interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

// Reusable NavItem component
function NavItem({ icon: Icon, label, active = false }: NavItemProps) {
  return (
    <button
      aria-label={label}
      className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-200 ${
        active
          ? 'bg-gray-700 text-white'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
}

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center w-20 h-screen py-6 fixed bg-gray-900 border-r border-gray-800">
      {/* Logo */}
      <div className="p-2 mb-6 bg-gray-800 rounded-lg">
        <Bot className="w-8 h-8 text-white" />
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col items-center flex-1 space-y-4">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={BarChart3} label="Analytics" />
        <NavItem icon={MessageSquare} label="Comments" />
        <NavItem icon={Settings} label="Settings" />
      </nav>

      {/* Footer Navigation */}
      <div className="flex flex-col items-center space-y-4">
        <NavItem icon={LifeBuoy} label="Help" />
        <button aria-label="User Profile">
          <UserCircle className="w-10 h-10 text-gray-400" />
        </button>
      </div>
    </aside>
  );
}
