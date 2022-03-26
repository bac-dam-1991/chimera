import React, { ReactNode } from 'react';
import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {}

export const Button = ({ children }: ButtonProps) => {
	return <MuiButton>{children}</MuiButton>;
};
