


const activeCheck = async (req, res) => {
    try {
        res.status(200).json({ message: "Active check successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { activeCheck };