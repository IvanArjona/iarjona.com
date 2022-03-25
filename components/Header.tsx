type Props = {
  children: React.ReactNode
};

const Header: React.FC<Props> = ({ children }: Props) => (
  <h2
    className="text-center text-3xl p-4"
    data-aos="zoom-out-up"
  >
    {children}
  </h2>
);

export default Header;
