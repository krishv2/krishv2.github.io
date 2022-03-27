import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const ToggleButton: any = styled.button`
  --toggle-width: 70px;
  --toggle-height: 30px;
  --toggle-padding: 2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.50s ease-in-out box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(p: { activeTheme: string | undefined }) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState<string | undefined>(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setActiveTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    if (activeTheme) {
      window.localStorage.setItem("theme", activeTheme);
    }
  }, [activeTheme]);

  return (
    <ToggleButton
      aria-label={`Toggle to ${inactiveTheme} mode`}
      title={`Toggle to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}>
      <ToggleThumb activeTheme={activeTheme} />
      <span arial-hidden={true} style={{ fontSize: '15px' }}>🌙</span>
      <span arial-hidden={true} style={{ fontSize: '15px' }}>☀️</span>
    </ToggleButton>
  );
};

export default ThemeToggle;