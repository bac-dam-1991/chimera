import { Box, CircularProgress, Typography } from '@mui/material';

export const CircularLoader = () => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				gap: 2,
				padding: 5,
				flexDirection: 'column',
			}}
		>
			<CircularProgress />
			<Typography variant="caption">Loading</Typography>
		</Box>
	);
};
