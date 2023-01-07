const getAllJobs = async (req, res) => {
  res.send("retrieve all jobs");
};
const getJob = async (req, res) => {
  res.send("retrieve a job");
};
const createJob = async (req, res) => {
  res.send("add a job");
};
const deleteJob = async (req, res) => {
  res.send("remove a job");
};
const updateJob = async (req, res) => {
  res.send("modify a job");
};

module.exports = { getAllJobs, getJob, deleteJob, updateJob, createJob };
