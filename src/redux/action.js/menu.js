import axios from "axios";

export const listMenu = () => {
  return async (dispatch) => {
    try {
        const response = await axios.get("https://alicias-cafe.herokuapp.com/api/menu");
        console.log(response.data);
    } catch (error) {}
  };
};

export const createdUser=(data)=>{
  return async (dispatch)=>{
    try{
      const response = await axios.post("https://alicias-cafe.herokuapp.com/api/users",data);
      console.log(response.data);
    }catch(error){}
  }
}