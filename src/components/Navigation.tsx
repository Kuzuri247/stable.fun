import { Rocket, Repeat, Droplets, LayoutDashboard } from 'lucide-react';
import { ConnectButton } from './shared/ConnectButton';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">stable.fun</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              active={activeTab === 'launchpad'}
              onClick={() => onTabChange('launchpad')}
              icon={<Rocket />}
              text="Launchpad"
            />
            <NavLink
              active={activeTab === 'swap'}
              onClick={() => onTabChange('swap')}
              icon={<Repeat />}
              text="Swap"
            />
            <NavLink
              active={activeTab === 'liquidity'}
              onClick={() => onTabChange('liquidity')}
              icon={<Droplets />}
              text="Liquidity"
            />
            <NavLink
              active={activeTab === 'portfolio'}
              onClick={() => onTabChange('portfolio')}
              icon={<LayoutDashboard />}
              text="Portfolio"
            />
          </div>

          <ConnectButton />
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}

function NavLink({ active, onClick, icon, text }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 transition-colors ${
        active ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}