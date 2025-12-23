let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here

let newStudentProfile = {
  ...studentProfile,
  scores: { ...studentProfile.scores, ...studentScores }, //สร้าง key scores: แล้วรวม 2 obj ไว้ในนั้น
};
console.log(newStudentProfile);
