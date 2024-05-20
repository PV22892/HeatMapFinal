type ContainerProps = {
    children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
    return (
        <div className="max-w-[1500px] mx-auto min-h-screen flex flex-col">
            {children}
        </div>
    );
}