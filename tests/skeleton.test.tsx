import { render, screen } from "@testing-library/react";
import { SkeletonAboutSection, SkeletonProjectsSection, SkeletonContactSection } from "@/components/ui/Skeleton";

describe("Skeleton Components", () => {
  it("renders SkeletonAboutSection", () => {
    render(<SkeletonAboutSection />);
    expect(screen.getByTestId("skeleton-about")).toBeInTheDocument();
  });

  it("renders SkeletonProjectsSection", () => {
    render(<SkeletonProjectsSection />);
    expect(screen.getByTestId("skeleton-projects")).toBeInTheDocument();
  });

  it("renders SkeletonContactSection", () => {
    render(<SkeletonContactSection />);
    expect(screen.getByTestId("skeleton-contact")).toBeInTheDocument();
  });
});
