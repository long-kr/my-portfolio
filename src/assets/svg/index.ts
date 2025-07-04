import { socialIcon } from "./socialIcon";
import { techIcon } from "./techIcon";

export const icons = { ...techIcon, ...socialIcon };

export type IconKeys = keyof typeof icons;

export const iconKeys = Object.keys(icons).reduce(
  (acc, key) => {
    acc[key as IconKeys] = key as IconKeys;
    return acc;
  },
  {} as Record<IconKeys, IconKeys>,
);
