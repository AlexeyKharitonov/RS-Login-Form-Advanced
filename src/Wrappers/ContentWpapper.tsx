const ContentWpapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-8 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default ContentWpapper;
