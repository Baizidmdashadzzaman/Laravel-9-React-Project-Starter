import Api from "./Api";
import Csrf from "./Csrf";

export default {
  async register(form) {
    await Csrf.getCookie();
    return Api.post("/api/register-listner", form);
  },

  async login(form) {
    await Csrf.getCookie();
    return Api.post("/api/login-listner", form);
  },

  async logout() {
    await Csrf.getCookie();
    return Api.get("/api/listner/logout");
  },

  auth() {
    return Api.get("/api/auth/listner");
  }
};