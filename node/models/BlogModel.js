//importamos la conexion de la base de datos 
import db from "../database/db.js";
// importaciones sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs',{
    title : {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default BlogModel
