interface LoadingProps {
  style?: string;
}
export const LoadingBar = ({ style }: LoadingProps) => {
  return (
    <div className={'relative w-full bg-gray-200 rounded ' + style}>
      <div className="absolute top-0 h-1.5 rounded shim-blue"></div>
    </div>
  );
};
