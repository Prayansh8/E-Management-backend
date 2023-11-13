const { db } = require("../databases/index");

const beTenentAwareReq = async (req, res, next) => {
  try {
    const host = req.get("host");
    const subdomain = host.split(".")[0];
    const data = await db.Tenant.findOne({ subDomain: subdomain });
    if (data) {
      req.tenant = data;
      next();
    } else {
      return res.status(404).json({ error: "Subdomain not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { beTenentAwareReq };
