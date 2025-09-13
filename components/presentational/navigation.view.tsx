import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { NavigationContainerProps } from "@/components/containers/interfaces";

export const NavigationView = memo(function NavigationView({
  isMenuOpen,
  activeSection,
  language,
  navItems,
  onToggleMenu,
  onScrollToSection,
  onToggleLanguage,
}: NavigationContainerProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-foreground">MALAURY.DEV</div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onScrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <span className="text-xs text-muted-foreground mr-2">{item.number}/</span>
                  {item.label}
                </button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleLanguage}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Globe className="h-4 w-4" />
                {language.toUpperCase()}
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={onToggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <span className="text-sm text-muted-foreground mr-3">{item.number}/</span>
                {item.label}
              </button>
            ))}
            <Button variant="ghost" onClick={onToggleLanguage} className="flex items-center gap-2 text-lg font-medium">
              <Globe className="h-5 w-5" />
              {language.toUpperCase()}
            </Button>
          </div>
        </div>
      )}
    </>
  );
});