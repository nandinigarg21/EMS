import React, { useState } from 'react';
import toast from "react-hot-toast";
import apis from "../../api/apis";
import httpAction from '../../utils/httpAction';
import useProvideHooks from '../../hooks/useProvider';

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const { navigate } = useProvideHooks(); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const result = await httpAction({
                url: apis().registerUser, 
                method: "POST", 
                body: JSON.stringify(formData),
                credentials: "include",
            });

            if (result?.status) {
                toast.success(result.message);
                navigate('/login');
                setFormData({ name: "", email: "", password: "" });
            }
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(error.message || "Something went wrong");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-black rounded-lg shadow border border-gray-600 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold text-white md:text-2xl">Sign Up</h1>
                    <form onSubmit={submitHandler} className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your name</label>
                            <input type="text" name="name" id="name" className="bg-black border border-gray-600 text-white rounded-lg w-full p-2.5" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-black border border-gray-600 text-white rounded-lg w-full p-2.5" placeholder="name@company.com" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-black border border-gray-600 text-white rounded-lg w-full p-2.5" required value={formData.password} onChange={handleChange} />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
