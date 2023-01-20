


function Logout(){

    const handleSubmit = async (event) => {
        event.preventDefault();

        const accountsUrl = "http://localhost:8000/token/";
            const fetchConfig = {
                method: "delete",
                credentials: "include",
            };
            await fetch(accountsUrl, fetchConfig);
            console.log("word")

    }
    return (
        <>
         <button
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Log Out
          </button>
        </>
    )
}
export default Logout;
