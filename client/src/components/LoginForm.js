const LoginForm = ({ handleSubmit, password, setPassword, username, setUsername }) => {
    return (
        <div className='container-col auto mg-top-vlg radius-md pad-vlg size-sm shadow-neon-red '>
            <h2 className='text-center'>Login</h2>
            <div className='underline-full'></div>

            <form onSubmit={handleSubmit}>
                <div className='container-col mg-top-md'>
                    <label>Username</label>
                    <input
                        type='text'
                        name=''
                        value={username}
                        className='input-text'
                        placeholder='Enter username'
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div className='container-col mg-top-md'>
                    <label>Password</label>
                    <input
                        type='password'
                        value={password}
                        className='input-text'
                        placeholder='Enter password'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <button type='submit' className='btn full mg-top-lg btn-h-md '>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
