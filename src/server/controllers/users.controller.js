import query from "../db/utils";



const addUser = async(user) => {
  return await query("INSERT INTO user SET ?", [user])
}

const UpdateOne = async(response, ResponseID) => {
  return await query("UPDATE responses SET ? WHERE ResponseID = ?", [response, responseID])
}

const removeOne = async(ResponseID) => {
  return await query("DELETE FROM responses WHERE ResponseID = ?", ResponseID)
}

export default {
  addUser,
};