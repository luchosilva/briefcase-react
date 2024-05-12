'use client';
import { MoonIcon, SunIcon, LanguageIcon } from '@heroicons/react/20/solid';
import { FaReact } from 'react-icons/fa';
import { useContext, useMemo } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';

interface NavbarProps {
  open: boolean;
  setOpen: any;
}

export const Navbar = ({ open, setOpen }: NavbarProps) => {
  const { t, i18n } = useTranslation('navbar');
  const iconContextValue = useMemo(() => ({ className: 'w-7 h-7 md:w-12 md:h-12 rounded-md hover:text-blue-color' }), []);

  const availableLocales = i18n.options.supportedLngs || [];

  const changeLocale = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  const { changeTheme, theme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center h-20 py-4 bg-blue-600-color px-7">
      <div className="flex items-center">
        <IconContext.Provider value={iconContextValue}>
          <div>
            <FaReact />
          </div>
        </IconContext.Provider>
        {theme === 'dark' ? <MoonIcon className="w-7 h-7 md:w-12 md:h-12 rounded-md hover:text-blue-color" /> : <SunIcon className="w-7 h-7 md:w-12 md:h-12 rounded-md hover:text-blue-color" />}
        {i18n.language === 'es' ? (
          <div className="w-7 h-7 md:w-14 md:h-14 text-xl md:text-5xl rounded-md hover:text-blue-color">🇪🇸</div>
        ) : (
          <div className="w-7 h-7 md:w-14 md:h-14 text-xl md:text-5xl rounded-md hover:text-blue-color">🇺🇸</div>
        )}
      </div>
      {/* <Bars4Icon onClick={() => setOpen(!open)} className="w-12 min-w-[40px] rounded-md hover:text-blue-color cursor-pointer" /> */}
      <div className="flex items-center">
        {/* Language Selector */}
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost">
            <LanguageIcon className="w-5 h-5" />
          </button>
          <ul className="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-lg w-40 border dark:border-none">
            {availableLocales.map((availableLocale: string) => {
              if (availableLocale === i18n.language || availableLocale === 'cimode') return null;
              return (
                <li key={availableLocale}>
                  <button
                    tabIndex={0}
                    onClick={() => changeLocale(availableLocale)}
                    onKeyUp={() => changeLocale(availableLocale)}
                    onKeyDown={() => changeLocale(availableLocale)}
                    className="cursor-pointer"
                  >
                    {availableLocale === 'es' ? 'Spanish' : 'Inglés'} {availableLocale === 'es' ? '🇪🇸' : '🇺🇸'}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Theme Selector */}
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost">
            <SunIcon className="w-5 h-5" />
          </button>
          <ul className="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-box w-40 border dark:border-none">
            <li>
              <button onClick={() => changeTheme('light')} className="cursor-pointer" onKeyDown={() => changeTheme('light')}>
                <SunIcon className="w-5 h-5" />
                {t('themeSelector.light')}
              </button>
            </li>
            <li>
              <button onClick={() => changeTheme('dark')} className="cursor-pointer" onKeyDown={() => changeTheme('dark')}>
                <MoonIcon className="w-5 h-5" />
                {t('themeSelector.dark')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
