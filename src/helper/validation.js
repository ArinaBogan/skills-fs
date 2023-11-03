function isValidSkillId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id must be a number');
  if (id <= 0) throw new Error('id can not be a negative number');
  next();
}

function isValidSkillData(req, res, next) {
  const { title } = req.body;
  if (!title) throw new Error('title is empty');
  if (!isNaN(title)) throw new Error('title can not be a number');
  next();
}
module.exports = { isValidSkillId, isValidSkillData };
