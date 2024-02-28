interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
      <div
        className={'px-4 sm:mx-auto sm:px-0 w-full max-w-7xl'}
      >
        {children}
      </div>
  );
};

export default Container;
