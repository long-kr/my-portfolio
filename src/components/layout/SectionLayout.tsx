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
        <h2 className='text-3xl font-semibold'>{title}</h2>
      </div>

      {children}
    </ScrollAnimationWrapper>
  );
};
