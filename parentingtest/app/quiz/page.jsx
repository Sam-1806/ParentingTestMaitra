"use client"

import { useState } from "react";

export default function ParentingStyleQuiz() {
  const quizQuestions = [
    {
      question: "1. When your child refuses to follow your rules, what is your response?",
      options: {
        A: "I explain the reasons behind the rules and discuss consequences.",
        B: "I enforce strict discipline and ensure the rules are followed.",
        C: "I let them do what they want as long as they don’t cause trouble.",
        D: "I don’t engage unless it becomes a major issue."
      }
    },
    {
      question: "2. How often do you praise or encourage your child for good behavior?",
      options: {
        A: "Frequently, to reinforce positive actions.",
        B: "Rarely, good behavior is expected.",
        C: "Only if they ask for approval.",
        D: "I don’t pay much attention."
      }
    },
    {
      question: "3. How do you handle your child’s emotional outbursts?",
      options: {
        A: "I try to understand their feelings and talk it through.",
        B: "I tell them to control their emotions and stop the behavior.",
        C: "I allow them to express themselves without setting limits.",
        D: "I leave them alone to calm down on their own."
      }
    },
    {
      question: "4. What is your approach to setting rules?",
      options: {
        A: "Rules are clear, but I’m open to negotiation based on context.",
        B: "Rules are strict and non-negotiable.",
        C: "I prefer not to impose too many rules.",
        D: "I have few rules and am mostly uninvolved."
      }
    },
    {
      question: "5. How much time do you spend engaging in activities with your child?",
      options: {
        A: "I regularly make time to do activities together.",
        B: "We engage in activities if they are educational or necessary.",
        C: "I join only when it’s something I also enjoy.",
        D: "Rarely, as I have other priorities."
      }
    },
    {
      question: "6. How do you discipline your child?",
      options: {
        A: "I use a balance of positive reinforcement and appropriate consequences.",
        B: "I rely on punishment to deter bad behavior.",
        C: "I avoid disciplining and let them learn from their mistakes.",
        D: "I don’t get involved much in discipline matters."
      }
    },
    {
      question: "7. How do you react when your child comes to you with a problem?",
      options: {
        A: "I listen actively and offer guidance and support.",
        B: "I tell them to figure it out themselves or focus on what they did wrong.",
        C: "I sympathize and sometimes solve it for them.",
        D: "I avoid getting too involved in their personal problems."
      }
    },
    {
      question: "8. Do you involve your child in decision-making at home?",
      options: {
        A: "Yes, for age-appropriate decisions.",
        B: "No, I make the decisions for the family.",
        C: "I let them have a say in most things.",
        D: "I don’t involve them unless necessary."
      }
    },
    {
      question: "9. How do you respond to your child’s mistakes?",
      options: {
        A: "I use it as a learning opportunity and help them improve.",
        B: "I point out what they did wrong and expect better next time.",
        C: "I tend to overlook small mistakes.",
        D: "I usually don’t react unless it’s a serious issue."
      }
    },
    {
      question: "10. What is your goal as a parent?",
      options: {
        A: "To raise an independent, responsible, and empathetic individual.",
        B: "To ensure my child grows up disciplined and successful.",
        C: "To provide a relaxed, stress-free upbringing.",
        D: "To keep my own life balanced while letting the child grow naturally."
      }
    },
    {
      question: "11. How do you react when your child makes a mess at home?",
      options: {
        A: "I ask them to clean up and help if needed, teaching responsibility.",
        B: "I get upset and insist that they clean it up immediately.",
        C: "I clean it up myself to avoid conflict.",
        D: "I ignore it and let them decide when to clean up."
      }
    },
    {
      question: "12. How do you ensure your child follows through on commitments?",
      options: {
        A: "I remind them and provide support to help manage their commitments.",
        B: "I insist they complete their tasks, even if they resist.",
        C: "I let them handle it independently, stepping in only if needed.",
        D: "I do not monitor their commitments closely."
      }
    },
    {
      question: "13. What is your attitude toward extracurricular activities for your child?",
      options: {
        A: "I encourage participation but let them choose what they enjoy.",
        B: "I decide which activities are best for their development.",
        C: "I don’t emphasize activities unless they show interest.",
        D: "I leave it entirely up to them and don’t get involved."
      }
    },
    {
      question: "14. How do you address inappropriate language or behavior in your child?",
      options: {
        A: "I talk to them about why the behavior is inappropriate and how to correct it.",
        B: "I impose consequences immediately to discourage such behavior.",
        C: "I try to ignore it, believing it’s a phase that will pass.",
        D: "I don’t usually intervene unless it becomes a bigger problem."
      }
    },
    {
      question: "15. If your child needs help with schoolwork, what do you do?",
      options: {
        A: "I provide guidance and encourage them to think critically.",
        B: "I take over and ensure it’s done correctly.",
        C: "I suggest they do it at their own pace and help only if asked.",
        D: "I rarely get involved in schoolwork matters."
      }
    },
    {
      question: "16. How do you approach discussions on sensitive topics (e.g., relationships, peer pressure)?",
      options: {
        A: "I address them openly and provide information in an age-appropriate manner.",
        B: "I avoid discussing such topics until necessary.",
        C: "I let them lead the conversation and offer support when needed.",
        D: "I leave it to others (e.g., teachers, peers) to handle these discussions."
      }
    },
    {
      question: "17. How do you handle situations where your child disappoints you?",
      options: {
        A: "I express my feelings calmly and explore what went wrong together.",
        B: "I communicate my disappointment and set higher expectations.",
        C: "I tend to let it go and avoid making a big deal out of it.",
        D: "I don’t react much unless it’s a serious issue."
      }
    },
    {
      question: "18. What do you believe is the most effective way to teach your child right from wrong?",
      options: {
        A: "Through open discussions and modeling the behavior myself.",
        B: "By setting clear rules and consequences.",
        C: "Allowing them to learn through their own experiences.",
        D: "Letting them figure it out as they grow up."
      }
    },
    {
      question: "19. How involved are you in monitoring your child’s online activities?",
      options: {
        A: "I monitor actively but also educate them on safe and responsible use.",
        B: "I set strict rules and check their activities frequently.",
        C: "I let them manage their own use unless a problem arises.",
        D: "I am not very involved in their online activities."
      }
    },
    {
      question: "20. How do you support your child’s interests and hobbies?",
      options: {
        A: "I encourage and provide resources to help them pursue their passions.",
        B: "I prioritize hobbies that align with productive or educational goals.",
        C: "I let them choose and follow their interests without much input.",
        D: "I rarely engage with their hobbies."
      }
    },
    {
      question: "21. If your child needs to make an important decision, what role do you play?",
      options: {
        A: "I guide them by discussing options and outcomes.",
        B: "I make the decision for them, as I know what’s best.",
        C: "I let them make their own decision without interference.",
        D: "I am not actively involved unless they specifically ask for my help."
      }
    },
    {
      question: "22. What’s your approach to balancing fun and discipline in parenting?",
      options: {
        A: "I believe in a balanced approach, with clear rules but also flexibility for fun.",
        B: "I prioritize discipline over fun to build strong character.",
        C: "I focus more on letting them enjoy themselves without too many rules.",
        D: "I do not put much thought into balancing these aspects."
      }
    },
    {
      question: "23. How do you handle your child’s mistakes when it impacts others (e.g., bullying, cheating)?",
      options: {
        A: "I address the issue directly, helping them understand the impact of their actions.",
        B: "I impose strict consequences to prevent it from happening again.",
        C: "I try to minimize the issue and move on quickly.",
        D: "I avoid dealing with it unless it becomes severe."
      }
    },
    {
      question: "24. What values do you prioritize most in your child’s upbringing?",
      options: {
        A: "Honesty, empathy, and independence.",
        B: "Discipline, success, and respect.",
        C: "Freedom, creativity, and individuality.",
        D: "I have no specific values that I emphasize."
      }
    },
    {
        question: "25. How do you handle situations when your child struggles with peer pressure??",
        options: {
          A: "I talk to them openly about how to handle it and build confidence",
          B: "I forbid them from interacting with peers who have a negative influence.",
          C: "I let them deal with it unless it becomes a significant problem.",
          D: "I’m not very involved in their peer relationships."
        }
    },
    {
      question: "26. How do you ensure your child follows through on commitments?",
      options: {
        A: "I remind them and provide support to help manage their commitments.",
        B: "I insist they complete their tasks, even if they resist.",
        C: "I let them handle it independently, stepping in only if needed.",
        D: " I do not monitor their commitments closely."
      }
    },
    {
      question: "27. What is your attitude toward extracurricular activities for your child?",
      options: {
        A: "I encourage participation but let them choose what they enjoy.",
        B: "I decide which activities are best for their development.",
        C: "I don’t emphasize activities unless they show interest.",
        D: "I leave it entirely up to them and don’t get involved."
      }
    },
    {
      question: "28. How do you address inappropriate language or behavior in your child?",
      options: {
        A: "I talk to them about why the behavior is inappropriate and how to correct it.",
        B: "I impose consequences immediately to discourage such behavior.",
        C: "I try to ignore it, believing it’s a phase that will pass.",
        D: "I don’t usually intervene unless it becomes a bigger problem."
      }
    },
    {
      question: "29. If your child needs help with schoolwork, what do you do?",
      options: {
        A: "I provide guidance and encourage them to think critically.",
        B: "I take over and ensure it’s done correctly.",
        C: "I suggest they do it at their own pace and help only if asked.",
        D: "I rarely get involved in schoolwork matters."
      }
    },
    {
      question: "30. How do you approach discussions on sensitive topics (e.g., relationships, peer pressure)?",
      options: {
        A: "I address them openly and provide information in an age-appropriate manner.",
        B: "I avoid discussing such topics until necessary.",
        C: "I let them lead the conversation and offer support when needed.",
        D: "I leave it to others (e.g., teachers, peers) to handle these discussions."
      }
    },
    {
      question: "31. How do you handle situations where your child disappoints you?",
      options: {
        A: "I express my feelings calmly and explore what went wrong together.",
        B: "I communicate my disappointment and set higher expectations.",
        C: "I tend to let it go and avoid making a big deal out of it.",
        D: "I don’t react much unless it’s a serious issue."
      }
    },
    {
      question: "32. What do you believe is the most effective way to teach your child right from wrong?",
      options: {
        A: "Through open discussions and modeling the behavior myself.",
        B: "By setting clear rules and consequences",
        C: "Allowing them to learn through their own experiences.",
        D: "Letting them figure it out as they grow up."
      }
    },
    {
      question: "33. How involved are you in monitoring your child’s online activities?",
      options: {
        A: "I monitor actively but also educate them on safe and responsible use.",
        B: "I set strict rules and check their activities frequently.",
        C: "I let them manage their own use unless a problem arises.",
        D: "I am not very involved in their online activities."
      }
    },
    {
      question: "34. How do you support your child’s interests and hobbies?",
      options: {
        A: "I encourage and provide resources to help them pursue their passions.",
        B: "I prioritize hobbies that align with productive or educational goals.",
        C: "I let them choose and follow their interests without much input.",
        D: "I rarely engage with their hobbies."
      }
    },
    {
      question: "35. If your child needs to make an important decision, what role do you play?",
      options: {
        A: "I guide them by discussing options and outcomes.",
        B: "I make the decision for them, as I know what’s best.",
        C: "I let them make their own decision without interference.",
        D: "I am not actively involved unless they specifically ask for my help."
      }
    },
    {
      question: "36. What is your approach to balancing fun and discipline in parenting?",
      options: {
        A: "I believe in a balanced approach, with clear rules but also flexibility for fun.",
        B: "I prioritize discipline over fun to build strong character.",
        C: "I focus more on letting them enjoy themselves without too many rules.",
        D: "I do not put much thought into balancing these aspects."
      }
    },
    {
      question: "37. How do you handle your child’s mistakes when it impacts others (e.g., bullying, cheating)?",
      options: {
        A: "I address the issue directly, helping them understand the impact of their actions.",
        B: "I impose strict consequences to prevent it from happening again.",
        C: "I try to minimize the issue and move on quickly.",
        D: "I avoid dealing with it unless it becomes severe."
      }
    },
    {
      question: "38. What values do you prioritize most in your child’s upbringing?",
      options: {
        A: "Honesty, empathy, and responsibility.",
        B: "Discipline, respect, and achievement.",
        C: "Freedom, happiness, and creativity.",
        D: "Independence, self-reliance, and minimal interference."
      }
    },
    {
      question: "39. How do you handle situations when your child struggles with peer pressure?",
      options: {
        A: "I talk to them openly about how to handle it and build confidence.",
        B: "I forbid them from interacting with peers who have a negative influence.",
        C: "I let them deal with it unless it becomes a significant problem.",
        D: "I’m not very involved in their peer relationships."
      }
    }

  ];

  const parentingStyles = {
    Authoritative: {
      description: "You provide clear guidelines with empathy.",
      characteristics: [
        "High responsiveness and high expectations.",
        "Sets clear rules but is flexible and understanding.",
        "Encourages independence but within boundaries.",
      ],
      impact: [
        "Leads to high self-esteem, better social skills, and academic success.",
        "Promotes emotional regulation and decision-making skills.",
      ],
      tips: [
        "Focus on building open communication with the child.",
        "Implement consistent rules and logical consequences.",
        "Offer praise for positive behavior and efforts.",
        "Encourage the child to express opinions and discuss decisions.",
      ],
    },
    Authoritarian: {
      description: "You prioritize strict rules over flexibility.",
      characteristics: [
        "High expectations, low responsiveness.",
        "Strict rules with little room for dialogue.",
        "Uses punishment rather than discipline.",
      ],
      impact: [
        "Can lead to obedience but lower self-esteem.",
        "May cause anxiety, rebellion, or social withdrawal.",
      ],
      tips: [
        "Emphasize the importance of empathy and listening.",
        "Encourage flexibility and consider the child’s feelings and thoughts.",
        "Shift from punishment to discipline—explaining the 'why' behind rules.",
        "Promote warmth and show affection even while maintaining rules.",
      ],
    },
    Permissive: {
      description: "You allow too much freedom with few rules.",
      characteristics: [
        "High responsiveness, low expectations.",
        "Indulgent, few rules, and rarely enforces discipline.",
        "Acts more as a friend than a parent.",
      ],
      impact: [
        "May struggle with self-discipline and authority.",
        "Can develop behavioral issues and lack of boundaries.",
      ],
      tips: [
        "Set clear, consistent boundaries and expectations.",
        "Practice saying 'no' and enforcing rules without feeling guilty.",
        "Encourage responsibility and accountability for actions.",
        "Gradually introduce routines to promote structure and discipline.",
      ],
    },
    Uninvolved: {
      description: "You are detached and uninvolved in your child’s life.",
      characteristics: [
        "Low responsiveness and low expectations.",
        "Detached and uninvolved, offers minimal guidance or support.",
      ],
      impact: [
        "Can lead to attachment issues, low self-esteem, and poor academic and social outcomes.",
        "May feel neglected and develop feelings of resentment.",
      ],
      tips: [
        "Encourage active involvement in the child’s life.",
        "Work on being emotionally available and responsive.",
        "Create a routine that includes regular time for bonding.",
        "Set basic expectations and gradually increase involvement.",
      ],
    },
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [resultStyle, setResultStyle] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);


  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);
  };

  const calculateResult = (answers) => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});
    const mostFrequentAnswer = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
    const styles = { A: "Authoritative", B: "Authoritarian", C: "Permissive", D: "Uninvolved" };
    setResultStyle(styles[mostFrequentAnswer]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      calculateResult(answers);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const restartQuiz = () => {
    setAnswers(Array(quizQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setResultStyle(null);
  };


  const handleEmailSubmit = async () => {
    const resultDetails = parentingStyles[resultStyle]; // Get the result details based on the resultStyle
    const emailData = {
      userEmail,
      adminEmail: "admin@example.com",
      result: resultStyle,
      description: resultDetails.description,
      characteristics: resultDetails.characteristics,
      impact: resultDetails.impact,
      tips: resultDetails.tips,
      answers, // Include the user's answers as well (optional)
    };
  
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });
      setEmailSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "900",
          margin: "10px 0",
          color: "#4CAF50",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Parenting Style Quiz
      </h1>
      {quizCompleted ? (
        <div
        style={{
          textAlign: "center",
          padding: "20px",
          border: "2px solid #4CAF50",
          borderRadius: "12px",
          backgroundColor: "#fff",
          margin: "20px 0",
          width: "90%",
          maxWidth: "700px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
          <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            margin: "10px 0",
            color: "#4CAF50",
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.1)",
          }}>Your Parenting Style: {resultStyle}</h2>
          <p>{resultStyle && parentingStyles[resultStyle].description}</p>
          <h4 style={{ color: "#4CAF50", marginBottom: "5px", fontWeight: "bold" }}>Characteristics:</h4>
          <ul style={{ textAlign: "left", paddingLeft: "20px", color: "#555", listStyleType: "disc", fontSize: "16px" }}>
            {parentingStyles[resultStyle].characteristics.map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
          <h4 style={{ color: "#4CAF50", marginBottom: "5px", fontWeight: "bold" }}>Impact on Children:</h4>
          <ul style={{ textAlign: "left", paddingLeft: "20px", color: "#555", listStyleType: "disc", fontSize: "16px" }}>
            {parentingStyles[resultStyle].impact.map((impact, index) => (
              <li key={index}>{impact}</li>
            ))}
          </ul>
          <h4 style={{ color: "#4CAF50", marginBottom: "5px", fontWeight: "bold" }}>Guidance Tips:</h4>
          <ul style={{ textAlign: "left", paddingLeft: "20px", color: "#555", listStyleType: "disc", fontSize: "16px" }}>
            {parentingStyles[resultStyle].tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
          {!emailSent ? (
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <h4>Enter your email to receive the results:</h4>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Your email"
                style={{
                  padding: "12px",
                  margin: "10px 0",
                  width: "80%",
                  maxWidth: "400px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
              <button onClick={handleEmailSubmit} 
              className="bg-purple hover:bg-purple-700 text-white font-bold py-4 px-3 rounded"
              style={{
                width: "auto", /* Button width auto to fit the content */
                padding: "12px 20px", /* Adjust padding for better visual alignment */
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              >
                Submit
              </button>
            </div>
          ) : (
            <p style={{ color: "green" }}>Email sent successfully!</p>
          )}
          <button
            onClick={restartQuiz}
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              padding: "12px 20px",
              margin: "15px 0",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s, transform 0.2s",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "20px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#fff", margin: "20px 0", width: "90%", maxWidth: "700px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          {/* Progress Bar */}
          <div
            style={{
              height: "8px",
              backgroundColor: "#ddd",
              borderRadius: "4px",
              overflow: "hidden",
              margin: "20px 0",
            }}
          >
            <div
              style={{ textAlign: "center", padding: "20px", border: "2px solid #4CAF50", borderRadius: "12px", backgroundColor: "#fff", margin: "20px 0", width: "90%", maxWidth: "700px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            ></div>
          </div>

          {/* Question */}
          <h2 style={{ margin: "0", fontSize: "22px", color: "#333", lineHeight: "1.5", fontWeight: "bold", fontFamily: "'Roboto', Arial, sans-serif",}}>{quizQuestions[currentQuestionIndex].question}</h2>

          {/* Options */}
          <div>
            {Object.entries(quizQuestions[currentQuestionIndex].options).map(
              ([optionKey, optionValue]) => (
                <button
                  key={optionKey}
                  onClick={() => handleAnswerSelect(optionKey)}
                  style={{
                    backgroundColor:
                      answers[currentQuestionIndex] === optionKey
                        ? "#4CAF50"
                        : "#fff",
                    color:
                      answers[currentQuestionIndex] === optionKey
                        ? "#fff"
                        : "#333",
                    border: "2px solid #4CAF50",
                    padding: "12px 20px",
                    margin: "10px 0",
                    width: "80%",
                    fontSize: "16px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {optionValue}
                </button>
              )
            )}
          </div>

          {/* Navigation Buttons */}
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              style={{
                marginRight: "10px",
                padding: "10px 20px",
                backgroundColor:
                  currentQuestionIndex === 0 ? "#ddd" : "#4CAF50",
                color: currentQuestionIndex === 0 ? "#999" : "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
              }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {currentQuestionIndex === quizQuestions.length - 1
                ? "Submit"
                : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}