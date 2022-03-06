import { HTMLProps } from 'react';

type Props = {
  input?: string,
  name: string,
  label: string,
} & HTMLProps<any>;

const ContactFormInput: React.FC<Props> = ({
  input, name, label, ...props
}: Props) => (
  <div className="relative z-0 mb-6 w-full group">
    <input
      name={name}
      className="block py-2.5 px-0 w-full appearance-none
        text-sm tracking-wider text-gray-900 bg-transparent border-0 border-b-2 border-purple-300
        dark:text-white dark:border-yellow-200 dark:focus:border-yellow-400
        focus:outline-none focus:ring-0 focus:border-purple-500 peer"
      placeholder=" "
      required
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
    <label
      htmlFor={name}
      className="absolute font-thin text-sm tracking-wider
      text-gray-100 dark:text-gray-200
      duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
      peer-focus:left-0 peer-focus:text-purple-500
      dark:peer-focus:text-yellow-400 peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

ContactFormInput.defaultProps = {
  input: 'input',
};

export default ContactFormInput;
