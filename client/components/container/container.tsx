export interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => <div className="max-w-[800px] w-full mx-auto">{children}</div>

export default Container
