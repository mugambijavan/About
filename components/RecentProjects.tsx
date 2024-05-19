"use client";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <iframe
          src="https://projects-exhibit.vercel.app/"
          title="Embedded Website"
          width="100%"
          height="700" // You can adjust the height as needed
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default RecentProjects;
