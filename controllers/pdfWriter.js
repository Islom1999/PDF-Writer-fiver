const {writePDF} = require("../utils/UtilsPDFWrite")

const writePDFDocs1 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )

        let id = Date.now()

        await writePDF(req.body, 'docs1.html', `docs1-${id}.pdf`)

        return res.redirect(`/pdf/docs1-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs2 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs2.html', `docs2-${id}.pdf`)

        res.redirect(`/pdf/docs2-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs3 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()
        
        await writePDF(req.body, `docs3.html`, `docs3-${id}.pdf`)

        res.redirect(`/pdf/docs3-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs4 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs4.html', `docs4-${id}.pdf`)

        res.redirect(`/pdf/docs4-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs5 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, `docs5.html', 'docs5-${id}.pdf`)

        res.redirect(`/pdf/docs5-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs6 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, `docs6.html', 'docs6-${id}.pdf`)

        res.redirect(`/pdf/docs6-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs7 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, `docs7.html`, `docs7-${id}.pdf`)

        res.redirect(`/pdf/docs7-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs8 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs8.html', `docs8-${id}.pdf`)

        res.redirect(`/pdf/docs8-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs9 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs9.html', `docs9-${id}.pdf`)

        res.redirect(`/pdf/docs9-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs10 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs10.html', `docs10-${id}.pdf`)

        res.redirect(`/pdf/docs10-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs11 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs11.html', `docs11-${id}.pdf`)

        res.redirect(`/pdf/docs11-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs12 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs12.html', `docs12-${id}.pdf`)

        res.redirect(`/pdf/docs12-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs13 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs13.html', `docs13-${id}.pdf`)

        res.redirect(`/pdf/docs13-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs14 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs14.html', `docs14-${id}.pdf`)

        res.redirect(`/pdf/docs14-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs15 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs15.html', `docs15-${id}.pdf`)

        res.redirect(`/pdf/docs15-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs16 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs16.html', `docs16-${id}.pdf`)

        res.redirect(`/pdf/docs16-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs17 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs17.html', `docs17-${id}.pdf`)

        res.redirect(`/pdf/docs17-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs18 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs18.html', `docs18-${id}.pdf`)

        res.redirect(`/pdf/docs18-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs19 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs19.html', `docs19-${id}.pdf`)

        res.redirect(`/pdf/docs19-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}
const writePDFDocs20 = async(req, res) => {
    try{
        // (data, fileHTML, filePDF )
        let id = Date.now()

        await writePDF(req.body, 'docs20.html', `docs20-${id}.pdf`)

        res.redirect(`/pdf/docs20-${id}.pdf`)
    }catch(err){
        console.log(err)
    }
}



module.exports = {
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
}