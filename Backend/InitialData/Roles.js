import Role from "../models/RoleModel.js";

const Roles = async () => {
  try {
    await Role.create({ name: "Admin" });
    await Role.create({ name: "User" });
    await Role.create({ name: "Developer" });
    await Role.create({ name: "Manager" });
    await Role.create({ name: "Analyst" });
    await Role.create({ name: "Designer" });
    await Role.create({ name: "Engineer" });
    await Role.create({ name: "Supervisor" });
    await Role.create({ name: "Coordinator" });
    await Role.create({ name: "Executive" });
    await Role.create({ name: "Front-End Developer" });
    await Role.create({ name: "Back-End Developer" });

    console.log("Initial roles added successfully!");
  } catch (e) {
    console.log("Error: " + e.message);
  }
};

export default Roles;
