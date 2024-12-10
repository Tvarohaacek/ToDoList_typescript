

export const Test = ({isButtonDisabled} :{  isButtonDisabled: boolean} ) => {
    const isLogged = false;
    const items = ['Apple', 'Banana', 'Cherry'];
    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>
            <main>
                {isButtonDisabled ? (
                    <button disabled>Click me</button>
                ) : (
                    <button>Click me</button>
                )}
                {isLogged ? (
                    <h2>Welcome back!</h2>
                ) : (
                    <h2>Please log in</h2>
                )}
                <ul>
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </main>
            <footer>
                <h3>Footer</h3>
            </footer>
        </div>
    );
}
