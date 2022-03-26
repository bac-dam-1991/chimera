import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		pageTitle?: CSSProperties;
		pageSubtitle?: CSSProperties;
		sectionHeading?: CSSProperties;
		sectionSubheading?: CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		pageTitle?: CSSProperties;
		pageSubtitle?: CSSProperties;
		sectionHeading?: CSSProperties;
		sectionSubheading?: CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		pageTitle: true;
		pageSubtitle: true;
		sectionHeading: true;
		sectionSubheading: true;
		h1: false;
		h2: false;
		h3: false;
		h4: false;
		h5: false;
		h6: false;
	}
}

const theme = createTheme();

theme.typography.pageTitle = {
	fontSize: '2rem',
	[theme.breakpoints.up('sm')]: {
		fontSize: '2.5rem',
	},
};
theme.typography.pageSubtitle = {
	fontSize: '1.75rem',
	[theme.breakpoints.up('sm')]: {
		fontSize: '2.25rem',
	},
};
theme.typography.sectionHeading = {
	fontSize: '1.5rem',
	[theme.breakpoints.up('sm')]: {
		fontSize: '2rem',
	},
};
theme.typography.sectionSubheading = {
	fontSize: '1.25rem',
	[theme.breakpoints.up('sm')]: {
		fontSize: '1.75rem',
	},
};
theme.typography.caption = {
	...theme.typography.caption,
	color: grey[400],
};

export const CustomTheme = theme;
