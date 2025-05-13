"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { loginWithGithub, loginWithGoogle } from "@/services/login";
import { useMutation } from "@tanstack/react-query";
export default function Login() {

    const { mutate } = useMutation<void, Error>({
        mutationFn: loginWithGithub,
        onSuccess: () => {
            console.log('Redirecting after GitHub login...');
            // redirect sẽ được supabase tự xử lý nên không cần push ở đây
        },
        onError: (error) => {
            console.error('GitHub login error:', error.message);
        }
    });

    const { mutate: loginGG } = useMutation<void, Error>({
        mutationFn: loginWithGoogle,
        onSuccess: () => {
            console.log('Redirecting after Google login...');
        },
        onError: (error) => {
            console.error('Google login error:', error.message);
        }
    });
    return (
        <>
            <div className="form-container mx-auto my-10">
                <p className="title dark:text-black">Welcome back</p>
                <form className="form">
                    <input
                        type="email"
                        className="input dark:text-black"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="input dark:text-black"
                        placeholder="Password"
                    />
                    <p className="page-link">
                        <span className="page-link-label">Forgot Password?</span>
                    </p>
                    <button className="form-btn">Log in</button>
                </form>
                <p className="sign-up-label">
                    have an account?<span className="sign-up-link">Sign up</span>
                </p>
                <div className="buttons-container">
                    <div className="apple-login-button" onClick={() => mutate()}>
                        <FontAwesomeIcon icon={faGithub} className="text-xl" />
                        <span>Log in with Github</span>
                    </div>
                    <div className="google-login-button" onClick={() => loginGG()}>
                        <FontAwesomeIcon icon={faGoogle} className="dark:text-black text-xl" />
                        <span className="dark:text-black">Log in with Google</span>
                    </div>
                </div>
            </div>
        </>
    );
}
