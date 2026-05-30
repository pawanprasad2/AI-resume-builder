const pdfParse = require("pdf-parse");
const { generateInterviewReport } = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");


async function genInterviewReport(req, res) {
  const resumeFile = req.file;
  const resumeContent = pdfParse(req.file.buffer);
  const { selfDescription, jobDescription } = req.body;
  const interviewReportAi = await generateInterviewReport({
    resume: resumeContent,
    selfDescription,
    jobDescription,
  });

  const InterviewReport = await interviewReportModel.create({
    user: req.user.id,
    resume: resumeContent,
    selfDescription,
    jobDescription,
    ...interviewReportAi,
  });
  res.status(201).json({
    message: "interview report generated successfully",
    InterviewReport,
  });
}

module.exports = {genInterviewReport};
