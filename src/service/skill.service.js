const fs = require('fs');
const path = './storage/storage.json';

function getAllSkills() {
  const data = JSON.parse(fs.readFileSync(path));
  return data;
}

function getSkillById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id == id);
  if (!filtered.length) throw new Error('this id is not found');
  return filtered;
}

function createSkill(title) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.title == title);
  if (filtered.length > 0) throw new Error('this title is already use');
  const item = { id: data.length + 1, title };
  data.push(item);
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function updateSkill(id, title) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id != id);
  if (filtered.length == data.length) throw new Error('this id is not found');
  const item = { id, title };
  filtered.push(item);
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

function deleteSkillById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter(el => el.id != id);
  if (filtered.length == data.length) throw new Error('this id is not found');
  return filtered;
}

module.exports = { getAllSkills, getSkillById, createSkill, updateSkill, deleteSkillById };
