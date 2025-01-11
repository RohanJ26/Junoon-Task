const Card = ({ children, className }) => {
    return <div className={`rounded-lg border p-4 shadow ${className}`}>{children}</div>;
};
  
export const CardHeader = ({ children, className }) => {
    return <div className={`border-b pb-2 text-lg font-semibold ${className}`}>{children}</div>;
};
  
export const CardContent = ({ children, className }) => {
    return <div className={`py-2 ${className}`}>{children}</div>;
};
export const Skeleton = ({ className }) => {
    return (
      <div
        className={`animate-pulse bg-gray-300 rounded ${className}`}
      ></div>
    );
};
  
export default Card;
  