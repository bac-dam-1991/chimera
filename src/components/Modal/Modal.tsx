import {
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	DialogProps,
	Stack,
} from '@mui/material';
import { forwardRef, HTMLAttributes } from 'react';
import { LoadingButton } from '@mui/lab';

export type ModalMode = 'add' | 'edit' | 'close' | 'delete' | 'archive';

interface NativeButtonProps extends HTMLAttributes<HTMLButtonElement> {
	type?: 'button' | 'reset' | 'submit';
	form?: string;
}

export const NativeButton = forwardRef(
	({ children, ...rest }: NativeButtonProps, ref) => {
		return <button {...rest}>{children}</button>;
	}
);

export interface ModalProps extends DialogProps {
	title: string;
	onDiscard?: () => Promise<void>;
	onConfirm?: () => Promise<void>;
	onCancel?: () => void;
	loading?: boolean;
	formId?: string;
}

export const Modal = ({
	title,
	children,
	onDiscard,
	onConfirm,
	onCancel,
	loading,
	fullWidth = true,
	maxWidth = 'sm',
	formId,
	...rest
}: ModalProps) => {
	return (
		<Dialog fullWidth={fullWidth} maxWidth={maxWidth} {...rest}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Stack
					direction="row"
					justifyContent={'space-between'}
					sx={{ width: '100%' }}
				>
					{onDiscard && (
						<LoadingButton
							loading={loading}
							variant="outlined"
							color="error"
							onClick={onDiscard}
						>
							Discard
						</LoadingButton>
					)}
					<Stack direction="row" spacing={1} sx={{ marginLeft: 'auto' }}>
						{onCancel && (
							<LoadingButton
								loading={loading}
								variant="outlined"
								onClick={onCancel}
							>
								Cancel
							</LoadingButton>
						)}
						{(onConfirm || formId) && (
							<LoadingButton
								component={NativeButton}
								variant="contained"
								loading={loading}
								onClick={onConfirm}
								type="submit"
								form={formId}
							>
								Confirm
							</LoadingButton>
						)}
					</Stack>
				</Stack>
			</DialogActions>
		</Dialog>
	);
};
