import { Container, ContainerProps, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface PageContainerProps extends ContainerProps {
	pageTitle: string;
	actions?: ReactNode;
}

export const PageContainer = ({
	children,
	maxWidth = 'md',
	pageTitle,
	actions,
	sx,
	...rest
}: PageContainerProps) => {
	return (
		<Container maxWidth={maxWidth} sx={{ marginTop: 5, ...sx }} {...rest}>
			<Stack direction="column" spacing={2}>
				<Stack
					direction="row"
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Typography variant="pageTitle">{pageTitle}</Typography>
					{actions && actions}
				</Stack>
				{children}
			</Stack>
		</Container>
	);
};
