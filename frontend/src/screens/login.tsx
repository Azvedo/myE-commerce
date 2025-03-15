import React from "react";
import { login } from "../services/auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const loginSchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(6).nonempty(),
});

type loginType = z.infer<typeof loginSchema>;

const Login: React.FC = () => {

    const { register, handleSubmit } = useForm<loginType>({
        resolver: zodResolver(loginSchema)
    });

    async function handleLogin(data: loginType) {
        try {
            const response = await login(data);
            localStorage.setItem("token", response.token);
            window.location.href = "/admin";
        } catch (error) {
            console.error("Failed to login:", error);
            alert("Erro ao fazer login. Tente novamente.");
        }
    }

    return (
        <div className="w-full md:flex h-screen">
            <motion.div className="flex flex-col text-center items-start md:items-center md:justify-center h-1/2 md:h-screen md:w-1/2  bg-stone-300 md:pb-42 p-4"
                initial={{ x:-100, opacity: 0 }}
                animate={{x:0 , opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img className="hidden md:block" src="/E-commerce.png" alt="logo"/>
                <p className="text-2xl font-extralight text-black">Realize o login para acessar a página de administrador</p>
            </motion.div>
            <motion.div className="flex items-center justify-center h-1/2 md:h-screen md:w-1/2"
                initial={{ x:100, opacity: 0 }}
                animate={{x:0 , opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="text-black max-md:bg-amber-50 flex flex-col items-center justify-center w-2/3 md:w-1/2 border-1 border-black p-6 gap-6 rounded-lg max-md:fixed max-md:top-1/2 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2">
                    <FontAwesomeIcon icon={faUser} size="3x" className="text-black" />
                    <h1 className="text-xl text-black">Login</h1>
                    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col items-center gap-3 w-full">
                        <input type="email" placeholder="Email" className="border-1 rounded-lg pl-2 py-1 w-full" {...register("email")}/>
                        <input type="password" placeholder="Senha" className="border-1 rounded-lg pl-2 py-1 w-full" {...register("password")} />
                        <button type="submit" className="bg-[#111111] text-white p-2 w-1/2 rounded-lg mt-4" >Entrar</button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

export default Login;