import { HTMLAttributes } from 'react'
import { FormControl, MenuItem } from '@mui/material';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';
import { FilterParams } from '../../types/types';
import styles from './Select.module.css';

interface MySelectProps extends HTMLAttributes<HTMLDivElement> {
	value: string | number,
	variants: FilterParams[],
	variantName: string,
	handleChange: (fieldName: string, value: string) => void,
	name: string,
	size?: 'small' | 'medium',
	width?: number,
	label?: string,
	labelMinWidth?: number
}

export default function Select({ value, variants, variantName, handleChange, name, size = 'small', width = 200, label, labelMinWidth = 0, ...props }: MySelectProps) {
	return (
		<div className={styles.wrapper} {...props}>
			{label && <label className={styles.label} htmlFor={name} style={{ minWidth: labelMinWidth + 'px' }}>{label + ':'}</label>}
			<FormControl size={size} sx={{ width }}>
				<MUISelect
					MenuProps={{ sx: { height: 400 }, MenuListProps: { style: { backgroundColor: 'var(--background-dark)', color: 'var(--fontcolor)' } } }}
					value={value || ''}
					name={name}
					id={name}
					displayEmpty
					onChange={(event: SelectChangeEvent) => handleChange(event.target.name, event.target.value)}
					style={{ height: '30px', backgroundColor: 'var(--background-dark)', color: 'var(--fontcolor)' }}
				>
					<MenuItem value={''}>{'—'}</MenuItem>
					{variants.map(e => <MenuItem key={e.id} value={e.id}>{e[variantName]}</MenuItem>)}
				</MUISelect>
			</FormControl>
		</div>
	)
}
