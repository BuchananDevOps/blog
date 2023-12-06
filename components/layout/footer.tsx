import { FC } from "react"

import clsx from "clsx"

import Logo from "@/components/brand/logo"

type Props = {
  className?: string
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer
      className={clsx("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
    >
      <div className="border-t border-slate-200 pt-10 pb-16 dark:border-slate-200/5">
        <FooterContent />
      </div>
    </footer>
  )
}

const FooterContent: FC = () => {
  return (
    <div className="max-w-container flex flex-col text-center items-center">
      <Logo className="h-4 w-auto mx-auto" />
      <p className="mt-4 text-sm leading-6 text-slate-500">
        &copy; {new Date().getFullYear()} Buchanan DevOps, Inc. All rights
        reserved.
      </p>
    </div>
  )
}

export default Footer
