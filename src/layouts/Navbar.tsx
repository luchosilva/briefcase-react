'use client';
import { MoonIcon, SunIcon, LanguageIcon } from '@heroicons/react/20/solid';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  open: boolean;
  setOpen: any;
}

export const Navbar = ({ open, setOpen }: NavbarProps) => {
  const { i18n } = useTranslation('navbar');

  const availableLocales = i18n.options.supportedLngs || [];

  const changeLocale = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  const { changeTheme, theme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center h-20 py-4 bg-blue-600-color px-7">
      {theme === 'dark' ? <MoonIcon className="w-12 min-w-[40px] rounded-md hover:text-blue-color" /> : <SunIcon className="w-12 min-w-[40px] rounded-md hover:text-blue-color" />}
      {/* <Bars4Icon onClick={() => setOpen(!open)} className="w-12 min-w-[40px] rounded-md hover:text-blue-color cursor-pointer" /> */}
      <div className="flex items-center gap-3">
        {/* Language Selector */}
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost">
            <LanguageIcon className="w-5 h-5" />
          </button>
          <ul className="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-gray-50 bg-opacity-10 rounded-lg w-40 border dark:border-none">
            {availableLocales.map((availableLocale: string) => {
              return (
                <li key={availableLocale}>
                  <button
                    tabIndex={0}
                    onClick={() => changeLocale(availableLocale)}
                    onKeyUp={() => changeLocale(availableLocale)}
                    onKeyDown={() => changeLocale(availableLocale)}
                    className="cursor-pointer"
                  >
                    {availableLocale}
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
          <ul className="menu menu-compact dropdown-content z-[1] mt-3 p-2 shadow bg-gray-50 bg-opacity-10 rounded-box w-40">
            <li>
              <button onClick={() => changeTheme('light')} className="cursor-pointer" onKeyDown={() => changeTheme('light')}>
                <SunIcon className="w-5 h-5" />
                {/* $t('landing.nav.themeSelector.light') */}
                Light
              </button>
            </li>
            <li>
              <button onClick={() => changeTheme('dark')} className="cursor-pointer" onKeyDown={() => changeTheme('dark')}>
                <MoonIcon className="w-5 h-5" />
                {/*$t('landing.nav.themeSelector.dark')*/}
                Dark
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
