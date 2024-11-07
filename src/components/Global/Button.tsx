import Link from "next/link";

type LinkButtonPropsType = {
    href:string;
    btnText:string;
    title?:string;
    className?:string;
}

const LinkButton = ({btnText,href='#',title,className}:LinkButtonPropsType) => {
  return (
    <Link href={href} title={title} className={`hover:bg-white hover:text-black border-2 border-white font-bold tracking-[1.5px] text-[14px] uppercase px-11 py-4 ${className}`}>{btnText}</Link>
  )
}

export default LinkButton