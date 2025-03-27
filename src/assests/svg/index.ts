
import { techIcon } from './techIcon'

export const icons = {...techIcon}
export type IconKeys = keyof typeof icons
export const iconKeys = Object.keys(icons) as Array<IconKeys>;
