"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const qualificationOptions = ["Select", "12th Pass", "Diploma", "Graduate"];

const programMapping: Record<string, string[]> = {
  Select: ["Select Qualification First"],
  "12th Pass": ["BBA", "BCA", "B.Com", "BA"],
  Diploma: ["B.Tech Lateral Entry", "M.Tech Flexible Timing"],
  Graduate: ["MBA", "M.Com", "M.Sc", "MA", "MCA"],
};

const budgetOptions = [
  "Select",
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,00,000",
  "Above ₹2,00,000",
];
const studyModeOptions = ["Select", "Online", "Offline", "Hybrid"];
const careerGoalOptions = ["Select", "Job Switch", "Promotion", "Career Start"];

export default function AIProgramFinder() {
  // Yahan studyMode ko "Select" kar diya gaya hai
  const [form, setForm] = useState({
    qualification: "Select",
    course: "Select",
    budget: "Select",
    studyMode: "Select",
    careerGoal: "Select",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [errors, setErrors] = useState<any>({});

  // Typing effect logic
  useEffect(() => {
    if (result) {
      setDisplayedText("");
      let index = 0;
      const interval = setInterval(() => {
        if (index < result.length) {
          setDisplayedText((prev) => prev + result.charAt(index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [result]);

  const validate = () => {
    const newErrors: any = {};
    if (form.qualification === "Select") newErrors.qualification = "Required";
    if (
      form.course === "Select" ||
      form.course === "Select Qualification First"
    )
      newErrors.course = "Required";
    if (form.budget === "Select") newErrors.budget = "Required";
    if (form.studyMode === "Select") newErrors.studyMode = "Required"; // Check for Select
    if (form.careerGoal === "Select") newErrors.careerGoal = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "qualification" ? { course: "Select" } : {}),
    }));
    setErrors((prev: any) => ({ ...prev, [field]: undefined }));
  };

  const handleAskAI = async () => {
    if (!validate()) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "http://localhost:5009/api/ai-program-finder",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            name: "User",
            email: "u@ex.com",
            phone: "0",
          }),
        },
      );
      const data = await response.json();
      if (data.success) setResult(data.aiRecommendation);
    } catch (err) {
      setResult("### ❌ Connection Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ai-program-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap');
        .ai-program-section { font-family: 'DM Sans', sans-serif; padding: 60px 20px; text-align: center; }
        .section-heading { font-family: 'Sora', sans-serif; font-size: 2.5rem; font-weight: 800; margin-bottom: 12px; }
        .section-heading .highlight { color: #E8192C; }
        .finder-card { background: #fff; border-radius: 20px; box-shadow: 0 4px 32px rgba(0,0,0,0.1); max-width: 960px; margin: 0 auto; padding: 40px; }
        .form-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 28px; }
        @media (max-width: 900px) { .form-row { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .form-row { grid-template-columns: 1fr; } }
        .form-group { display: flex; flex-direction: column; text-align: left; gap: 6px; }
        .form-label { font-size: 0.82rem; font-weight: 600; color: #444; }
        .form-select { border: 1.8px solid #ddd; border-radius: 8px; padding: 10px; font-size: 0.92rem; }
        .form-select.error { border-color: #E8192C; }
        .error-msg { font-size: 0.72rem; color: #E8192C; }
        .ask-ai-btn { background: #E8192C; color: #fff; border: none; border-radius: 10px; padding: 14px 40px; font-weight: 600; cursor: pointer; }
        .ai-response-card { margin-top: 40px; border: 1px solid #e0e0e0; border-radius: 16px; text-align: left; overflow: hidden; position: relative; }
        .ai-header { background: #1a237e; color: white; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; }
        .close-btn { background: none; border: none; color: white; cursor: pointer; font-size: 20px; }
        .ai-content { padding: 30px; line-height: 1.8; background: #fafafa; }
      `}</style>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
        Not Sure? <span style={{ color: "red" }}>Ask AI</span>
      </h2>
      <div className="finder-card">
        <div className="form-row">
          {/* Qualification */}
          <div className="form-group">
            <label className="form-label">Qualification</label>
            <select
              className={`form-select ${errors.qualification ? "error" : ""}`}
              value={form.qualification}
              onChange={(e) => handleChange("qualification", e.target.value)}
            >
              {qualificationOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.qualification && (
              <span className="error-msg">{errors.qualification}</span>
            )}
          </div>

          {/* Course */}
          <div className="form-group">
            <label className="form-label">Course</label>
            <select
              className={`form-select ${errors.course ? "error" : ""}`}
              value={form.course}
              onChange={(e) => handleChange("course", e.target.value)}
            >
              <option value="Select">Select Course</option>
              {programMapping[form.qualification]?.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.course && (
              <span className="error-msg">{errors.course}</span>
            )}
          </div>

          {/* Budget */}
          <div className="form-group">
            <label className="form-label">Budget</label>
            <select
              className={`form-select ${errors.budget ? "error" : ""}`}
              value={form.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.budget && (
              <span className="error-msg">{errors.budget}</span>
            )}
          </div>

          {/* Study Mode - Ab ye "Select" dikhayega */}
          <div className="form-group">
            <label className="form-label">Study Mode</label>
            <select
              className={`form-select ${errors.studyMode ? "error" : ""}`}
              value={form.studyMode}
              onChange={(e) => handleChange("studyMode", e.target.value)}
            >
              {studyModeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.studyMode && (
              <span className="error-msg">{errors.studyMode}</span>
            )}
          </div>

          {/* Goal */}
          <div className="form-group">
            <label className="form-label">Career Goal</label>
            <select
              className={`form-select ${errors.careerGoal ? "error" : ""}`}
              value={form.careerGoal}
              onChange={(e) => handleChange("careerGoal", e.target.value)}
            >
              {careerGoalOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.careerGoal && (
              <span className="error-msg">{errors.careerGoal}</span>
            )}
          </div>
        </div>

        <button className="ask-ai-btn" onClick={handleAskAI} disabled={loading}>
          {loading ? "Analyzing..." : "✨ Ask AI"}
        </button>

        {displayedText && (
          <div className="ai-response-card">
            <div className="ai-header">
              <span>🤖 AI CAREER ADVISOR</span>
              <button
                className="close-btn"
                onClick={() => {
                  setResult(null);
                  setDisplayedText("");
                }}
              >
                ✕
              </button>
            </div>
            <div className="ai-content">
              <ReactMarkdown>{displayedText}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
