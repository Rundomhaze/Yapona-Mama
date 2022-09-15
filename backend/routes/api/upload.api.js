const UploadFileRouter = require('express').Router();
const fileuploadphoto = require('../../uploadFile');

UploadFileRouter.post('/', async (req, res) => {
  try {
    const file = req.files.homesImg;
    const arrUrl = await fileuploadphoto(file);
    res.json(arrUrl);
  } catch { console.error; }
});
//ВОзвращает строчку с путем на файл (строка) 

module.exports = UploadFileRouter;
