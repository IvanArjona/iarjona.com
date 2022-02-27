type Props = {
  open: boolean,
};

const CollapsibleNavbarHamburguer: React.FC<Props> = ({ open }: Props) => {
  const genericHamburgerLine = 'h-1 w-9 my-1 rounded-full bg-white transition ease transform duration-300';
  const groupHover = 'group-hover:opacity-80 group-hover:scale-125';

  return (
    <div
      className="flex flex-col h-12 w-12 justify-center items-center group"
    >
      <span
        className={`${genericHamburgerLine} ${groupHover} ${
          open ? 'rotate-45 translate-y-3' : ''
        }`}
      />
      <span
        className={`${genericHamburgerLine} ${
          open ? 'opacity-0' : 'group-hover:opacity-80 group-hover:scale-125'
        }`}
      />
      <span
        className={`${genericHamburgerLine} ${groupHover} ${
          open
            ? '-rotate-45 -translate-y-3'
            : ''
        }`}
      />
    </div>
  );
};

export default CollapsibleNavbarHamburguer;
