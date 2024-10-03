import React from "react";

const InterviewProcess = () => {
  const interviewSteps = [
    {
      iconClass: "review-icon",
      bgColor: "bg-[#0F0F0F] dark:bg-[#0577FF]",
      textColor: "text-white",
      title: "Review",
      description:
        "We start by thoroughly reviewing applications and resumes to find talent whose skills and experience align perfectly with our startup’s dynamic needs.",
    },
    {
      iconClass: "screening-icon",
      bgColor: "bg-[#FAFAFA] dark:bg-[#121B26]",
      textColor: "text-black dark:text-white",
      title: "Screening",
      description:
        "Next, we conduct a short phone or video call to evaluate core qualifications, communication abilities, and genuine enthusiasm for joining our journey.",
    },
    {
      iconClass: "assessment-icon",
      bgColor: "bg-[#FAFAFA] dark:bg-[#121B26]",
      textColor: "text-black dark:text-white",
      title: "Assessment",
      description:
        "Candidates move on to an in-depth technical assessment, where we explore problem-solving capabilities and hands-on expertise, ensuring alignment with the role’s demands.",
    },
    {
      iconClass: "offer-icon",
      bgColor: "bg-[#FAFAFA] dark:bg-[#121B26]",
      textColor: "text-black dark:text-white",
      title: "Offer",
      description:
        "After all stages, we make a well rounded decision based on the candidate's skills, cultural fit, and overall performance-selecting those ready to grow with us.",
    },
  ];

  return (
    <div className="flex flex-col gap-[26px] lg:gap-[50px] items-center px-5 lg:px-[150px] mt-[50px] lg:mt-[100px] w-full pb-[50px] lg:pb-[100px]">
      <h3 className="text-2xl lg:text-[40px]/[48.51px] font-bold text-center max-w-[986px]">
        Interview Process
      </h3>

      <div className="grid grid-cols-4 gap-[18px] w-full">
        {interviewSteps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col gap-3 lg:gap-[18px] h-full w-full ${step.bgColor} px-[11px] pt-[13px] pb-[60px] lg:pt-[38px] lg:pb-[84px] lg:px-[18px] max-md:col-span-4 max-xl:col-span-2 ${step.textColor}`}
          >
            <i
              className={`${step.iconClass} size-[35px] lg:size-[35px] ${step.textColor}`}
            />
            <div className="flex flex-col gap-3 lg:gap-[13px]">
              <h4 className="text-lg lg:text-2xl font-bold">{step.title}</h4>
              <p className="text-sm font-medium">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewProcess;
