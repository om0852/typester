import Cookies from "js-cookie"
const userdetails = async () => {

    const res = await fetch(`http://localhost:3000/api/userdetails`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: Cookies.get("id")
        }),
    });
    const response = await res.json()
    return response.message;
}
export default userdetails;