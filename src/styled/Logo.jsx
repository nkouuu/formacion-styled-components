import React from 'react';
import { withTheme } from "styled-components";
import { Logo } from "./styles_theme";

export default withTheme(({ theme }) => <Logo src={theme.logo} />);
