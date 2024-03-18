interface TableProps {
  headers: any;
  children?: any;
}

const header = (items: any) => {
  return items?.map((item: any, index: number) => (
    <th className={'px-6 py-3 ' + item.style} scope="col" key={index}>
      {item.name}
    </th>
  ));
};

export const Table = ({ headers, children }: TableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md">
      <table className="table-auto w-full text-sm text-left text-dark-color">
        <thead>
          <tr>{header(headers)}</tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
