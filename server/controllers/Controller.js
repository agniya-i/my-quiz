export default function Controller(cb) {
    return async function (req, res, next) {
        try {
            const result = await cb(req, res);
            res.status(200).json(result);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
}