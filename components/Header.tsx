type Props = {
  children: React.ReactNode
};

const Header: React.FC<Props> = ({ children }: Props) => (
  <h2
    className="text-center text-3xl p-4"
  >
    {children}
  </h2>
);

export default Header;
