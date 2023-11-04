const express = require('express');
const { getAllSkills, getSkillById, createSkill, updateSkill, deleteSkillById } = require('../service/skill.service');
const { isValidSkillId, isValidSkillData } = require('../helper/validation');
const buildResponse = require('../helper/buildResponse');
const route = express.Router();

route.get('/', (req, res) => {
  try {
    const data = getAllSkills();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidSkillId, (req, res) => {
  try {
    const { id } = req.params;
    const data = getSkillById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', isValidSkillData, (req, res) => {
  try {
    const { title } = req.body;
    const data = createSkill(title);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidSkillId, isValidSkillData, (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const data = updateSkill(id, title);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidSkillId, (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteSkillById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 400, error.message);
  }
});

module.exports = route;