// components/MenuItem.js
import { FaAngleDown } from 'react-icons/fa';
import { IoIosBook } from 'react-icons/io';

export const menuItem = {
    label: "Category",
    labelIcon: FaAngleDown,
    href: "/ui/Sales",
    icon: IoIosBook,
};
// components/MenuItem.js
import Link from "next/link";

export default function MenuItem({ item }) {
    const { label, labelIcon: LabelIcon, href, icon: Icon } = item;

    return (
        <Link href={href}>
            <p>Category Page</p>
        </Link>
    );
}
