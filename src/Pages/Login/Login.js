import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();



    const from = location.state?.form?.pathname || '/';

    if(token){
        navigate(from, { replace: true });
    }



    const handleLogin = (data) => {
        console.log(data);
        setLoginError('');

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h2 className='text-2xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            type="text" {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            type="password" {...register("password",
                                {
                                    required: "Enter your password",
                                    minLength: { value: 6, message: "password must be 6 character" }
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forgat Password ?</span></label>
                    </div>
                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                    <input className='btn btn-primary mt-4 w-full' type="submit" />

                </form>
                <p>New to Doctors Portal? <Link className='text-info' to="/signup">Create new account</Link></p>
                {/* <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn text-white btn-secondary w-full'>CONTINUE WITH GOOGLE</button> */}
            </div>
        </div>
    );
};

export default Login;