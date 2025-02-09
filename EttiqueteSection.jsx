import React from "react";

const etiquetteList = {
  do: [
    { id: 1, title: "Research the Company", description: "Understand the company's mission, values, and recent achievements to show genuine interest." },
    { id: 2, title: "Dress Appropriately", description: "Wear formal or business casual attire based on the company's culture." },
    { id: 3, title: "Arrive on Time", description: "Plan your journey to reach the interview location at least 10 minutes early." },
    { id: 4, title: "Be Polite and Confident", description: "Greet everyone with a smile and maintain good body language throughout the interview." },
    { id: 5, title: "Prepare Questions", description: "Have a few thoughtful questions ready to ask about the company or role." },
    { id: 6, title: "Maintain Eye Contact", description: "Show confidence by maintaining appropriate eye contact during conversations." },
    { id: 7, title: "Practice Common Questions", description: "Prepare for frequently asked questions to articulate your responses effectively." },
    { id: 8, title: "Listen Carefully", description: "Pay attention to the questions and respond accordingly." },
    { id: 9, title: "Show Enthusiasm", description: "Express genuine enthusiasm for the role and company." },
    { id: 10, title: "Highlight Relevant Skills", description: "Emphasize the skills and experiences most relevant to the role." },
    { id: 11, title: "Bring Copies of Your Resume", description: "Carry a few printed copies of your resume to share if needed." },
    { id: 12, title: "Follow Up", description: "Send a thank-you email after the interview to show appreciation." },
    { id: 13, title: "Stay Calm", description: "Handle unexpected questions or situations calmly and confidently." },
    { id: 14, title: "Turn Off Your Phone", description: "Ensure your phone is silent or off to avoid distractions." },
    { id: 15, title: "Prepare a Portfolio", description: "Bring a portfolio of your work, if applicable." },
    { id: 16, title: "Know Your Resume", description: "Be prepared to discuss any aspect of your resume in detail." },
    { id: 17, title: "Understand the Job Role", description: "Have a clear understanding of the job description and its requirements." },
    { id: 18, title: "Ask for Clarification", description: "If you don’t understand a question, ask for clarification politely." },
    { id: 19, title: "Practice Good Posture", description: "Sit up straight to convey confidence and interest." },
    { id: 20, title: "Show Gratitude", description: "Thank the interviewer for their time and the opportunity." },
  ],
  dont: [
    { id: 1, title: "Be Late", description: "Arriving late leaves a bad impression." },
    { id: 2, title: "Interrupt the Interviewer", description: "Always wait for the interviewer to finish before speaking." },
    { id: 3, title: "Show Overconfidence", description: "Be confident, but avoid sounding arrogant." },
    { id: 4, title: "Bring Distracting Items", description: "Ensure your phone is silent and avoid distractions." },
    { id: 5, title: "Be Dishonest", description: "Always provide truthful answers during the interview." },
    { id: 6, title: "Speak Negatively About Past Employers", description: "Refrain from making negative comments about previous employers or colleagues." },
    { id: 7, title: "Fidget", description: "Avoid excessive movements or gestures that can show nervousness." },
    { id: 8, title: "Lack Preparation", description: "Not preparing for common interview questions shows disinterest." },
    { id: 9, title: "Talk Over the Interviewer", description: "Interruptions can seem disrespectful." },
    { id: 10, title: "Fail to Research the Company", description: "Lack of knowledge about the company can lead to rejection." },
    { id: 11, title: "Avoid Eye Contact", description: "Not making eye contact may be seen as a lack of confidence." },
    { id: 12, title: "Give Vague Responses", description: "Provide clear and concise answers to questions." },
    { id: 13, title: "Forget Important Documents", description: "Always carry necessary documents like your resume and ID proof." },
    { id: 14, title: "Speak Too Quietly", description: "Speak clearly and confidently to ensure you're heard." },
    { id: 15, title: "Be Disrespectful", description: "Rude behavior will harm your chances of being selected." },
    { id: 16, title: "Show Lack of Interest", description: "Engage actively in the conversation." },
    { id: 17, title: "Overuse Filler Words", description: "Avoid excessive use of words like 'um' and 'like'." },
    { id: 18, title: "Forget to Follow Up", description: "Failing to send a thank-you email shows a lack of professionalism." },
    { id: 19, title: "Bring Up Salary Too Early", description: "Discussing salary too soon can leave a bad impression." },
    { id: 20, title: "Be Unprofessional", description: "Maintain professional conduct throughout the interview." },
  ],
};

function EtiquetteSection() {
  return (
    <div className="bg-slate-800 min-h-screen py-20">
      <div className="w-full px-4">
        <h1
          className="text-center text-white text-6xl font-extrabold mb-12"
        >
          ✨ Interview Etiquette ✨
        </h1>

        {/* Do's Section */}
        <h2
          className="text-4xl font-bold mb-6 text-center text-white"
        >
          ✅ Do's for Interviews
        </h2>
        <div className="grid grid-cols-1 gap-6 mb-12 justify-items-center">
          {etiquetteList.do.map((item) => (
            <div
              key={item.id}
              className="bg-slate-300 p-4 rounded-md shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
              style={{ width: "75%", maxWidth: "1200px" }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Don'ts Section */}
        <h2
          className="text-4xl font-extrabold mb-6 text-center"
          style={{
            background: "linear-gradient(to right, #ff5555, #ff9966)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ❌ Don'ts for Interviews
        </h2>
        <div className="grid grid-cols-1 gap-6 justify-items-center">
          {etiquetteList.dont.map((item) => (
            <div
              key={item.id}
              className="bg-slate-300 p-4 rounded-md shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
              style={{ width: "75%", maxWidth: "1200px" }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EtiquetteSection;
