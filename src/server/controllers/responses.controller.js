import query from "../db/utils";

const findDefaultResponses = async () => {
  console.log ('in finddefault');
  return await query("SELECT * FROM Responses WHERE Responses.UserID = 3");
};

//find by user

const findUserResponses = async (UserID) => {
  return await query("SELECT * FROM Responses WHERE Responses.UserID = ?", [UserID]);
};

/* const find = async(columnMatch) => {
  return await query("SELECT * FROM Responses WHERE ?", [columnMatch])
}; */

const addOne = async(response) => {
  return await query("INSERT INTO responses SET ?", [response])
}

const UpdateOne = async(response, ResponseID) => {
  return await query("UPDATE responses SET ? WHERE ResponseID = ?", [response, responseID])
}

const removeOne = async(ResponseID) => {
  return await query("DELETE FROM responses  WHERE ResponseID = ?", ResponseID)
}

export default {
  findDefaultResponses,
  findUserResponses,
};
