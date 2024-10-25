"use client";

import { ThemeContext } from ".";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);
