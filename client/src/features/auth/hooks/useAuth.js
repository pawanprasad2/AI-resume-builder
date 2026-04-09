import { useContext } from "react";
import { AuthContext } from "../../../auth.context";
import { login, logout, profile, register } from "../../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    const data = await login({ email, password });
    setUser(data.user);
    setLoading(false);
  };

  const handleRegister = async ({ email, password, username }) => {
    setLoading(true)
    const data = await register({ email, password, username });
    setUser(data.user);
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    const data = await logout();
    setUser(null);
    setLoading(false);
  };

  const handleProfile = async () => {
    setLoading(true);
    const data = await profile();
    setUser(data.profile);
    setLoading(false);
  };

  return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleLogout,
    handleProfile,
  };
};
