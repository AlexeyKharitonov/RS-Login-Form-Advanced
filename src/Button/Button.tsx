import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="py-4 px-5 opacity-85 hover:opacity-100 hover:text-[#f5f5f5] rounded-2xl font-bold text-base transition duration-300 ease-in-out bg-[#4361ee] text-white"
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};
