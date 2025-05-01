import { AlertTriangle } from "lucide-react";
import { ReactNode } from "react";

const ErrorMessage = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <AlertTriangle className="text-destructive w-16 h-16" />
        <span className="mt-4 text-destructive  text-2xl">
          {children ? children : "Something went wrong!"}
        </span>
      </div>
    </div>
  );
};

export default ErrorMessage;