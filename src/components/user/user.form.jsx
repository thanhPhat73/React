import { useState } from "react";
import { Button, message, notification } from "antd";
import { Input } from "antd";
import { createUserAPI } from "../../services/api.service";


const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleClick = async () => {
        const res = await createUserAPI(fullName, email, password, phoneNumber)

        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tao user thanh cong"
            }

            )
        }
        console.log(res.data)
    }


    return (
        <div className="user-form">
            <div>
                <span>Full Name</span>
                <Input
                    value={fullName}
                    onChange={(event) => { setFullName(event.target.value) }}
                />
            </div>
            <div>
                <span>PassWord</span>
                <Input.Password
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
            </div>
            <div>
                <span>Email</span>
                <Input
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
            </div>
            <div>
                <span>Phone number</span>
                <Input
                    value={phoneNumber}
                    onChange={(event) => { setPhoneNumber(event.target.value) }}
                />
            </div>
            <div>

                <Button type="primary"
                    onClick={handleClick}
                >Creat user</Button>
            </div>
        </div>
    )
}
export default UserForm;