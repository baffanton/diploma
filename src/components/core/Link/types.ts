export interface ILink {
    children?: React.ReactNode;
    href: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}
