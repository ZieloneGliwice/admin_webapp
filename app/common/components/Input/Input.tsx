import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef(
  ({ label, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="relative">
        <input
          id={props.name}
          className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-200 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor={props.name}
          className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600"
        >
          Default filled
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
