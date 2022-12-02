const RegisterForm = ({ regUsername, regPassword, setRegUsername, setRegPassword, handleSubmit }) => {
    return (
        <div className='container-col mg-top-vlg border-neon-red pad-vlg auto radius-lg shadow-neon-red'>
            <h1>Register</h1>
            <div className='underline-full bg-red'></div>

            <form className='container-col' onSubmit={handleSubmit}>
                <div className='container-col mg-top-md'>
                    <label>Username</label>
                    <input
                        type='text'
                        value={regUsername}
                        className='input-text'
                        placeholder='Enter username'
                        onChange={(event) => setRegUsername(event.target.value)}
                    />
                </div>

                <div className='container-col mg-top-md'>
                    <label>Password</label>
                    <input
                        type='password'
                        value={regPassword}
                        className='input-text'
                        placeholder='Enter password'
                        onChange={(event) => setRegPassword(event.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-h-md full mg-top-lg'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
