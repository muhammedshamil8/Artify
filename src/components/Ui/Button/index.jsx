import classNames from "classnames";

const Button = ({ children, className, ...props }) => {
    return (
        <button className={classNames('border bg-white cursor-pointer border-[#3f3e3e] rounded-full min-w-[190px] flex gap-2 items-center justify-between py-1 px-2 shadow-sm shadow-[#fe346d65]', className)} {...props}>
            {children}
        </button>
    );

}

export default Button;