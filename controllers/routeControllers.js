

const getHome = async(req, res) => {
    try{
        console.log('salom')
        res.render('home')
    }catch(err){
        console.log(err)
    }
}
const changeDocs = async(req, res) => {
    try{
        const {number} = req.body    
        res.redirect(`/docs/document${number}`)
    }catch(err){
        console.log(err)
    }
}
const getDocs1 = async(req, res) => {
    try{
        res.render('docs1')
    }catch(err){
        console.log(err)
    }
}
const getDocs2 = async(req, res) => {
    try{
        res.render('docs2')
    }catch(err){
        console.log(err)
    }
}

const getDocs3 = async(req, res) => {
    try{
        res.render('docs3')
    }catch(err){
        console.log(err)
    }
}
const getDocs4 = async(req, res) => {
    try{
        res.render('docs4')
    }catch(err){
        console.log(err)
    }
}
const getDocs5 = async(req, res) => {
    try{
        res.render('docs5')
    }catch(err){
        console.log(err)
    }
}
const getDocs6 = async(req, res) => {
    try{
        res.render('docs6')
    }catch(err){
        console.log(err)
    }
}
const getDocs7 = async(req, res) => {
    try{
        res.render('docs7')
    }catch(err){
        console.log(err)
    }
}
const getDocs8 = async(req, res) => {
    try{
        res.render('docs8')
    }catch(err){
        console.log(err)
    }
}
const getDocs9 = async(req, res) => {
    try{
        res.render('docs9')
    }catch(err){
        console.log(err)
    }
}
const getDocs10 = async(req, res) => {
    try{
        res.render('docs10')
    }catch(err){
        console.log(err)
    }
}
const getDocs11 = async(req, res) => {
    try{
        res.render('docs11')
    }catch(err){
        console.log(err)
    }
}
const getDocs12 = async(req, res) => {
    try{
        res.render('docs12')
    }catch(err){
        console.log(err)
    }
}
const getDocs13 = async(req, res) => {
    try{
        res.render('docs13')
    }catch(err){
        console.log(err)
    }
}
const getDocs14 = async(req, res) => {
    try{
        res.render('docs14')
    }catch(err){
        console.log(err)
    }
}
const getDocs15 = async(req, res) => {
    try{
        res.render('docs15')
    }catch(err){
        console.log(err)
    }
}
const getDocs16 = async(req, res) => {
    try{
        res.render('docs16')
    }catch(err){
        console.log(err)
    }
}
const getDocs17 = async(req, res) => {
    try{
        res.render('docs17')
    }catch(err){
        console.log(err)
    }
}
const getDocs18 = async(req, res) => {
    try{
        res.render('docs18')
    }catch(err){
        console.log(err)
    }
}
const getDocs19 = async(req, res) => {
    try{
        res.render('docs19')
    }catch(err){
        console.log(err)
    }
}
const getDocs20 = async(req, res) => {
    try{
        res.render('docs20')
    }catch(err){
        console.log(err)
    }
}



module.exports = {
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
}