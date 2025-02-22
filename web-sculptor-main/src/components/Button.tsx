import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { MdArrowForwardIos } from "react-icons/md";

type ButtonProps = {
    linkField: LinkField;
    label: KeyTextField;
    showIcon?: boolean;
    className?: string;
}

export default function Button ({linkField, label, showIcon, className}:ButtonProps){
    return(
        <PrismicNextLink
            field={linkField}
            className={clsx(
            "group relative flex w-fit items-center justify-center overflow-hidden rounded-lg border-2 border-stone-700 bg-stone-900  px-10 py-2 font-bold transition-transform ease-out  hover:scale-105",
            className,)}>
            <span className="absolute inset-0 z-0 h-full translate-y-20 bg-yellow-500 transition-transform  duration-300 ease-in-out group-hover:translate-y-0"></span>
            <span className="relative flex items-start justify-center gap-2">
                {label} {showIcon && <MdArrowForwardIos className="inline-block" />}
            </span>
        </PrismicNextLink>
    )
}
