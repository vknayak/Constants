const NG_CONSTANTS = {
  roleNames: {
    student: "Student",
    team: "NG Team",
    trainingAndPlacement: "T & P",
    admissionIncharge: "Admissions Incharge",
    facha: "Facha",
    dumbeldore: "Dumbeldore",
  },
  editRights: {
    student: [],
    team: [
      "student",
      "team",
      "trainingAndPlacement",
      "admissionIncharge",
      "facha",
    ],
    trainingAndPlacement: ["student"],
    admissionIncharge: [],
    facha: ["student", "trainingAndPlacement", "admissionIncharge"],
    dumbeldore: [
      "student",
      "team",
      "traningAndPlacement",
      "admissionIncharge",
      "facha",
      "dumbeldore",
    ],
  },
  trackingDays: {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6":"Saturday",
  },
  trackingEnabled:{
    true:"yes",
    false: "no",
  }
};
module.exports = NG_CONSTANTS