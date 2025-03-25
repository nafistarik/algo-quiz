interface EmptyStateMessageProps {
    message: string;
  }
  
  const EmptyStateMessage = ({ message }: EmptyStateMessageProps) => {
    return (
      <div className="w-full pb-6 rounded-lg">
        <p className="text-gray-500 text-xl font-bold">{message}</p>
      </div>
    );
  };
  
  export default EmptyStateMessage;