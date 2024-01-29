const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectInformation: {
    projectName: String,
    projectCode: String,
    projectType: String,
    projectDescription: String,
  },
  projectTeam: {
    teamLead: String,
    projectLead: String,
    teamMembers: [String],
    rolesAndResponsibilities: {
      teamLead: String,
      projectLead: String,
      teamMembers: String,
    },
  },
  projectTimeline: {
    projectStartDate: Date,
    projectFinishDate: Date,
    workHours: Number,
    plannedDuration: String,
    actualDuration: String,
    criticalPath: String,
  },
  projectSchedule: {
    milestones: [String],
    tasks: [String],
    dependencies: {
      type: Map,
      of: [String],
    },
  },
  projectCostAndExpenses: {
    estimatedProjectCost: String,
    actualProjectCost: String,
    budgetAllocation: {
      type: Map,
      of: String,
    },
    expenses: [String],
  },
  projectProcess: {
    projectMethodology: String,
    developmentProcess: String,
    qualityAssurance: String,
    changeManagement: String,
    riskManagement: String,
    communicationPlan: String,
    collaborationToolsUsed: [String],
  },
  people: {
    stakeholders: [String],
    communicationChannels: [String],
  },
  powerAndDecisionMaking: {
    decisionMakingStructure: String,
    decisionMakers: [String],
    authorityLevels: [String],
  },
  projectResults: {
    deliverables: [String],
    successMetrics: [String],
    lessonsLearned: [String],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant" },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
