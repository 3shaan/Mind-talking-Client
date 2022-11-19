import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setAdmin] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
              .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setAdmin(data.isAdmin)
                })
              .catch((err) => console.log(err));
     }
    }, [email])
    return [isAdmin]
}
export default useAdmin;