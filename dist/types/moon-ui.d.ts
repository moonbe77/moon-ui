import { default as default_2 } from 'react';

export declare const Button: default_2.FC<ButtonProps>;

declare interface ButtonProps {
    children: default_2.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

declare interface MenuItem {
    label: string;
    href?: string;
    dropdownItems?: {
        label: string;
        href: string;
    }[];
}

declare interface NavbarProps {
    menuItems: MenuItem[];
    logo?: default_2.ReactNode;
}

export declare const TopNavbar: default_2.FC<NavbarProps>;

export { }
