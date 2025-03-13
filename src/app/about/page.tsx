import AboutPageLayout from "@/components/layout/AboutPageLayout";

const About = () => {
  return (
    <AboutPageLayout>
      <div className="flex flex-col justify-end gap-5">
        <h1>Long T Huynh</h1>

        <p>Fullstack Developer</p>

        <p>Vietnamese, A developer obssessed with solving problems.</p>
      </div>

      <div>description</div>
    </AboutPageLayout>
  );
};

export default About;
