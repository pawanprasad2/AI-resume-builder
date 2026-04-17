import React, {  useEffect } from "react";
import { useAuth } from "../auth/hooks/useAuth";
import { useNavigate } from "react-router";

function Protected({children}) {
  const { loading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!loading && !user){
        navigate("/login")
    }
  },[loading,user,navigate])


  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-black">Loading...</h1>
      </main>
    );
  }

  if(!user){
    return null
  }

  return children
}

export default Protected;
