import { ScrollAnimationWrapper } from "../theme";

export const SectionLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <ScrollAnimationWrapper>
      <div className='mb-12 text-center'>
        <h3 className='text-3xl font-semibold'>{title}</h3>
      </div>

      {children}
    </ScrollAnimationWrapper>
  );
};
