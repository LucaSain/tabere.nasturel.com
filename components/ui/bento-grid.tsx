import { cn } from "@/lib/utils";
import { ModalTrigger } from "./animated-modal";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: string;
}) => {
  return (
    <ModalTrigger
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input :shadow-none p-4 :bg-black :border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      id={id + ""}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="text-start font-sans font-bold   mb-2 mt-2">
          {title}
        </div>
        <div className="text-start font-sans font-normal  text-xs ">
          {description}
        </div>
      </div>
    </ModalTrigger>
  );
};
