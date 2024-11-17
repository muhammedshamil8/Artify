import classNames from "classnames";

const Button = ({ children, className, ...props }) => {
    return (
        <button className={classNames('border bg-white border-[#515050] rounded-full min-w-[180px] flex gap-2 items-center justify-between py-1 px-2 shadow-sm shadow-[#fe346d65]', className)} {...props}>
            {children}
        </button>
    );

}

export default Button;