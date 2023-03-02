const {Router} = require('express')

const {
    getHome,
    changeDocs,
    getDocs1,
    getDocs2,
    getDocs3,
    getDocs4,
    getDocs5,
    getDocs6,
    getDocs7,
    getDocs8,
    getDocs9,
    getDocs10,
    getDocs11,
    getDocs12,
    getDocs13,
    getDocs14,
    getDocs15,
    getDocs16,
    getDocs17,
    getDocs18,
    getDocs19,
    getDocs20,
} = require('../controllers/routeControllers')

const {
    writePDFDocs1,
    writePDFDocs2,
    writePDFDocs3,
    writePDFDocs4,
    writePDFDocs5,
    writePDFDocs6,
    writePDFDocs7,
    writePDFDocs8,
    writePDFDocs9,
    writePDFDocs10,
    writePDFDocs11,
    writePDFDocs12,
    writePDFDocs13,
    writePDFDocs14,
    writePDFDocs15,
    writePDFDocs16,
    writePDFDocs17,
    writePDFDocs18,
    writePDFDocs19,
    writePDFDocs20,
} = require('../controllers/pdfWriter')

const route = Router()

route.get('/', getHome)


route.get('/docs/document1', getDocs1)
route.get('/docs/document2', getDocs2)
route.get('/docs/document3', getDocs3)
route.get('/docs/document4', getDocs4)
route.get('/docs/document5', getDocs5)
route.get('/docs/document6', getDocs6)
route.get('/docs/document7', getDocs7)
route.get('/docs/document8', getDocs8)
route.get('/docs/document9', getDocs9)
route.get('/docs/document10', getDocs10)
route.get('/docs/document11', getDocs11)
route.get('/docs/document12', getDocs12)
route.get('/docs/document13', getDocs13)
route.get('/docs/document14', getDocs14)
route.get('/docs/document15', getDocs15)
route.get('/docs/document16', getDocs16)
route.get('/docs/document17', getDocs17)
route.get('/docs/document18', getDocs18)
route.get('/docs/document19', getDocs19)
route.get('/docs/document20', getDocs20)

route.post('/docs/document1', writePDFDocs1)
route.post('/docs/document2', writePDFDocs2)
route.post('/docs/document3', writePDFDocs3)
route.post('/docs/document4', writePDFDocs4)
route.post('/docs/document5', writePDFDocs5)
route.post('/docs/document6', writePDFDocs6)
route.post('/docs/document7', writePDFDocs7)
route.post('/docs/document8', writePDFDocs8)
route.post('/docs/document9', writePDFDocs9)
route.post('/docs/document10', writePDFDocs10)
route.post('/docs/document11', writePDFDocs11)
route.post('/docs/document12', writePDFDocs12)
route.post('/docs/document13', writePDFDocs13)
route.post('/docs/document14', writePDFDocs14)
route.post('/docs/document15', writePDFDocs15)
route.post('/docs/document16', writePDFDocs16)
route.post('/docs/document17', writePDFDocs17)
route.post('/docs/document18', writePDFDocs18)
route.post('/docs/document19', writePDFDocs19)
route.post('/docs/document20', writePDFDocs20)

route.post('/docs/select/',changeDocs)


module.exports = route