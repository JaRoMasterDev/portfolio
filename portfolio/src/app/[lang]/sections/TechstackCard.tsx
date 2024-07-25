interface StackCardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function StackCard(props: StackCardProps) {
  return (
    <div
      className={
        "bg-gray-700 w-48 h-16 rounded-xl flex items-center justify-center text-white text-lg " +
        props.className
      }
    >
      {props.children}
    </div>
  );
}
