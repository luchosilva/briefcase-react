interface Item {
  children: any;
}

export const ResponsiveTable = ({ children }: Item) => {
  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1">{children}</div>
    </div>
  );
};
