import LoginCard from "@/components/login/login-card";
import Image from "next/image";

function Login() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://static.canva.com/web/images/543d7829999d351b301ced5ed3c1f087.jpg)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
        }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
