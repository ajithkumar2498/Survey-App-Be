import jwt from 'jsonwebtoken'

export const authToken = async (req, res, next) => {

   const authHeader = req.headers['authorization'];
    
    // 1. Check if header exists
    if (!authHeader) {
        return res.status(404).json({ message: "token not found" })
    }

    const token = authHeader.includes(" ") ? authHeader.split(" ")[1] : authHeader;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {

        return res.status(401).json({
            message: 'token is not valid'
        })
    }
}