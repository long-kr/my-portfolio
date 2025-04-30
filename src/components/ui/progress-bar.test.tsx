import { ProgressBar } from "@/components/ui/ProgressBar";
import { render } from "@testing-library/react";

describe("ProgressBar", () => {
  it("renders without crashing", () => {
    render(<ProgressBar />);
  });
});
