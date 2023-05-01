export default function handler(req, res) {
    // req에 slug 값이 저장되어 있다.
    const {uid} = req.query 
    const cookies = req.cookies
    res.status(200).json({name: `kim kane ${uid} ${JSON.stringify(cookies)}` })
}